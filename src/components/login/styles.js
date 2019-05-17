import { makeStyles } from '@material-ui/styles'

const themeVars = {
  width: 450,
  height: 500,
  borderRadius: 8,
}

export default makeStyles(theme => ({
  '@global': {
    body: {
      background: theme.palette.common.white,
    }
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    minHeight: '100vh',
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
  },
  avatar: {
    margin: theme.spacing(2, 0, 2, 0),
    backgroundColor: theme.palette.secondary.main,
  },
  authHeader: {
    padding: theme.spacing(0, 5, 0, 5),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  authBodyCarouselWrapper: {
    position: 'relative',
    width: themeVars.width,
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
    padding: theme.spacing(5, 5, 4, 5),
    flexShrink: 0,
    '& form': {
      width: themeVars.width,
    }
  },
  linerProgress: {
    height: theme.spacing(1),
    borderRadius: themeVars.borderRadius,
    position: 'absolute',
    top: 0,
    left: 0,
    width: themeVars.width,
  },
  link: {
    marginTop: theme.spacing(2),
    display: 'block'
  }

}))
