import { Link } from 'react-router-dom'
import {
    Grid, 
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

function Nav() {
    const classes = useStyles();

    return (
    <nav className={classes.nav}>
        <Grid container style={{justifyContent: "center", alignItems: "center", padding: 20}} spacing={10}>
            <Grid item> 
                <Link to="/">
                    <Typography component="h3" variant="h5">About</Typography>
                </Link>
            </Grid>
            <Grid item>
                <Link to="/resume">
                    <Typography component="h3" variant="h5">Resume</Typography>
                </Link>
            </Grid>
            <Grid item>
                <Link to="/projects">
                    <Typography component="h3" variant="h5">Projects</Typography>
                </Link>
            </Grid>
        </Grid>
        {/* <ul>
        
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul> */}
    </nav>
    );
}

const useStyles = makeStyles((theme) => ({
    nav: {
        backgroundColor: theme.palette.common.black,
    },
}));

export default Nav;
