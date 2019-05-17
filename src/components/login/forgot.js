import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


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

const Forgot = ({ classes, style }) => (

  <div className={classes.authCarouselItem} style={style}>
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
    </form>
  </div>
)

export default Forgot