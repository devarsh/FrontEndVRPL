import React from 'react';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Face from '@material-ui/icons/Face';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  iconbutton: {
    '&:hover': {
      backgroundColor: 'inherit'
    },
    color: theme.palette.common.black
  },
  paper: {
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[2]
  },
  link: {
    '&:hover': {
      textDecoration: 'none'
    }
  }
}));

export const LoginBadge = ({ username, next }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} onClick={next}>
      <IconButton className={classes.iconbutton} size="small">
        <Face style={{ marginRight: '8px' }} />
        <Typography variant="subtitle2">{username}</Typography>
        <KeyboardArrowDown />
      </IconButton>
    </Paper>
  );
};

export const HeaderWrapper = (props) => (
  <Box
    component="div"
    display="flex"
    flexDirection="column"
    alignItems="center"
    style={{ minHeight: '150px', paddingTop: '20px' }}
    {...props}
  />
);

export const Spacer24 = () => <div style={{ width: '100%', height: '24px' }} />;

export const CustomLink = (props) => {
  const classes = useStyles();
  return (
    <Link
      className={classes.link}
      component="button"
      variant="subtitle2"
      {...props}
    />
  );
};
