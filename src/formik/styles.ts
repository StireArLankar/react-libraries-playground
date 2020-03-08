import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export default makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      paddingTop: 50,
      background: 'rgba(100, 200, 200, 0.5)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      minWidth: 500,
    },
  })
)
