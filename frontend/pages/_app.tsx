import 'macro-css';
import '../styles/globals.css';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
