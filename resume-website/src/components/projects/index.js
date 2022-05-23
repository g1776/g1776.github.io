import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography, Container } from "@material-ui/core";

import Project from "./project";

const Projects = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h2">Projects</Typography>
      </div>

      <Grid container>
        <Project
          title="OpenVessel"
          subtitle="Startup and 2nd place winner in the Nittany Ai Challenge 2020"
          image="OpenVessel Logo.png"
          imgWidth={"100%"}
        >
          <p>
            This project began as a team competing for a cash prize in the{" "}
            <a
              className="regularLink"
              href="https://nittanyai.psu.edu/alliance-programs/nittany-ai-challenge/"
              target="_blank"
            >
              Nittany AI Competition
            </a>
            . For the competition, we needed to develop a functioning product
            that used <i>"AI for good"</i>. The product we created is a tool
            that helps radiologists in identifying tumors in CT scans of the
            lung. We used a KMeans algorithm to segment out the air and other
            noise in CT scans in order for the radiologists to more easily see
            where a tumor is. The model was then deployed on a Flask application
            built from scratch that handles file management, users, and requests
            to the server hosting our ML model. Since then, we have developed
            into a startup, where my official title is CTO. We are currently
            working on further understanding the research done regarding the
            application of Convolutional Neural Networks (CNNs) on CT scans, and
            eventually implementing a solution of our own.
          </p>
          <p>
            While working on this project, I worked in a team environment of
            technical and non-technical members using a Slack channel and Zoom
            to communicate in the age of COVID. I learned to manage a large code
            base via Git and GitHub, and learned many technical skills,
            including:
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
          title="The Mental Health Project"
          subtitle="Frontend Developer - UI/UX"
          image="TMHP.jfif"
          imgWidth="50%"
          noAccent
        >
          <p>
            This project is a team for the 2021 Nittany AI Challenge. We are
            building a Clinical Decision Support (CDS) tool to aid mental health
            profesionals in the intake process. Using machine learning processes
            hosted on Azure, we are processing hand-written forms and displaying
            the summarized results in custom-built dashboard. My main role
            throughout this project has been developing the frontend, using
            React.js with Material UI. It has been an exciting project so far,
            and we are currently working towards the final MVP of the
            competition, with the final pitch in September.
          </p>
          <p>
            Throughout this project I have learned a lot. My UI skills have
            greatly improved as I try to understand the vision of my teammates
            and bring the product to life. We have adhered to a strict theming
            and styling philosophy, which needs to reflected in my work. I have
            been consulted by several UI experts, and have taken their feedback
            and adjusted the product accordingly.
          </p>
          <p>
            In addition to UI skills, I have also learned how to implement an
            API to fetch and updated data from the backend. This was a new
            structure to a project that I had not done before, and I needed to
            be open to learning a new way of building a prototype. Finally, I
            got exposure to the world of mental health, and the unique issues
            and poain points experienced by professionals in the field that can
            be addressed with technology solutions. Some skills I learned
            throughout this experience have been:
          </p>
          <ul>
            <li>Iterative design of UI interfaces</li>
            <li>Working with an in-house API</li>
            <li>Adapting to feedback from UI professionals</li>
            <li>Working with the Material UI CSS framework</li>
          </ul>
        </Project>

        <Project
          title="EY-mentored project"
          subtitle="Dashboard application for Tax, Audit, and Consulting"
          image="EY and NDL.png"
          imgWidth={"60%"}
        >
          <p>
            In this project, I worked in a team of 3 to develop a dashboard
            aimed at helping consultants with their day-to-day operations. The
            concept behind the project was that a consultant could come to the
            dashboard before a meeting with a client, and get a quick overview
            of what is happening in the world related to that client. In order
            to achieve this, we implemented web scraping procedures to grab
            legal information relavent to EY tax and audit employees, as well as
            requested data from stock and twitter APIs.
          </p>
          <p>
            Using this information, we were able to create an interactive
            dashboard that included Bokeh graphs, sentiment analysis graphs
            based on twitter data, and summaries of the legal articles generated
            using AI summarization tools. All of this was hosted on a webapp
            built with the Flask web framework. During development, we were
            mentored by an EY employee that gave us tips on what would be useful
            to a consultant and some insight into their everyday workflow. This
            gave me the opprtunity to learn how to communicate technical ideas
            to an otherwise non-technical partner. Throughout this project I
            learned many skills, including:
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
          imgWidth={"80%"}
        >
          <p>
            This project was a passion project of mine. I always enjoyed playing
            the game Othello, and wanted to recreate it from scratch using
            python. I used tkinter to recreate the interface of an Othello
            board, and built my own AI algorithm from scratch to play against
            me. Once I had the model built, I was able to train it against
            itself, me, or other models in order to judge (and graph!) its
            performance. The process of creating the game is documented in a
            Medium post of mine, which you can read{" "}
            <a
              className="regularLink"
              href="https://medium.com/@gregoryg323/building-the-classic-othello-board-game-for-ai-8a42ba2d7f13"
              target="_blank"
            >
              here
            </a>
            .
          </p>
          <p>
            While researching the best way to build this tool, I read several
            scholarly articles on game theory and the implementation of it as
            concerned to the game of Othello. It was very interesting to expose
            myself to this niche field of computer science, and to see all the
            amazing projects that have been done in the field already!
          </p>
          <p>
            You can check out my GitHub repo for this project at{" "}
            <a
              className="regularLink"
              href="https://github.com/g1776/OthelloAI"
              target="_blank"
            >
              https://github.com/g1776/OthelloAI
            </a>
          </p>
        </Project>

        <Project
          title="Analyzing Musician Wages with R"
          subtitle="Personal project"
          image="new-music-organizing-caucus.png"
          imgWidth={"60%"}
        >
          <p>
            Growing up I was surrounded by music. My father played piano nearly
            every day, and my sister the clarinet. In 4th grade, I picked up the
            clarinet and joined the school band. Since then, I have been in
            countless bands, orchestras, and jazz bands, playing clarinet,
            saxophone, and flute. When I started this project, I was excited to
            find a dataset created by the New Music Organizing Caucus, which
            gathers information about gigs of musicians. I then compare this
            dataset to information gathered from the Bureau of Labor Statistics
            on musicians and singers. This allows me to validate the data
            gathered from the Caucus, and analyze the distribution of musicians
            across the country, as well as the nature of the gigs they are
            getting.
          </p>
          <p>
            This project has been the biggest project in R I have done to date.
            I learned many useful skills, including ggplot graphing tools, and
            dataframe manipulating with tidyverse tools. This was my final
            project submission for STAT 184: Introduction to R at Penn State. An
            precursor to this final report was EDA of the data sources which can
            be found{" "}
            <a
              className="regularLink"
              href={process.env.PUBLIC_URL + "STAT 184 Final Project EDA.html"}
              target="_blank"
            >
              here
            </a>
            .
          </p>
          <p>
            The final report can be found{" "}
            <a
              className="regularLink"
              href={
                process.env.PUBLIC_URL +
                "STAT 184 Final Project Report - Musician Wages Analysis.html"
              }
              target="_blank"
            >
              here
            </a>
            .
          </p>
        </Project>
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
  },
  header: {
    textAlign: "center",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  }
}));

export default Projects;
