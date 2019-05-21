import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Checkbox from '@material-ui/core/Checkbox';
import { Link as Rlink } from 'react-router-dom';

import useStyles from './styles.js';

export const LoginHeader = () => {
  const classes = useStyles();
  return (
    <>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
    </>
  );
};

export const LoginBody = () => {
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
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />

      <Rlink to="/forgot">Next</Rlink>
    </form>
  );
};
