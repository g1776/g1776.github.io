import {
  makeStyles,
  Grid,
  Typography,
  Button,
  Paper,
} from "@material-ui/core";
import { Link } from 'react-router-dom'

const PortfolioCard = ({ title, description, image, link }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.card}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.title}>{title}</Typography>
        </Grid>
        <Grid item xs={12} md={8} >
          <Typography variant="body1"><p className={classes.description}>{description}</p></Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <img
            src={image}
            style={{ width: "100%", height: "auto" }}
            alt={title}
          />
        </Grid>
      </Grid>
      <Grid container style={{ justifyContent: "end" }}>
        <Grid item>
          <Button
            component={Link}
            to={link}
            variant="contained"
            color="primary"
            className={classes.btn}
          >
            Read More...
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(5),
    padding: theme.spacing(2),
  },
  spacer: {
    marginTop: theme.spacing(2),
  },
  title: {
    height: "60px"
  },
  btn: {
    color: theme.palette.common.white,
  },
  description: {
    display: "-webkit-box",
    "-webkit-line-clamp": 6,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
}));

export default PortfolioCard;
