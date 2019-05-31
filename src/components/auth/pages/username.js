import React from 'react';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Box from '@material-ui/core/Box';
import useStyles from './styles';

export const UsernameHeader = () => {
  return (
    <Box
      component="div"
      display="flex"
      flexDirection="column"
      alignItems="center"
      style={{ width: '100%', minHeight: '150px', paddingTop: '20px' }}
    >
      <Avatar>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h5" gutterBottom>
        Sign in
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        to continue to Application
      </Typography>
    </Box>
  );
};

export const UsernameBody = ({ history }) => {
  const classes = useStyles();
  const next = () => history.push('/pwd');
  return (
    <form>
      <Box component="div" display="block">
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="email"
          autoFocus
        />
      </Box>
      <Box
        className={classes.BoxPadding}
        display="flex"
        justifyContent="space-between"
      >
        <Button
          color="primary"
          classes={{
            root: classes.ButtonText,
            textPrimary: classes.NoHoverBackground
          }}
        >
          <Typography variant="subtitle2">Forgot Username?</Typography>
        </Button>
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
