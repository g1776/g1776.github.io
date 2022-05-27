import Project from "./components/Project"
import ProjectLink from "./components/ProjectLink"
import { DS_MLChip, WebdevChip, OtherChip } from "../Skills"

const projectsList = [
    <Project
            title="Elephant Movement Research with IST Faculty"
            subtitle="Applying clustering to spatial data to find locations of interest for elephants"
            image="Range Cluster Hotspots.png"
            imgWidth={"80%"}
            id="elephant-movement-research"
            chips={[
              <DS_MLChip label="Python" />,
              <DS_MLChip label="Scikit-learn" />,
              <DS_MLChip label="Matplotlib" />,
              <DS_MLChip label="Pandas/Numpy" />,
              <DS_MLChip label="Geopandas" />,
              <DS_MLChip label="Shapely" />,
              <DS_MLChip label="Clustering Algorithms" />,
              <DS_MLChip label="Streamlit" />,
            ]}
          >
            <p>
              Working with IST Faculty at Penn State, I conducted research on the
              movement of elephants in sub-saharan Africa, including what
              environmental and spatial factors affects their movement. Using
              DBSCAN and KMeans clustering algorithms, I developed a pipeline that
              yields potential "locations of interest" for elephants. This
              research led to the publication of my research paper,
              <ProjectLink to="https://www.researchgate.net/publication/336907924_An_Analysis_of_Elephants_Movement_Data_in_Sub-Saharan_Africa_Using_Clustering">
                "An Analysis of Elephants' Movement Data in Sub-Saharan Africa
                Using Clustering"
              </ProjectLink>
              in the
              <ProjectLink to="https://tawiri.or.tz/conference-2/">
                Tanzania Wildlife Research Institute (TAWIRI) 13th Scientific
                Conference
              </ProjectLink>
              in Arusha, Tanzania. In November 2021, I presented my work at the
              conference virtually.
            </p>
  
            <p>
              Since then, I have gotten the opportunity to continue elephant
              movement research beyond Penn State with researchers out of
              <ProjectLink to="https://tawiri.or.tz/conference-2/">
                The Nelson Mandela Institute of Science and Technology (NM-IST)
              </ProjectLink>
              and the
              <ProjectLink to="https://www.elephanttrust.org/">
                Amboseli Trust for Elephants.
              </ProjectLink>
            </p>
  
            <p>
              While working through this project, I have learned how to manage my
              time and outline my research goals. Each week I presented my work in
              research group meetings, which has exposed me to how AI/ML research
              is done, and how people ensure continued progress in self-driven
              work.
            </p>
  
            <p>
              As my paper gained exposure, I have been reached out by several
              people regarding my work. Notably, I was contacted by the popular
              data science podcast, Data Skeptic, who interviewed me for their
              series about clustering! You can listen to their podcast episodes
              <ProjectLink to="https://dataskeptic.com/blog/episodes/2022/tracking-elephant-clusters">
                here.
              </ProjectLink>
            </p>
  
            <p>
              You can view the research paper
              <ProjectLink to="https://www.researchgate.net/publication/355941394_An_Analysis_of_Elephants'_Movement_Data_in_Sub-Saharan_Africa_Using_Clustering/">
                here.
              </ProjectLink>
            </p>
    </Project>,
    <Project
            title="The Mental Health Project"
            subtitle="Frontend Developer - UI/UX"
            image="TMHP.jfif"
            imgWidth="50%"
            id="the-mental-health-project"
            chips={[
              <WebdevChip label="React.js" />,
              <WebdevChip label="Material-UI" />,
              <WebdevChip label="Interative UI design" />,
              <WebdevChip label="API development" />,
              <WebdevChip label="Working with UI professionals" />,
            ]}
          >
            <p>
              In this project, I worked on building a Clinical Decision Support (CDS) tool to aid mental health
              profesionals in the intake process. Using machine learning processes
              hosted on Azure, we processed hand-written forms and displaying
              the summarized results in custom-built dashboard. My main role
              throughout this project has been developing the frontend, using
              React.js with Material UI.
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
              be addressed with technology solutions.
            </p>
            <p>
              This project was part of the 2021 Nittany AI Challenge.
            </p>
    </Project>,
    <Project
            title="OpenVessel"
            subtitle="Startup and 2nd place winner in the Nittany Ai Challenge 2020"
            image="OpenVessel Logo.png"
            imgWidth={"100%"}
            id="openvessel"
            chips={[
              <DS_MLChip label="Python" />,
              <DS_MLChip label="Computer Vision" />,
              <DS_MLChip label="SQLite" />,
              <DS_MLChip label="Git/Github" />,
              <WebdevChip label="Flask" />,
              <WebdevChip label="HTML/CSS" />,
              <OtherChip label="Technical Writing" />,
              <OtherChip label="Team Management" />,
              
            ]}
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
    </Project>,
    <Project
            title="Using AI to play Othello"
            subtitle="Personal project"
            image="othello.jpg"
            imgWidth={"80%"}
            id="othello"
            chips={[
              <DS_MLChip label="Python" />,
              <DS_MLChip label="Pygame" />,
              <DS_MLChip label="Game Theory" />,
              <OtherChip label="Writing" />
            ]}
          >
            <p>
              This project was a passion project of mine. I always enjoyed playing
              the game Othello, and wanted to recreate it from scratch using
              python. I used tkinter to recreate the interface of an Othello
              board, and built my own AI algorithm from scratch to play against
              me. Once I had the model built, I was able to train it against
              itself, me, or other models in order to judge (and graph!) its
              performance. The process of creating the game is documented in a
              Medium post of mine, which you can reached
              <ProjectLink to="https://medium.com/@gregoryg323/building-the-classic-othello-board-game-for-ai-8a42ba2d7f13">
              here
              </ProjectLink>
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
    </Project>,
    <Project
            title="Analyzing Musician Wages with R"
            subtitle="Personal project"
            image="new-music-organizing-caucus.png"
            imgWidth={"60%"}
            id="musician-wages"
            chips={[
              <DS_MLChip label="R" />,
              <DS_MLChip label="ggplot" />,
              <DS_MLChip label="Data analysis, cleaning, and visualization" />,
              <DS_MLChip label="Presentation of Findings" />
            ]}
            noDivider
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
              be found
              <ProjectLink to={process.env.PUBLIC_URL + "STAT 184 Final Project EDA.html"}>
                here
              </ProjectLink>
            </p>
            <p>
              The final report can be found{" "}
              <ProjectLink to={process.env.PUBLIC_URL + "STAT 184 Final Project Report - Musician Wages Analysis.html"}>
                here
              </ProjectLink>
              .
            </p>
    </Project>
  ]

export default projectsList;