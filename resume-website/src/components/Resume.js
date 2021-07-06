import {
    Paper,
    Container,
    Grid,
    Link,
    Typography,
    Divider
} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import theme from '../theme';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const Header = (props) => {
    return (
            <Typography variant="h3" style={{color: "white"}}>{props.children}</Typography>
    )
}


const Contact = () => {

    const ContactThumb = ({link, label, Icon, lg=3}) => (
        <Grid item container xs={12} lg={lg} style={{justifyContent: "center", alignItems: "center"}}>
            <Link href={link}><Icon fontSize="medium" style={{marginRight: theme.spacing(2), top: 5, position: "relative"}}/><Typography variant="body1" style={{color: "white", display: "inline"}}>{label}</Typography></Link>
        </Grid>
    )

    return (
        <Grid container style={{alignItems: "center"}}>
            <Grid item container xs={12} lg={2} style={{justifyContent: "center", alignItems: "center"}}>
                <Header>Contact</Header>
            </Grid>
            <ContactThumb link="https://github.com/g1776" label="github.com/g1776" Icon={GitHubIcon} />
            <ContactThumb link="mailto:gregoryg323@gmail.com" label="gregoryg323@gmail.com" Icon={EmailIcon} />
            <ContactThumb lg={4} link="https://www.linkedin.com/in/gregory-glatzer" label="linkedin.com/in/gregory-glatzer" Icon={LinkedInIcon} />
        </Grid>
    )
}

function Resume() {
    const classes = useStyles()


    const Section = (props) => {
        return (
            <section>
                <Header style={{marginLeft: 30}}>{props.header}</Header>
                <Typography variant="h5" className={classes.sectionBody}>{props.children}</Typography>
                <hr className={classes.hrAccent}/>
            </section>
        )
    }


    return (
        <Container className={classes.root} maxWidth="xl">
            <Typography variant="h2" className={classes.title}>Resume</Typography>
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
            Cumulative GPA: 3.95<br/>
            </Section>

        </Container>
        
    );
    
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        paddingLeft: theme.spacing(15),
        paddingRight: theme.spacing(15),
        backgroundColor: theme.palette.common.black
    },
    title: {
        color: "white", 
        paddingBottom: theme.spacing(5), 
        paddingTop: theme.spacing(5),
        textAlign: "center"
    },
    hrAccent: {
        border: 'none',
        height: '2px',
        width: '80%',
        marginBottom: '100px',
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
        paddingTop: theme.spacing(2), 
        paddingBottom: theme.spacing(3)
    }
}))


export default Resume;
