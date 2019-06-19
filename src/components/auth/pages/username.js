import React from 'react';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Box from '@material-ui/core/Box';
import { Spacer24, HeaderWrapper, CustomLink } from './components';
export const UsernameHeader = () => {
  return (
    <HeaderWrapper>
      <Avatar>
        <LockOutlinedIcon />
      </Avatar>
      <Spacer24 />
      <Typography variant="h5" gutterBottom>
        Sign in
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        to continue to Application
      </Typography>
    </HeaderWrapper>
  );
};

export const UsernameBody = ({ history }) => {
  const next = () => history.push('/pwd');
  return (
    <form>
      <Box
        component="div"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="email"
        />
        <Spacer24 />
        <CustomLink>Forgot Username?</CustomLink>
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
