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
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
        fontWeight: "bolder",
        paddingTop: "3px",
        paddingBottom: "3px",
    }
}))


export default Logo;