import { makeStyles } from "@material-ui/core";


const FancyHr = () => {
    const classes = useStyles();

    return (
        <>
        <hr className={classes.hrFancy} />
        <hr className={classes.hrAccent} />
        </>
    )
}

const useStyles = makeStyles(theme => ({
    hrFancy: {
        position: "relative",
        top: "20px",
        border: "none",
        height: "12px",
        background: "#153040",
        marginBottom: "30px",
        clipPath: "polygon(1% 0%, 100% 0, 99% 100%, 0% 100%)",
      },
      hrAccent: {
        border: "none",
        height: "2px",
        width: "80%",
        marginBottom: "100px",
        background: "#153040",
      },
}))

export default FancyHr;