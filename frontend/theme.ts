import { createTheme } from '@material-ui/core';

export const theme = createTheme({
  overrides: {
    MuiButton: {
      root: { borderRadius: '9px' },
      contained: {
        backgroundColor: 'white',
        boxShadow: '0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%)',
        '&:hover': {
          backgroundColor: 'white',
          boxShadow:
            '0 1px 1px rgb(0 0 0 / 8%), 0 4px 7px rgb(0 0 0 / 8%), 1px 0 0 rgb(0 0 0 / 8%)',
        },
      },
    },
  },
});
