import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Box from '@material-ui/core/Box';
import { LoginBadge, Spacer24, HeaderWrapper, CustomLink } from './components';

export const PasswordHeader = ({ history }) => {
  const next = () => history.push('/email');
  return (
    <HeaderWrapper>
      <Avatar>
        <LockOutlinedIcon />
      </Avatar>
      <Spacer24 />
      <Typography variant="h5" gutterBottom>
        Welcome
      </Typography>
      <LoginBadge username="devarshmshah@gmail.com" next={next} />
    </HeaderWrapper>
  );
};

export const PasswordBody = ({ history }) => {
  const [visible, setVisible] = React.useState(false);
  const toggleVisiblity = () => setVisible(!visible);
  const next = () => history.replace('/otp');
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
          id="password"
          label="Enter your password"
          name="password"
          type={visible ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  aria-label="Toggle password visibility"
                  onClick={toggleVisiblity}
                >
                  {visible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <Spacer24 />
        <CustomLink>Forgot Password?</CustomLink>
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
