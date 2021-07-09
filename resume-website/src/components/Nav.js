import React from 'react'
import { Link } from 'react-router-dom'
import {
    Grid, 
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

function Nav() {
    const classes = useStyles();

    const Section = (props) => {
        return (
            <Grid item xs={"auto"} className={classes.linkContainer}> 
                <Link to={props.to} className="nav-link">
                    <Typography component="h3" variant="h5">{props.children}</Typography>
                </Link>
            </Grid>
        )
    }

    return (
    <nav>
        <Grid container style={{justifyContent: "center", alignItems: "center", padding: 20}} spacing={5}>
            <Section to="/">About</Section>
            <Section to="/resume">Resume</Section>
            <Section to="/projects">Projects</Section>
        </Grid>
        {/* <ul>
        
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul> */}
    </nav>
    );
}

const useStyles = makeStyles((theme) => ({
    linkContainer: {
        textAlign: "center",
    }
}));

export default Nav;
