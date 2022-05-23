import { makeStyles, Typography } from "@material-ui/core";

const Header = (props) => {
    const classes = useStyles();
    return <>
        <Typography variant="h2" className={classes.header}>{props.children}</Typography>
    </>
}

const useStyles = makeStyles((theme) => ({
    root: {
      width: "80%",
    },
    header: {
      textAlign: "center",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    }
  }));

export default Header;