import {
    Container,
    Grid,
    Link,
    Typography,
} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import theme from '../theme';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Blob from './Blob';


const Header = (props) => {
    return (
            <Typography variant="h3" style={{color: "white"}}>{props.children}</Typography>
    )
}


const Contact = () => {

    const ContactThumb = ({link, label, Icon, lg=4}) => (
        <Grid item container xs={12} lg={lg} style={{justifyContent: "center", alignItems: "center"}}>
            <Link href={link}><Icon fontSize="large" style={{marginRight: theme.spacing(1), top: 10, position: "relative"}}/><Typography variant="body1" style={{color: "white", display: "inline"}}>{label}</Typography></Link>
        </Grid>
    )

    return (
        <Grid container style={{justifyContent: "center", alignItems: "center"}}>
            <ContactThumb link="https://github.com/g1776" label="github.com/g1776" Icon={GitHubIcon} />
            <ContactThumb link="mailto:gregoryg323@gmail.com" label="gregoryg323@gmail.com" Icon={EmailIcon} />
            <ContactThumb link="https://www.linkedin.com/in/gregory-glatzer" label="linkedin.com/in/gregory-glatzer" Icon={LinkedInIcon} />
        </Grid>
    )
}

function Resume() {
    const classes = useStyles()


    const Section = (props) => {

        const {hideAccent = false} = props;

        return (
            <section>
                <Header>{props.header}</Header>
                <Typography variant="h6" className={classes.sectionBody}>{props.children}</Typography>
                {hideAccent ? <div style={{marginBottom: '102px'}}></div> : <hr className={classes.hrAccent}/>}
            </section>
        )
    }

    const Experience = (props) => {
        let { group, position, dateStart, dateEnd, bullets, image = undefined, imgHeight = undefined, imgWidth = undefined} = props;

        let datePair = undefined;

        if (position !== undefined){
            position = " - " + position
        }
        if (dateStart !== undefined & dateEnd !== undefined){
            datePair = dateStart + " - " + dateEnd
        }

        return (
        <Grid container style={{justifyContent: "space-between", paddingBottom: theme.spacing(7)}} spacing={4}>
            <Grid item xs={12} md={7}>
                <Typography variant="h5"><b>{group}</b>{position}</Typography>
            </Grid>
            <Grid item container xs={12} md={5} justify="flex-end">
                <Typography variant="h6">{datePair}</Typography>
            </Grid>
            <Grid item xs={12} md={image === undefined ? 12 : 8}>
                {bullets.map((b, i) => (
                    <Typography variant="h6" style={{paddingBottom: theme.spacing(2)}}>- {b}</Typography>
                ))}
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
        <React.Fragment>
        <div style={{zIndex: 1}}>
            {/* <canvas id="my-canvas" style={{position: "absolute", top: "50%", left: 0, width: "10%"}}></canvas>
            <Blob id="my-canvas"/> */}
            <canvas id="my-canvas2" style={{position: "absolute", top: "100%", left: "80%", width: "23%"}}></canvas>
            <Blob id="my-canvas2"/>
            <canvas id="my-canvas3" style={{position: "absolute", top: "170%", left: "5%", width: "10%"}}></canvas>
            <Blob id="my-canvas3"/>
            <canvas id="my-canvas4" style={{position: "absolute", top: "300%", left: "3%", width: "23%"}}></canvas>
            <Blob id="my-canvas4"/>
            <canvas id="my-canvas5" style={{position: "absolute", top: "500%", left: "60%", width: "10%"}}></canvas>
            <Blob id="my-canvas5"/>
        </div>
        <div className={classes.root} maxWidth="md">
            
            <Typography variant="h2" className={classes.title}>Resume</Typography>
            <Typography variant="h5" className={classes.resumePdf}>
                View my resume as a pdf <a href={process.env.PUBLIC_URL + '/resume.pdf'} target="blank_" className="regularLink">here</a>.
            </Typography>
            <Contact/>
            <hr className={classes.hrFancy}/>
            <hr className={classes.hrAccent}/>

            <Section header="Summary">
                Junior pursuing a Bachelor of Science in Applied Data Science with a passion for software development, 
                data analysis and full stack development.
            </Section>

            <Section header="Education">
            <b>The Pennsylvania State University, College of Information Sciences and Technology</b><br/>
            B.S. Applied Data Science<br/>
            August 2019 – May 2023<br/>
            Cumulative GPA: 3.95<br/><br/>
            <b>Relevant Coursework</b>
            <ul className={classes.skills}>
                <li>CMPSC 131 - Programming and Computation I: Fundamentals</li>
                <li>CMPSC 132 - Programming and Computation II: Data Structures</li>

                <li>DS 200 - Introduction to Data Science</li>
                <li>DS 220 - Data Management for Data Sciences</li>

                <li>IST 110 - Introduction to Information, People And Technology</li>
                <li>IST 111S - Seminar in Information Sciences and Technology</li>
                <li>IST 210 - Organization of Data</li>
                <li>IST 230 - Language, Logic, and Discrete Mathematics</li>

                <li>MATH 220 - Matrices</li>

                <li>STAT 200 - Elementary Statistics</li>
                <li>STAT 318 - Elementary Probability</li>
            </ul>
            </Section>

            <Section header="Experience">
                <Experience 
                group="OpenVessel"
                position="Team member and CTO"
                dateStart="May 2020"
                dateEnd="May 2021"
                image="OpenVessel Logo.png"
                imgWidth={"100%"}
                bullets={[
                    "Led a technical team of 14 for over 200 hours through full stack development of a Flask webapp.",
                    "Worked with Penn State Hershey Medical Center Clinical Radiology Research Group (CRRG) radiologists to develop a liver-lesion detection and classification system using Convolutional Neural Networks with Tensorflow.",
                    "Won 2nd place in the Nittany AI Challenge. The 2020 Nittany AI Challenge included 196 students on 59 teams competing for a total of $50,000 in funding."
                ]}
                />
                <Experience
                group="Intonation Map Creator"
                position="Personal Project"
                dateStart="November 2020"
                dateEnd="Present"
                image="IntonationMap Logo.png"
                imgWidth={"100%"}
                bullets={[
                    "Developed a full stack website that gathers and analyzes intonation data for woodwind players.",
                    "Visualized real-time data with interactive visualizations made with recharts.js",
                    "Deployed on Google’s Firebase platform and utilized their authorization and realtime database features.",
                    <span>Check it out here: <Link href="https://www.intonationmap.com">https://www.intonationmap.com</Link></span>
                ]}/>
                <Experience
                group="Elephant Movement Research with Penn State College of Information Science and Technology Faculty"
                position="Researcher"
                dateStart="May 2021"
                dateEnd="Present"
                image="Range Cluster Hotspots.png"
                imgWidth="80%"
                bullets={[
                    "First author on the research paper “An Analysis of Elephants’ Movement Data in Sub-Saharan Africa Using Clustering”",
                    "Applied DBSCAN clustering to elephant data and used centroids to predict locations of interest for elephants.",
                    "Conducted a literature review of anti-poaching technologies.",
                    "Demonstrated initiative and the ability to create self-driven work."
                ]}
                >
                </Experience>
                <Experience
                group="EY-mentored project"
                position="Team member"
                dateStart="November 2019"
                dateEnd="November 2020"
                image="EY and NDL.png"
                imgWidth={"60%"}
                bullets={[
                    "Worked in a team of 3 for over 170 hours on a customizable dashboard that helps consultants better understand the companies they are working with.",
                    "Developed web scraping scripts to gather stock, legal, and twitter information.",
                    "Visualized results with interactive graphs made with Bokeh.",
                    "Project acquired through Nittany Data Labs (NDL)."
                ]}/>
            </Section>
            
            <Section header="Leadership Experience">
                <Experience
                group="IST Diplomats"
                bullets={[
                    "Selected by Penn State College of IST faculty through a competitive application process.",
                    "Works closely with faculty, prospective students & parents, and current undergraduates.",
                    "Trained in conversation skills, self-awareness, professional development"
                ]}/>
            </Section>

            <Section header="Skills" hideAccent>
                <Typography variant="h6">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={4}>
                        <b>Data Science/ Machine Learning</b>
                        <hr className={classes.hrAccentSkills}/>
                        <ul className={classes.skills}>
                            <li>Python</li>
                            <li>Scikit-learn</li>
                            <li>SQL</li>
                            <li>Bokeh, Matplotlib</li>
                            <li>Pandas, NumPy</li>
                            <li>Geopandas, Shapely</li>
                            <li>Web Scraping</li>
                            <li>Data Preprocessing</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <b>Web development</b>
                        <hr className={classes.hrAccentSkills}/>
                        <ul className={classes.skills}>
                            <li>React, Flask</li>
                            <li>HTML/CSS, JavaScript</li>
                            <li>Bootstrap</li>
                            <li>Material-UI</li>
                            <li>Recharts.js</li>
                            <li>Google Firebase</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <b>Other</b>
                        <hr className={classes.hrAccentSkills}/>
                        <ul className={classes.skills}>
                            <li>All-national, all-eastern, all-state clarinetist</li>
                            <li>Saxophonist</li>
                            <li>Flautist</li>
                        </ul>
                    </Grid>
                </Grid>
                </Typography>
            </Section>

        </div>
        </React.Fragment>
        
    );
    
}


const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        width: "80%",
        backgroundColor: "transparent",
        position: "absolute",
        top: "70%",  
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    title: {
        color: "white", 
        paddingBottom: theme.spacing(5), 
        paddingTop: theme.spacing(5),
        textAlign: "center"
    },
    resumePdf: {
        color: "white", 
        paddingBottom: theme.spacing(5), 
        textAlign: "center"
    },
    hrAccent: {
        border: 'none',
        height: '2px',
        width: '80%',
        marginBottom: '100px',
        background: '#153040'
    },
    hrAccentSkills: {
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
    sectionBody: {
        color: "white", 
        paddingTop: theme.spacing(8), 
        paddingBottom: theme.spacing(3)
    },
    skills: {
        margin: 0,
        padding: 0,
        height: '100%',
        overflowX: 'hidden'
    }
}))


export default Resume;
