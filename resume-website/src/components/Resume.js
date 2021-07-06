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


const Contact = () => {

    const ContactThumb = ({link, label, Icon, xs=3}) => (
        <Grid item container xs={xs} style={{justifyContent: "center", alignItems: "center"}}>
            <Link href={link}><Icon fontSize="medium" style={{marginRight: 10, top: 5, position: "relative"}}/><Typography variant="body1" style={{color: "white", display: "inline"}}>{label}</Typography></Link>
        </Grid>
    )

    return (
        <Grid container style={{alignItems: "center"}}>
            <Grid item xs={2} ><Typography variant="h4" style={{color: "white"}}>Contact</Typography></Grid>
            <ContactThumb link="https://github.com/g1776" label="github.com/g1776" Icon={GitHubIcon} />
            <ContactThumb link="mailto:gregoryg323@gmail.com" label="gregoryg323@gmail.com" Icon={EmailIcon} />
            <ContactThumb xs={4} link="https://www.linkedin.com/in/gregory-glatzer" label="linkedin.com/in/gregory-glatzer" Icon={LinkedInIcon} />
        </Grid>
    )
}


function Resume() {
    return (
        <Container>
            <Typography variant="h1" style={{color: "white"}}>Resume</Typography>
            <Contact/>
            <hr/>
        </Container>
        
    );
}

export default Resume;
