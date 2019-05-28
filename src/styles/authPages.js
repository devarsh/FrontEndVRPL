import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(2, 0, 2, 0),
    backgroundColor: theme.palette.secondary.main
  },
  link: {
    marginTop: theme.spacing(2),
    display: 'block'
  }
}));
