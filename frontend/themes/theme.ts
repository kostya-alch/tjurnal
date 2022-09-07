import { createTheme } from '@material-ui/core';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#46839d',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '8px',
        textTransform: 'inherit',
        fontSize: '16px',
        transition: 'none',
        '&:active': {
          boxShadow: '0 1px 1px rbg(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 15%)',
          transform: 'translateY(1px)',
        },
      },
      contained: {
        backgroundColor: 'white',
        boxShadow: '0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%)',
        '&:hover': {
          backgroundColor: 'white',
          boxShadow:
            '0 1px 1px rgb(0 0 0 / 8%), 0 4px 7px rgb(0 0 0 / 8%), 1px 0 0 rgb(0 0 0 / 8%)',
        },
      },
      containedPrimary: {
        backgroundColor: '#4683d9',
        '&:hover': {
          backgroundColor: '#437cce',
        },
      },
    },
  },
});
