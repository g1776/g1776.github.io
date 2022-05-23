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
            <Grid item xs={"auto"}> 
                <Link to={props.to} className="nav-text nav-link">
                    <Typography component="h3" variant="h5">{props.children}</Typography>
                </Link>
            </Grid>
        )
    }

    return (
    <nav>
        <Grid container className={classes.navContainer}>
            <Grid item xs={12} md={5} >
                <Link to={"/"} className="nav-text">
                    <Typography component="h1" variant="h5" className="nav-text logo-text">Gregory Glatzer</Typography>
                </Link>
                
            </Grid>
            <Grid item container xs={12} md={7} spacing={5} className={classes.navLinksContainer}>
                <Section to="/">About</Section>
                <Section to="/projects">Projects</Section>
                <Section to="/resume">Resume/CV</Section>
                
            </Grid>
        </Grid>
    </nav>
    );
}

const useStyles = makeStyles((theme) => ({
    navContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20
    },
    navLinksContainer: {
        justifyContent: 'end'
    }
}));

export default Nav;
