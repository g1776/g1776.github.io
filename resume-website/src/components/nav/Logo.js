import {
    Typography,
    makeStyles
} from '@material-ui/core';

const Logo = () => {
    const classes = useStyles();
    return (
        <>
        <Typography
              component="h1"
              variant="h5"
              
            >
                <span className={classes.logo}>
                &nbsp;Gregory Glatzer&nbsp;
                </span>
              
        </Typography>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    logo: {
        color: "white",
        backgroundColor: "#F28C28",
        fontWeight: "bolder",
        paddingTop: "3px",
        paddingBottom: "3px",
    }
}))


export default Logo;