import {
  Paper,
  Box,
  Typography
} from '@material-ui/core'
import Tilt from 'react-vanilla-tilt'
import { makeStyles } from '@material-ui/core/styles';

function Home() {
  const classes = useStyles()
  return (
    <main className={classes.root}>
      <Tilt 
      style={{display:"block", width: "80%", margin: "auto"}}
      options={{max: 35}}
      >
        <Paper className={classes.paper}>
          <Typography variant="h1">Gregory Glatzer</Typography>
        </Paper>
      </Tilt>
    </main>
  );

}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(7),
  },
  paper: {
    padding: theme.spacing(3),
  }
}));

export default Home;
