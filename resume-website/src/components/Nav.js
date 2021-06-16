import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

function Nav() {
    const classes = useStyles();

    return (
    <nav className={classes.nav}>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </nav>
    );
}

const useStyles = makeStyles((theme) => ({
    nav: {
        backgroundColor: theme.palette.common.black,
        height: "5vh"
    },
}));

export default Nav;
