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
import useStyles from './styles';

export const PasswordHeader = () => {
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
        Welcome
      </Typography>
    </Box>
  );
};

export const PasswordBody = ({ history }) => {
  const classes = useStyles();
  const [visible, setVisible] = React.useState(false);
  const toggleVisiblity = () => setVisible(!visible);
  const next = () => history.replace('/otp');
  return (
    <form>
      <Box component="div" display="block">
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="password"
          label="Enter Your Password"
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
