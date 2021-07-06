import PDF from 'react-pdf-js-infinite';
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


const Contact = (props) => {
    const {github, email, linkedin} = props

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

const pdfView = () => {
    return (
        <div style={{backgroundColor: theme.palette.common.black, textAlign: "center", height: "100%"}}>
            <Paper style={{margin: "10%", padding: 10, textAlign: "center"}}>
                <PDF file={`http://localhost:3000/resume.pdf`} scale={1.5}/>
            </Paper>
        </div>
    )
}


function Resume() {
    return (
        <Container>
            <Typography variant="h1" style={{color: "white"}}>Resume</Typography>
            <Contact github="www.github.com/g1776" email="gregoryg323@gmail.com" linkedin="www.linkedin.com/in/gregory-glatzer"/>
            <hr/>
            <Divider style={{marginTop: 20, marginBottom: 20}}/>
        </Container>
        
    );
}

export default Resume;
