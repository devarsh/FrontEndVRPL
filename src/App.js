import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Auth from './components/auth';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
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
