import { Grid, Typography, Chip } from "@material-ui/core";
import React from "react";
import { makeStyles} from "@material-ui/core/styles";

import Section from './Section';

function Education() {
  const classes = useStyles();

  return (
    <Section header="Education" id="education">
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
          <ul className={classes.edList}>
            <li>CMPSC 131 - Programming and Computation I: Fundamentals</li>
            <li>CMPSC 132 - Programming and Computation II: Data Structures</li>

            <li>DS 200 - Introduction to Data Science</li>
            <li>DS 220 - Data Management for Data Sciences</li>
            <li>DS 300 - Privacy and Security</li>
            <li>DS 330 - Visual Analytics</li>
            <li>DS 340W - Applied Data Sciences</li>
            <li>DS 402 - Emerging Trends in the Data Sciences</li>

            <li>IST 110 - Introduction to Information, People And Technology</li>
            <li>IST 111S - Seminar in Information Sciences and Technology</li>
            <li>IST 210 - Organization of Data</li>
            <li>IST 220 - Networking and Telecommunications</li>
            <li>IST 230 - Language, Logic, and Discrete Mathematics</li>
            <li>IST 242 - Intermediate &amp; Object-Oriented Application Development</li>
            <li>IST 311 - Object-Oriented Design and Software Applications</li>
            <li>IST 331 - Foundations of Human-Centered Design</li>
            <li>IST 442 - Information Technology in an International Context</li>

            <li>MATH 220 - Matrices</li>

            <li>STAT 184 - Introduction to R</li>
            <li>STAT 200 - Elementary Statistics</li>
            <li>STAT 318 - Elementary Probability</li>
            <li>STAT 380 - Data Science Through Statistical Reasoning and Computation</li>
          </ul>
    </Section>
  );
}

const useStyles = makeStyles((theme) => ({
    edList: {
        margin: 0,
        padding: 0,
        height: "100%",
        overflowX: "hidden",
    }
}));

export default Education;
