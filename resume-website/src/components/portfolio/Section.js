import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const Section = (props) => {
    const { divider = false } = props;
  
    const classes = useStyles();
  
    return (
      <section>
        <Typography variant="h3">{props.header}</Typography>
        <Typography variant="h6" className={classes.sectionBody}>
          {props.children}
        </Typography>
        {!divider ? (
          <div style={{ marginBottom: "102px" }}></div>
        ) : (
          <hr className={classes.hrAccent} />
        )}
      </section>
    );
  };

const useStyles = makeStyles((theme) => ({
    hrAccent: {
        border: "none",
        height: "2px",
        width: "100%",
        marginBottom: "40px",
        background: "#153040",
      },
    sectionBody: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(3),
    },
}))

export default Section;