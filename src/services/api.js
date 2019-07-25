import * as axios from 'axios';
import { BrowserClient, Hub } from '@sentry/browser';

export class ApiService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.configureSentry();
    this.configureHttp();
  }

  /**
   * Setup sentry logging infrastructure
   */
  configureSentry() {
    this.sentryClient = new BrowserClient(window['sentryConfig']);
    this.sentryHub = new Hub(this.sentryClient);
  }

  /**
   * Setup axios
   */
  configureHttp() {
    this.http = axios.create({
      baseURL: this.baseUrl,
    });

    // Configure interceptors
    this.http.interceptors.response.use(
      response => response.data,
      error => {
        if (error.response) {
          //Log 500 errors to sentry
          if (error.response.status >= 500) {
            this.logException(
              error,
              'The request was made and the server responded with a status code that falls out of the range of 2xx',
              {
                data: error.response.data,
                status: error.response.status,
                headers: error.response.headers,
                config: error.response.config,
              }
            );
          }
        } else if (error.request) {
          this.logException(
            error,
            'The request was made but no response was received',
            {
              request: error.request,
              config: error.config,
            }
          );
        } else {
          this.logException(
            error,
            'Something happened in setting up the request that triggered an Error',
            {
              message: error.message,
              config: error.config,
            }
          );
        }
        return Promise.reject(error);
      }
    );
  }

  /**
   * Log exception to Sentry
   * @param error
   * @param message
   * @param data
   */
  logException(error, message, data) {
    this.sentryHub.withScope(scope => {
      if (data || message) {
        this.sentryHub.addBreadcrumb({
          category: 'http',
          message: message,
          data: data,
        });
      }
      this.sentryHub.captureException(error);
    });
  }
}
