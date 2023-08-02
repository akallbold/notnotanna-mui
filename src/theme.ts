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
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       height: 52,
    //       borderRadius: 10,
    //       color:'secondary.main'
    //     },
    //   },
    // },
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
      main: '#F7D4C7', // pink
      dark: '#ac948b', // dark pink for subtitle1
    },
    secondary: {
      main: '#136A61', // green
    },

    text: {
      primary: '#FEE7E6',
      secondary: '#FEE7E6',
    },
    divider: '#00000050',
  },
  typography: {
    h1: { // AKB LOGO
      fontSize: 34,
      fontWeight: 800,
      fontFamily:"Shantell Sans",
      textAlign:'center',
      color: "#136A61",
    },
    h2: { // SECTION TITLES
      color: "#136A61",
      fontSize: 34,
      fontWeight: 700,
    },
    h3: { 
      color:"#136A61",
      fontSize: 30,
      fontWeight: 900,
      // textDecoration: 'underline',
    },
    h4: {
      color:"#136A61",
      fontSize: 16,
      fontWeight: 700,
    },
    h5: {
      color:"#136A61"
    },   
    // h6: {
    //   color:"#136A61"
    // },
    body1: {
      color:"#136A61",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.625,
      textAlign:'left'
    },
    body2: {
      color:"#136A61",
      fontSize: 16,
      fontWeight: 800,
      textAlign:'left'
    },
    button: {
      color:"#136A61",
      textTransform: 'capitalize',
      textAlign:'left',
      textDecoration:"underline"
    },
    caption: {
      fontSize: 12,
      color:"#136A61"
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: 700,
      color:'#ac948b',
      textAlign: "left",
      letterSpacing: "2px",
      textTransform:"uppercase"
    },  
    fontFamily: 'Cormorant, serif',
    
  },
});
