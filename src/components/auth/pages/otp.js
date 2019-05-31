import React from 'react';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Box from '@material-ui/core/Box';
import useStyles from './styles';

export const OtpHeader = () => {
  return (
    <Box
      component="div"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      style={{ width: '100%', minHeight: '150px', paddingTop: '20px' }}
    >
      <Avatar>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h5" gutterBottom>
        2-step Verification
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="center">
        This extra step shows that it’s really you trying to sign in
      </Typography>
    </Box>
  );
};

export const OtpBody = ({ history }) => {
  const classes = useStyles();
  const next = () => history.push('/email');
  return (
    <form>
      <Typography variant="subtitle2" gutterBottom align="left">
        2-step Verification
      </Typography>
      <Typography variant="body2" gutterBottom align="left">
        Get a verification code from the <b>Google Authenticator</b> app
      </Typography>
      <Box component="div" display="block">
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="code"
          label="Enter Code"
          name="code"
          autoFocus
        />
      </Box>
      <Box
        className={classes.BoxPadding}
        display="flex"
        justifyContent="space-between"
      >
        <Button
          classes={{ root: classes.ButtonText }}
          variant="contained"
          size="large"
          color="primary"
          onClick={next}
        >
          Next
        </Button>
      </Box>
    </form>
  );
};
