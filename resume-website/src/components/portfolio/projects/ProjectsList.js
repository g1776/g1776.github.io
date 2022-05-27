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
            buttonLinks={[
              {text: "Listen to my Data Skeptic interview", url: "https://dataskeptic.com/blog/episodes/2022/tracking-elephant-clusters"},
              {text: "Read the paper", url: "https://www.researchgate.net/publication/355941394_An_Analysis_of_Elephants'_Movement_Data_in_Sub-Saharan_Africa_Using_Clustering/"}
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
              series about clustering!
            </p>
    </Project>,
    <Project
            title="CV-BAGLE"
            subtitle="Computer Vision-Based Glyph and Label Extraction"
            image="CV-BAGLE.png"
            imgWidth={"70%"}
            id="cv-bagle"
            buttonLinks={[
              {text: "Read the paper", url: process.env.PUBLIC_URL + "/Computer_Vision_BAsed_Glyph_and_Label_Extraction__CV_BAGLE.pdf"}
            ]}
            chips={[
              <DS_MLChip label="Computer Vision" />,
              <DS_MLChip label="OpenCV" />,
              <DS_MLChip label="Python" />,
              <DS_MLChip label="Synthetic Data Generation"/>

            ]}

    >
      <p>
      From the nightly news to academic papers, you can find visualizations
      nearly everywhere. In the CV-BAGLE project, my team and I developed a tool that extracts glyphs and labels from
      data visualizations. An example of a glyph is a bar in a bar chart, or a line in a line chart. Labels can consist
      of supplementary text in the chart, axis labels, legends, etc. Using a combination of computer vision techniques,
      namely with OpenCV, along with OCR techniques (Tesseract), we were able to extract glyphs and labels from data visualizations.
      From these extracted glyphs and labels, we then engineered features to be fed into a classifier to classify the chart type.
      For our classification task, we achieved a training accuracy of 98.15% and testing accuracy of 81.60%. 
      </p>
      <p>
          This project involved a state-of-the-art challenge, which was no small task for my team, even though this
          was a semester-long project. I learned a lot during the project, including best practices for image preprocessing when
          performing contour extraction and OCR tasks. I also learned the difficulty of working with large image datasets and the
          drawbacks of synthetic image generation. Finally, this project showed me what it was like to work on a team for an extended period of time 
          on a research project where we needed to truly start from scratch. If you would like to read about our research, you can find the full paper below.
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
            title="Teaching an AI to play Chrome Dinosaur 🦖"
            subtitle="Personal project"
            image="dino.gif"
            imgWidth={"80%"}
            id="chrome-dino"
            chips={[
              <DS_MLChip label="Python" />,
              <DS_MLChip label="Pygame" />,
              <DS_MLChip label="NEAT-Python" />,
              <DS_MLChip label="Neural Networks" />,
              <DS_MLChip label="Simulations" />,
              <OtherChip label="Writing" />
            ]}
            buttonLinks={[
              {text: "View the code on GitHub", url: "https://github.com/g1776/ChromeDinoNEAT"},
              {text: "Read about it on Medium", url: "https://medium.com/@gregoryg323/neural-networks-play-chromes-dino-game-with-neat-python-defe7c46a7f8"}
            ]}
          >
            <p>
              The classic Chrome Dinosaur game. If you're not familiar with it,
              turn off your Wi-FI and open a new tab in Google Chrome for a surprise!
              In this project, I taught an AI how to play Chrome Dinosaur using the
              Python package "NEAT-Python". This package uses uses a genetic-inspired algorithm
              called NEAT (NeuroEvolution of Augmenting Topologies) to create a neural Networks
              that evolves over generations to get better at playing the game.
            </p>

            <p>
              When deciding how to approach this project, a first question I had to ask was in what environment
              I wanted to work in to train the AI agent. After doing some research, I found a version of
              Chrome Dinosaur recreated with Pygame, which makes integration with NEAT-Python much easier.
              After setting up my environment, I had to decide how the agent would be trained. This involved
              understand what inputs the agent has access to to understand the state of the game, as well as
              what controls (in this case, jump) it has. With this set up, training began.
            </p>

            <p>
              At the end of the project, I was able to train an AI that seemed to be unbeatable, as it 
              learned to make pixel perfect jumps. You can try out the project for yourself by cloning the GitHub 
              repo below. Also, feel free to read more about the project in my Medium post below.
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
            buttonLinks={[
              {text: "View Report EDA", url: process.env.PUBLIC_URL + "STAT 184 Final Project EDA.html"},
              {text: "View Final Report", url: process.env.PUBLIC_URL + "STAT 184 Final Project Report - Musician Wages Analysis.html"}
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
              project for STAT 184: Introduction to R at Penn State.
            </p>
    </Project>
  ]

export default projectsList;