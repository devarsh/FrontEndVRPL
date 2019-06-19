import { makeStyles } from '@material-ui/styles';

const themeVars = {
  width: 450,
  height: 500,
  borderRadius: 8
};

export default makeStyles((theme) => ({
  '@global': {
    body: {
      background: theme.palette.common.white
    }
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    minHeight: '100vh'
  },
  overlay: {
    opacity: 0,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: `rgba(255, 255, 255, 0.5)`
  },
  authWrapper: {
    width: themeVars.width,
    height: themeVars.height,
    border: '1px solid #dadce0',
    borderRadius: themeVars.borderRadius,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    margin: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '100vh',
      border: '0px'
    }
  },
  authHeader: {
    padding: theme.spacing(0, 5, 0, 5),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  authBodyCarouselWrapper: {
    position: 'relative',
    width: themeVars.width,
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  authCarouselItem: {
    top: 0,
    left: 0,
    width: themeVars.width,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    marginTop: theme.spacing(1),
    padding: theme.spacing(0, 5, 4, 5),
    flexShrink: 0,
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    },
    '& form': {
      width: themeVars.width,
      [theme.breakpoints.down('xs')]: {
        width: '100%'
      }
    }
  },
  linerProgress: {
    height: theme.spacing(1),
    borderRadius: themeVars.borderRadius,
    position: 'absolute',
    top: 0,
    left: 0,
    width: themeVars.width,
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  }
}));
