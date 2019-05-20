import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link as Rlink } from 'react-router-dom'


export const ForgotHeader = ({ classes }) => (
  <>
    <Avatar className={classes.avatar}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      Forgot your Password
    </Typography>
  </>
)

export const ForgotBody = ({ classes, style }) => (
    <form >
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
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Back
      </Button>
      <Rlink to="/login">Back to Login</Rlink>
      <Rlink to="/otp">Towards Otp</Rlink>
      <Rlink to="/otp1">Towards Otp1</Rlink>
    </form>
)

