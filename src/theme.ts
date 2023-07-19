import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          '&:hover': {
            backgroundColor: '#ffffff',
            '&:not(.Mui-disable)': {
              '&:before': {
                borderBottom: 'none',
              },
            },
          },
          borderRadius: 4,
          '&.Mui-error': {
            border: '2px solid red',
            '&::after': {
              borderBottom: 'none',
            },
          },
          '&::before': {
            borderBottom: 'none',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          backgroundColor: '#ffffff',
          borderRadius: 4,
        },
        root: {
          backgroundColor: '#ffffff',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: 52,
          borderRadius: 10,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#2A6EBB',
          fontSize: 16,
          fontWeight: 700,
          '&:hover': {
            pointer: 'cursor',
          },
        },
      },
    },
  },
  palette: {
       primary: {
      main: '#EDB5B4', // tea rose
      dark:"#074F57" // midnight green
    },
    secondary: {
      main: '#2A6EBB', // celtic blue
      dark: '#0C1B33', // oxford blue
    },

    text: {
      primary: '#FEE7E6',
      secondary: '#FEE7E6',
    },
    divider: '#00000050',
  },
  typography: {
    h1: {
      fontSize: 34,
      fontWeight: 800,
      color: "#074F57",
      paddingBottom: '8px',
    },
    h2: {
      color: "#074F57",
      fontSize: 24,
      fontWeight: 800,
      lineHeight: 1.375,
      paddingBottom: '8px',
    },
    h3: {
      fontWeight: 800,
      fontSize: 20,
      color: "#074F57",
    },
    h4: {
      fontSize: 16,
      fontWeight: 700,
      color: "#074F57",
    },
    body1: {
      fontSize: 16,
      color: "#074F57",
      fontWeight: 400,
      lineHeight: 1.625,
    },
    body2: {
      fontSize: 16,
      color: "#074F57",
      fontWeight: 800,
      textAlign:'left'
    },
    button: {
      fontWeight: 800,
      color: '#1B1B1B',
      textTransform: 'capitalize',
    },
    caption: {
      fontSize: 12,
      color: "#074F57",
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: 700,
      color:"#074F57",
    },
    fontFamily: `'Open Sans', sans-serif`,
  },
});
