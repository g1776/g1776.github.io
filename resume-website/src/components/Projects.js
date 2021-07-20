import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
    Grid,
    Typography,
    Container
} from '@material-ui/core';



const Projects = (props) => {
    const classes = useStyles();

    const Header = (props) => {
        return (
                <Typography variant="h3" style={{color: "white"}}>{props.children}</Typography>
        )
    }

    const Project = (props) => {
        const { title, subtitle, image, imgWidth = undefined, imgHeight = undefined } = props;

        const theme = useTheme();

        return (
            <Grid item container>
                <Grid item xs={12}><Header>{title}</Header></Grid>
                <Grid item xs={12}><Typography variant="h5" style={{color: "whitesmoke", paddingBottom: theme.spacing(4)}}>{subtitle}</Typography></Grid>
                <Grid item xs={12} md={image === undefined ? 12 : 8}>
                    <Typography variant="h6" style={{color: "white"}}>{props.children}</Typography>
                </Grid>
                {
                image !== undefined && 
                    <Grid container item xs={12} md={4} style={{alignItems: "center", justifyContent: "flex-end"}}>
                        <img src={process.env.PUBLIC_URL + image} width={imgWidth} height={imgHeight}></img>
                    </Grid>
                }
            </Grid>
        )
    }

    return (
    <Container className={classes.root}>
        <Grid container>
            <Grid item container justify="center" className={classes.header}><Header>Projects</Header></Grid>
            <Project 
            title="OpenVessel"
            subtitle="Startup and 2nd place winner in the Nittany Ai Challenge 2020"
            image="OpenVessel Logo.png"
            imgWidth={400}
            >
                <p>
                    This project began as a team competing for a cash prize in the <a href="https://nittanyai.psu.edu/alliance-programs/nittany-ai-challenge/" target="_blank">Nittany AI Competition</a>. 
                    For the competition, we needed to develop a functioning product that used <i>"AI for good"</i>.
                    The product we created is a tool that helps radiologists in identifying tumors in CT scans of the lung. 
                    We used a KMeans algorithm to segment out the air and other noise in CT scans in order for the radiologists to
                    more easily see where a tumor is. The model was then deployed on a Flask application built from scratch that handles file management, 
                    users, and requests to the server hosting our ML model. Since then, we have developed into a startup,
                    where my official title is CTO. We are currently working on further understanding the research done regarding the application of 
                    Convolutional Neural Networks (CNNs) on CT scans, and eventually implementing a solution of our own.
                </p>
                <p>
                    While working on this project, I worked in a team environment of technical and non-technical members using a 
                    Slack channel and Zoom to communicate in the age of COVID. I learned to manage a large code base via Git and GitHub, 
                    and learned many technical skills, including:
                </p>
            </Project>
        </Grid>
        
    </Container>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(13),
    },
    header: {
        paddingBottom: theme.spacing(12)
    }
}));

export default Projects;
