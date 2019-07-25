// BEGIN RECIPE CARD
export const cardWrapper = () => ({
  position: 'relative',
  backgroundColor: '#fff',
  boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1)',
  marginBottom: '25px',
  flex: '1 1 0',
  '-webkit-flex': '1 1 0',
  boxSizing: 'border-box',

  '@media only screen and (min-width: 768px)': {
    margin: '0 8px 15px 8px',
    '-webkit-flex-basis': '30.33333333333333%',
    maxWidth: '30.33333333333333%',
  },

  '@media only screen and (max-width: 768px)': {
    margin: '0 8px 15px 8px',
    '-webkit-flex-basis': '47%',
    maxWidth: '47%',
  },

  '@media only screen and (max-width: 640px)': {
    marginRight: 'unset',
    '-webkit-flex-basis': '100%',
    maxWidth: '100%',
  },

  ':hover': {
    boxShadow: '0 3px 8px 0 rgba(0,0,0,0.15)',
  },
});

export const cardContent = () => ({
  fontSize: '16px',
  fontWeight: 400,
  color: '#343434',
  padding: '10px 8px 10px 8px',
  minHeight: '130px',
  boxSizing: 'border-box',
});

export const imageStyle = () => ({
  width: '100%',
  objectFit: 'scale-down',
});

export const anchorStyle = () => ({
  display: 'block',
});

export const timeStyle = () => ({
  display: 'flex',
  justifyContent: 'space-between',
});

export const nameAnchor = () => ({
  textDecoration: 'none',
  color: '#343434',
  ':visited': {
    color: '#343434',
  },
});

export const cardName = () => ({
  fontSize: '16px',
  fontWeight: 600,
  margin: '0px',
  lineHeight: '1.8em !important',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const pointer = () => ({
  cursor: 'pointer',
});

export const starFavoriteWrapper = () => ({
  display: 'flex',
  alignItems: 'center',
});

export const gainsboro = () => ({
  color: 'gainsboro',
});

export const headLineStyle = () => ({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: '14px',
  lineHeight: '1.7em',
  marginTop: '0px',
  marginBottom: '40px',
  minHeight: '25px',
});
// END RECIPE CARD

// BEGIN RECIPE LIST PRESENTATION
export const cardContainer = () => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '0 15px',
});

export const cardHolder = () => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexBasis: '1140px',
  '-webkit-flex-basis': '1140px',
  maxWidth: '1140px',
});
// END RECIPE LIST PRESENTATION
