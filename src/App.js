import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Auth from './components/auth';
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#69a1ff',
      main: '#1a73e8',
      dark: '#0049b5',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#ff5c8d',
      main: '#d81b60',
      dark: '#a00037',
      contrastText: '#ffffff'
    }
  },
  props: {
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true // No more ripple, on the whole application 💣!
    }
  },
  transitions: {
    // So we have `transition: none;` everywhere
    create: () => 'none'
  }
});

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Auth />
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
