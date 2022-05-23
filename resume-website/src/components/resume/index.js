import { Grid, Link, Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// import parts of the resume
import Blobs from "./Blob";
import Contact from "./Contact";
import Experience from "./Experience";
import Section from './Section';

import FancyHr from "../FancyHr";


function Resume() {
  const classes = useStyles();

  return (
    <React.Fragment>

      <Blobs/>

      <div className={classes.root} maxWidth="md">

        <div className={classes.header}>
            <Typography variant="h2"> Resume/CV </Typography>
            <Button 
              variant="contained" 
              className={classes.btn} 
              size="large"
              onClick={() =>  window.open(process.env.PUBLIC_URL + '/resume.pdf', "_blank")}
              >
                Download resume as a PDF
            </Button>

            <Contact />
            
        </div>

        {/* <FancyHr/> */}

        <Section header="Summary">
          Incoming senior pursuing a Bachelor of Science in Applied Data Science with a
          passion for data analysis, software development, and full stack
          development.
        </Section>

        <Section header="Education">
          <b>
            The Pennsylvania State University, College of Information Sciences
            and Technology
          </b>
          <br />
          B.S. Applied Data Science
          <br />
          August 2019 – May 2023
          <br />
          Cumulative GPA: 3.95
          <br />
          <br />
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
            group="Elephant Movement Research with Penn State College of Information Science and Technology Faculty"
            position="Researcher"
            dateStart="May 2021"
            dateEnd="Present"
            image="Range Cluster Hotspots.png"
            imgWidth="90%"
            bullets={[
              <span>
                First author on the research paper “An Analysis of Elephants’
                Movement Data in Sub-Saharan Africa Using Clustering” which I
                presented at the{" "}
                <Link href="https://tawiri.or.tz/conference-2/" target="blank_">
                  Tanzania Wildlife Research Institute (TAWIRI) 13th Scientific
                  Conference
                </Link>
              </span>,
              <span>
                {" "}
                <Link href="https://dataskeptic.com/blog/episodes/2022/tracking-elephant-clusters" target="blank_">
                    Interviewed 
                </Link>
                &nbsp;about my research on the popular Data Skeptic podcast.
                </span>,
              <span>
              Continued research beyond Penn State to work on more elephant movement research with
              researchers from {" "}
              <Link href="https://nm-aist.ac.tz/" target="blank_">
                The Nelson Mandela Institute of Science and Technology
              </Link>
              &nbsp; and the {" "}
              <Link href="https://www.elephanttrust.org/" target="blank_">
                Amboseli Trust for Elephants.
              </Link>
               </span>,
              "Applied clustering algorithms to elephant data to predict locations of interest for elephants.",
              "Conducted a literature review of anti-poaching technologies.",
              "Demonstrated initiative and the ability to create self-driven work.",
            ]}
          ></Experience>

        
          <Experience
            group="OpenVessel"
            position="Team member"
            dateStart="May 2020"
            dateEnd="May 2021"
            image="OpenVessel Logo.png"
            imgWidth={"100%"}
            bullets={[
              "Led a technical team of 14 for over 200 hours through full stack development of a Flask webapp.",
              "Worked with Penn State Hershey Medical Center Clinical Radiology Research Group (CRRG) radiologists to develop a liver-lesion detection and classification system using Convolutional Neural Networks with Tensorflow.",
              "Won 2nd place in the Nittany AI Challenge. The 2020 Nittany AI Challenge included 196 students on 59 teams competing for a total of $50,000 in funding.",
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
              <span>
                Check it out here:{" "}
                <Link href="https://www.intonationmap.com">
                  https://www.intonationmap.com
                </Link>
              </span>,
            ]}
          />
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
              "Project acquired through Nittany Data Labs (NDL).",
            ]}
          />
        </Section>

        <Section header="Leadership Experience">
          <Experience
            group="IST Diplomats"
            bullets={[
              "Selected by Penn State College of IST faculty through a competitive application process.",
              "Works closely with faculty, prospective students & parents, and current undergraduates.",
              "Trained in conversation skills, self-awareness, professional development",
            ]}
          />
        </Section>

        <Section header="Skills" hideAccent>
          <Typography variant="h6">
            <Grid container spacing={6}>
              <Grid item xs={12} md={4}>
                <b>Data Science/ Machine Learning</b>
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
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  header: {
    textAlign: "center",
    marginTop: theme.spacing(5),
  },
  btn: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    marginTop: theme.spacing(3),
  },
  skills: {
    margin: 0,
    padding: 0,
    height: "100%",
    overflowX: "hidden",
  },
}));

export default Resume;
