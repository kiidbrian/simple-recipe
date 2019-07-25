export const containerStyle = () => ({
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
});

export const wrapper = () => ({
  '-webkit-flex': '1 1 0',
  boxSizing: 'border-box',
  minWidth: '300px',
});

export const wrapperStyle = () => ({
  position: 'relative',
  background: '#fff',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  width: '1140px',

  '@media only screen and (min-width: 640px)': {
    padding: '20px',
  },
  '@media only screen and (max-width: 640px)': {
    padding: '20px',
  },
  '@media only screen and (max-width: 576px)': {
    padding: '0 0 27px 0',
  },
});

export const imageWrapper = () => ({});

export const upperContent = () => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginBottom: '20px',
});

export const imageStyle = () => ({
  height: '300px',
  objectFit: 'cover',
  display: 'block',
  maxWidth: '100%',
  width: '100%',
  opacity: 1,
  transition: 'opacity 0.3s linear',
  '-webkit-transition': 'opacity 0.3s linear',
});

export const contentContainer = () => ({
  '@media only screen and (min-width: 1200px)': {
    paddingRight: '15px',
    paddingLeft: '15px',
  },
  '@media only screen and (min-width: 1024px)': {
    paddingRight: '10px',
    paddingLeft: '10px',
  },
  '@media only screen and (min-width: 768px)': {
    paddingRight: '10px',
    paddingLeft: '10px',
  },
  '@media only screen and (min-width: 640px)': {
    paddingRight: '15px',
    paddingLeft: '15px',
    marginTop: '0',
  },
  '-webkit-flex': '1 1 0',
  boxSizing: 'border-box',
  minWidth: '300px',
  marginTop: '20px',
  paddingRight: '15px',
  paddingLeft: '15px',
});

export const h2Styles = () => ({
  '@media only screen and (min-width: 768px)': {
    fontSize: '24px',
    lineHeight: '32px',
  },
  '@media only screen and (min-width: 0px)': {
    fontSize: '24px',
    lineHeight: '28px',
  },
  '@media only screen and (max-width: 640px)': {
    textAlign: 'center',
  },
  color: '#343434',
  fontFamily: 'Montserrat',
  fontWeight: 400,
  letterSpacing: '-0.3px',
  margin: '0px',
  padding: '0px',
  textAlign: 'left',
  // fontSize: '24px'
});

export const h4Styles = () => ({
  '@media only screen and (min-width: 768px)': {
    fontSize: '16px',
    lineHeight: '24px',
  },
  '@media only screen and (min-width: 0px)': {
    fontSize: '16px',
    lineHeight: '20px',
  },
  '@media only screen and (max-width: 640px)': {
    textAlign: 'center',
    paddingBottom: '25px',
    borderBottom: 'solid 1px #ebebeb',
  },
  color: '#343434',
  fontFamily: 'Montserrat',
  fontWeight: '400',
  letterSpacing: '-0.3px',
  padding: '0px',
  textAlign: 'left',
  margin: '10px 0 20px 0 !important',
});

export const description = () => ({
  '@media only screen and (min-width: 768px)': {
    fontSize: '16px',
    lineHeight: '24px',
  },
  '@media only screen and (min-width: 0px)': {
    fontSize: '16px',
    lineHeight: '20px',
  },
  '@media only screen and (max-width: 616px)': {
    display: 'none',
  },
  color: '#343434',
  fontFamily: 'Montserrat',
  fontWeight: '400',
  letterSpacing: '-0.3px',
  padding: '0px',
  textAlign: 'left',
  margin: '10px 0 20px 0 !important',
});

export const StarFavorite = () => ({
  '@media only screen and (max-width: 640px)': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const NutrientContainer = () => ({
  '@media only screen and (min-width: 640px)': {
    textAlign: 'left',
  },
});

export const nutrient = () => ({
  marginBottom: '5px',
});

export const nutrientsInline = () => ({
  '@media only screen and (min-width: 768px)': {
    fontSize: '16px',
    lineHeight: '24px',
  },
  '@media only screen and (min-width: 0px)': {
    fontSize: '16px',
    lineHeight: '20px',
  },
  '@media only screen and (max-width: 640px)': {
    textAlign: 'center',
    marginBottom: '15px',
  },
  '@media only screen and (min-width: 640px)': {
    textAlign: 'left',
    marginBottom: '10px',
  },
  display: 'flex',
  justifyContent: 'space-between',
});

export const pill = () => ({
  padding: '10px 17px',
  border: '1px solid',
  display: 'inline-block',
  margin: '9px 12px 0 0',
  borderRadius: '36px',
});

export const ingContainer = () => ({
  padding: '0 20px',
  textAlign: 'center',
  '@media only screen and (min-width: 640px)': {
    padding: '0',
    textAlign: 'left',
  },
});
