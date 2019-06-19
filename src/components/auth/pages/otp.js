import React from 'react';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Box from '@material-ui/core/Box';
import { LoginBadge, Spacer24, HeaderWrapper } from './components';

export const OtpHeader = ({ history }) => {
  const next = () => history.push('/email');
  return (
    <HeaderWrapper>
      <Avatar>
        <LockOutlinedIcon />
      </Avatar>
      <Spacer24 />
      <Typography variant="h5" gutterBottom>
        2-step Verification
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="center">
        This extra step shows that it’s really you trying to sign in
      </Typography>
      <LoginBadge username="devarshmshah@gmail.com" next={next} />
    </HeaderWrapper>
  );
};

export const OtpBody = ({ history }) => {
  const next = () => history.push('/email');
  return (
    <form>
      <Spacer24 />
      <Typography onClick={next} variant="subtitle2" gutterBottom align="left">
        2-step Verification
      </Typography>
      <Typography variant="body2" gutterBottom align="left">
        Get a verification code from the <b>Google Authenticator</b> app
      </Typography>
      <Box
        component="div"
        display="flex"
        flexWrap="wrap"
        justifyContent="flex-end"
      >
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="otp"
          label="Enter Code"
          name="otp"
        />
        <Spacer24 />
        <Button
          variant="contained"
          size="medium"
          color="primary"
          onClick={next}
        >
          Next
        </Button>
      </Box>
    </form>
  );
};
