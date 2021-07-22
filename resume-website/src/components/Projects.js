import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
    Grid,
    Typography,
    Container
} from '@material-ui/core';



const Projects = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    const Header = (props) => {
        return (
                <Typography variant="h2" style={{color: "white"}}>{props.children}</Typography>
        )
    }

    const Project = (props) => {
        const { title, subtitle, image, imgWidth = undefined, imgHeight = undefined, noAccent = false } = props;

        const theme = useTheme();

        return (
            <React.Fragment>
            <Grid item container className={classes.project}>
                <Grid item container xs={12} md={image === undefined ? 12 : 8}>
                    <Grid item xs={12}><Header>{title}</Header></Grid>
                    <Grid item xs={12}><Typography variant="h5" style={{color: "whitesmoke", paddingBottom: theme.spacing(4)}}>{subtitle}</Typography></Grid>
                </Grid>
                {
                image !== undefined && 
                    <Grid container item xs={12} md={4} style={{alignItems: "center", justifyContent: "flex-end"}}>
                        <img src={process.env.PUBLIC_URL + image} width={imgWidth} height={imgHeight}></img>
                    </Grid>
                }
                <Grid item xs={12} md={image === undefined ? 12 : 8}>
                    <Typography variant="h6" style={{color: "white"}}>{props.children}</Typography>
                </Grid>
            </Grid>
            {!noAccent && <hr className={classes.hrAccent} style={{marginBottom: theme.spacing(4)}}/>}
            
            </React.Fragment>
        )
    }

    return (
    <Container className={classes.root}>
        <Header>Projects</Header>
        <hr className={classes.hrFancy}/>
        <hr className={classes.hrAccent}/>
        <Grid container className={classes.content}>

            <Project 
            title="OpenVessel"
            subtitle="Startup and 2nd place winner in the Nittany Ai Challenge 2020"
            image="OpenVessel Logo.png"
            imgWidth={'100%'}
            >
                <p>
                    This project began as a team competing for a cash prize in the <a className="regularLink" href="https://nittanyai.psu.edu/alliance-programs/nittany-ai-challenge/" target="_blank">Nittany AI Competition</a>. 
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
                <ul>
                    <li>Python</li>
                    <li>HTML/CSS</li>
                    <li>Flask</li>
                    <li>SQLite</li>
                    <li>Team Leading</li>
                    <li>Goal Setting</li>
                    <li>Technical Writing</li>
                </ul>
            </Project>
                
            <Project
            title="EY-mentored project"
            subtitle="Dashboard application for Tax, Audit, and Consulting"
            image="EY and NDL.png"
            imgWidth={'100%'}
            >
                <p>
                    In this project, I worked in a team of 3 to develop a dashboard aimed at helping consultants with their day-to-day operations. The concept behind the project was that a consultant could come to the dashboard before a meeting
                    with a client, and get a quick overview of what is happening in the world related to that client. In order to achieve this, we implemented web scraping procedures to grab legal information 
                    relavent to EY tax and audit employees, as well as requested data from stock and twitter APIs.
                </p>
                <p>
                    Using this information, we were able to create an interactive dashboard
                    that included Bokeh graphs, sentiment analysis graphs based on twitter data, and summaries of the legal articles generated using AI summarization tools. All of this was hosted on a webapp built with the Flask web framework. During development,
                    we were mentored by an EY employee that gave us tips on what would be useful to a consultant and some insight into their everyday workflow. This gave me the opprtunity to learn how to communicate technical ideas to an otherwise non-technical partner.
                    Throughout this project I learned many skills, including:
                </p>
                <ul>
                    <li>Building applications with the Flask web framework</li>
                    <li>Making API requests</li>
                    <li>Constructing a SQLite Database</li>
                    <li>TKinter</li>
                    <li>Interactive Bokeh Graphs</li>
                    <li>Web Scraping using BeautifulSoup4</li>
                </ul>
            </Project>

            <Project
            title="Using AI to play Othello"
            subtitle="Personal project"
            image="othello.jpg"
            imgWidth={'80%'}
            >
            <p>
                This project was a passion project of mine. I always enjoyed playing the game Othello, and wanted to recreate it from scratch using python. I used tkinter to recreate the interface of an Othello board,
                and built my own AI algorithm from scratch to play against me. Once I had the model built, I was able to train it against itself, me, or other models in order to judge (and graph!) its performance. The process of
                creating the game is documented in a Medium post of mine, which you can read <a className="regularLink" href="https://medium.com/@gregoryg323/building-the-classic-othello-board-game-for-ai-8a42ba2d7f13" target="_blank">here</a>.
            </p>
            <p>
                While researching the best way to build this tool, I read several scholarly articles on game theory and the implementation of it as concerned to the game of Othello.
                It was very interesting to expose myself to this niche field of computer science, and to see all the amazing projects that have been done in the field already!
            </p>
            <p>You can check out my GitHub repo for this project at <a className="regularLink" href="https://github.com/g1776/OthelloAI" target="_blank">https://github.com/g1776/OthelloAI</a></p>
            </Project>

        </Grid>
    </Container>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(13),
        textAlign: "center"
    },
    content: {
        textAlign: "left",
        paddingTop: theme.spacing(12)
        
    },
    hrAccent: {
        border: 'none',
        height: '2px',
        width: '80%',
        background: '#153040'
    },
    hrFancy: {
        position: 'relative',
        top: '20px',
        border: 'none',
        height: '12px',
        background: '#153040',
        marginBottom: '30px',
        clipPath: "polygon(1% 0%, 100% 0, 99% 100%, 0% 100%)"
    },
    project: {
        marginBottom: theme.spacing(4)
    }
}));

export default Projects;
