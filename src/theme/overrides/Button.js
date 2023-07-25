import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiButton: {
      variants: [
        {
          props: { variant: 'roundedOutlineNav' },
          style: {
            textTransform: 'none',
            border: '1px solid',
            borderColor: '#000',
            borderRadius: 20,
            backgroundColor: 'transparent',
            paddingLeft: '20px',
            paddingRight: '20px',
            fontFamily: "Lato, 'sans-serif'",
            color: '#000',
            '&:hover': {
              backgroundColor: '#A3A3A3',
            },
          },
        },
        {
          props: { variant: 'roundedOutlineNavMbl' },
          style: {
            textTransform: 'none',
            border: '1px solid',
            borderColor: '#fff',
            borderRadius: 20,
            backgroundColor: 'transparent',
            paddingLeft: '20px',
            paddingRight: '20px',
            fontFamily: "Lato, 'sans-serif'",
            color: '#fff',
            '&:hover': {
              backgroundColor: '#A3A3A3',
            },
          },
        },
        {
          props: { variant: 'primary' },
          style: {
            borderRadius: 30,
            backgroundColor: '#4440db',
            fontSize: '17px',
            fontWeight: 900,
            lineHeight: '17px',
            border: '2px solid',
            borderColor: '#4440db',
            color: '#fff',
            letterSpacing: '2px',

            '&:hover': {
              backgroundColor: 'transparent',
              border: '2px solid',
              borderColor: '#4440db',
              color: '#4440db',
            },
          },
        },
        {
          props: { variant: 'secondary' },
          style: {
            borderRadius: 30,
            backgroundColor: '#ffffff',
            border: '2px solid',
            borderColor: 'rgba(68, 64, 219, 0.23)',
            color: '#4440db',
            paddingTop: '15px',
            paddingBottom: '15px',
            paddingLeft: '35px',
            paddingRight: '35px',
            letterSpacing: '2px',
            fontWeight: 900,

            '&:hover': {
              backgroundColor: 'transparent',
              borderColor: '#4440db',
              color: '#4440db',
            },
          },
        },
        {
          props: { variant: 'addToCart' },
          style: {
            textTransform: 'none',
            width: '100%',
            backgroundColor: 'white',
            fontSize: '17px',
            fontWeight: 400,
            lineHeight: '17px',
            color: 'black',
            paddingTop: '10px',
            paddingBottom: '10px',
            paddingLeft: '35px',
            paddingRight: '35px',
            borderRadius: 0,
            border: '1px solid #000',
            '&:hover': {
              backgroundColor: 'black',
              color: '#fff',
            },
          },
        },
        {
          props: { variant: 'addToCartOpposite' },
          style: {
            textTransform: 'none',
            width: '100%',
            backgroundColor: 'black',
            fontSize: '17px',
            fontWeight: 400,
            lineHeight: '17px',
            color: 'white',
            paddingTop: '10px',
            paddingBottom: '10px',
            paddingLeft: '35px',
            paddingRight: '35px',
            borderRadius: 0,
            border: '1px solid #000',
            '&:hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
        },
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.z8,
          '&:hover': {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
          boxShadow: theme.customShadows.primary,
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary,
        },
        outlinedInherit: {
          border: `1px solid ${alpha(theme.palette.grey[500], 0.32)}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
