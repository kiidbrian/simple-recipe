// BEGIN HEADER
export const AppStyles = () => ({
  textAlign: 'center',
});

export const AppLogo = () => ({
  height: '80px',
});

export const AppHeader = ({ backgroundColor = '#F8F8F8' }) => ({
  backgroundColor: backgroundColor,
  height: `150px`,
  padding: `20px`,
  color: '#91C11E',
});

export const AppTitle = () => ({
  fontSize: '1.5em',
});
// END HEADER

// BEGIN FAVORITE

export const keyframe = props => ({
  '0%': { transform: 'scale(.75)' },
  '20%': { transform: 'scale(1)' },
  '40%': { transform: 'scale(.75)' },
  '100%': { transform: 'scale(1)' },
});

// END FAVORITE

// BEGIN FONTAWESOME
export const fontAwesome = ({ color }) => ({
  margin: '0px 5px -1px 5px',
  cursor: 'pointer',
  color: color,
});
// END FONTAWESOME
