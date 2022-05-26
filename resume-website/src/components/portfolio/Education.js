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

            <li>IST 110 - Introduction to Information, People And Technology</li>
            <li>IST 111S - Seminar in Information Sciences and Technology</li>
            <li>IST 210 - Organization of Data</li>
            <li>IST 230 - Language, Logic, and Discrete Mathematics</li>

            <li>MATH 220 - Matrices</li>

            <li>STAT 200 - Elementary Statistics</li>
            <li>STAT 318 - Elementary Probability</li>
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
