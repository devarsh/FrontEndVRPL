import React from 'react';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link as Rlink } from 'react-router-dom';

import useStyles from './styles.js';

export const ForgotHeader = () => {
  const classes = useStyles();
  return (
    <>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Forgot your Password
      </Typography>
    </>
  );
};

export const ForgotBody = props => {
  return (
    <form>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
      />

      <Rlink to="/login">Previous</Rlink>
    </form>
  );
};
