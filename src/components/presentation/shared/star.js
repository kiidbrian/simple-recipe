import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as starSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as starRegular } from '@fortawesome/free-regular-svg-icons';

const Stars = ({ className = '', onStar, style = '', rating }) => {
  return (
    <div style={{ marginRight: '5px', display: 'inline-block' }}>
      {Array.from(Array(5), (x, index) => index + 1).map((value, idx) => {
        const index = idx + 1;
        if (rating && index <= Math.round(rating)) {
          return (
            <FontAwesomeIcon
              className={className}
              style={style}
              icon={starSolid}
              key={idx}
              onClick={() => onStar(value)}
            />
          );
        } else if (index > Math.round(rating)) {
          return (
            <FontAwesomeIcon
              className={className}
              style={style}
              icon={starRegular}
              key={idx}
              onClick={() => onStar(value)}
            />
          );
        } else {
          return (
            <FontAwesomeIcon
              className={className}
              style={style}
              icon={starRegular}
              key={idx}
              onClick={() => onStar(value)}
            />
          );
        }
      })}
    </div>
  );
};

export default Stars;
