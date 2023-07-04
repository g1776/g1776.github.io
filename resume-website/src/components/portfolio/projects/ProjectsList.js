import Project from "./components/Project";
import ProjectLink from "./components/ProjectLink";
import { DS_MLChip, WebdevChip, OtherChip } from "../Skills";

const projectsList = [
	<Project
		title="Capstone Project: Classifying Misleading listings on Airbnb"
		subtitle="Classifying misleading listings on Airbnb using machine learning."
		image="airbnb.jpeg"
		imgWidth={"80%"}
		id="airbnb"
		chips={[
			<DS_MLChip label="Python" />,
			<DS_MLChip label="Scikit-learn" />,
			<DS_MLChip label="Pandas" />,
			<DS_MLChip label="Plotly & Matplotlib" />,
			<DS_MLChip label="Streamlit" />,
			<DS_MLChip label="Model evaluation" />,
			<DS_MLChip label="Natural Language Processing (NLP)" />,
		]}
		buttonLinks={[
			{
				text: "Read the paper",
				url:
					process.env.PUBLIC_URL +
					"/Detecting Misleading Listings through Airbnb Reviews.pdf",
			},
		]}
	></Project>,
	<Project
		title="Bee Hotel Computer Vision Research"
		subtitle="Detecting and identifying bees in a bee hotel using computer vision."
		image="Bee Hotel.png"
		imgWidth={"80%"}
		id="bee-hotel-research"
		chips={[
			<DS_MLChip label="Python" />,
			<DS_MLChip label="OpenCV" />,
			<DS_MLChip label="Streamlit" />,
			<DS_MLChip label="Model evaluation" />,
		]}
		buttonLinks={[
			{
				text: "Read the paper",
				url:
					process.env.PUBLIC_URL +
					"/Individual_Bee_Identification_of_Solitary_Bees_using_Computer_Vision.pdf",
			},
		]}
	>
		<p>
			This project came about from a class I took about "honeybees and humans" at Penn State,
			which interested me so much that I reached out to the professor to see how I could
			apply my technical skills to their entymology research! In this research, I worked with
			the{" "}
			<ProjectLink to="https://www.grozingerlab.com/about">
				Grozinger lab at Penn State
			</ProjectLink>{" "}
			to help researchers quickly and precisely identify solitary bees in video feeds of bee
			hotels (see the photo above for an example). I built a computer vision pipeline with
			Python and OpenCV that detects and identifies bees in a video feed, and a Streamlit app
			to visualize the results. I also wrote a paper about the project, which you can read by
			clicking the button below.
		</p>
		<p>This project involved learning several new techniques and technologies, including:</p>
		<ul>
			<li>Object tracking*</li>
			<li>Hough Transformations</li>
			<li>Contour Detection</li>
			<li>Image Thresholding</li>
			<li>Kalman Filter</li>
			<li>Text Extraction using Google's OCR too Pytesseract.</li>
			<li>Streamlit</li>
		</ul>
		<p>
			For me, one of the highlights of the project was the novel object tracking method I
			developed, which allows the tool to track a bee's movement over multiple frames, and
			determine when it stops flying and enters the hotel. Check out the paper for more
			details!
		</p>
	</Project>,
	<Project
		title="Software Engineer at KCF Technologies"
		subtitle="Building real-time data processing pipelines for industrial IoT (IIoT) applications"
		image="KCF_Logo.jpeg"
		imgWidth={"80%"}
		id="kcf-technologies"
		chips={[
			<DS_MLChip label="Python" />,
			<DS_MLChip label="Docker" />,
			<DS_MLChip label="AWS Cognito" />,
			<DS_MLChip label="AWS DynamoDB" />,
			<DS_MLChip label="MQTT" />,
			<DS_MLChip label="Modbus" />,
			<DS_MLChip label="Node-RED ETL Pipeline" />,
			<DS_MLChip label="PowerBI" />,
			<WebdevChip label="React.js" />,
			<WebdevChip label="Material-UI" />,
			<WebdevChip label="Node.js" />,
		]}
	>
		<p>
			At KCF Technologies I was on the Data Integration and Edge Enablement teams, creating
			applications to facilitate the real-time processing of data between IIoT systems which
			monitor the machine health of multi-million dollar industrial equipment. I worked on a
			variety of projects, including:
			<ul>
				<li>
					Enabled support for custom payloads for a major client by building an ETL
					pipeline in Node-RED to process API payloads. This included a caching mechanism
					to limit the API request rate.
				</li>
				<li>
					Supported edge compute data processing by implementing MQTT and Modbus clients
					in statically typed Python, and dockerizing the microservices to be run on the
					edge.
				</li>
				<li>
					Saved employees hundreds of hours of data entry by modernizing the interval
					savings tracker for the company. The resulting webapp included a React.js
					frontend, a Node.js backend, a DynamoDB database, and AWS Cognito
					authentication.
				</li>
			</ul>
			<p>
				This work was done over 6 months, and was my first experience working in a
				professional software engineering environment. Half of the work was done as an
				intern, and than later as a part-time employee while finishing up my senior year of
				college.
			</p>
		</p>
	</Project>,
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
			{
				text: "Listen to my Data Skeptic interview",
				url: "https://dataskeptic.com/blog/episodes/2022/tracking-elephant-clusters",
			},
			{
				text: "Read the paper",
				url: "https://www.researchgate.net/publication/355941394_An_Analysis_of_Elephants'_Movement_Data_in_Sub-Saharan_Africa_Using_Clustering/",
			},
		]}
	>
		<p>
			Working with IST Faculty at Penn State, I conducted research on the movement of
			elephants in sub-saharan Africa, including what environmental and spatial factors
			affect their movement. Using DBSCAN and KMeans clustering algorithms, I developed a
			pipeline that yields potential "locations of interest" for elephants. This research led
			to the publication of my research paper,
			<ProjectLink to="https://www.researchgate.net/publication/336907924_An_Analysis_of_Elephants_Movement_Data_in_Sub-Saharan_Africa_Using_Clustering">
				"An Analysis of Elephants' Movement Data in Sub-Saharan Africa Using Clustering"
			</ProjectLink>
			in the
			<ProjectLink to="https://tawiri.or.tz/conference-2/">
				Tanzania Wildlife Research Institute (TAWIRI) 13th Scientific Conference
			</ProjectLink>
			in Arusha, Tanzania. In November 2021, I presented my work at the conference virtually.
		</p>

		<p>
			Since then, I have gotten the opportunity to continue elephant movement research beyond
			Penn State with researchers out of
			<ProjectLink to="https://tawiri.or.tz/conference-2/">
				The Nelson Mandela Institute of Science and Technology (NM-IST)
			</ProjectLink>
			and the
			<ProjectLink to="https://www.elephanttrust.org/">
				Amboseli Trust for Elephants.
			</ProjectLink>
		</p>

		<p>
			While working through this project, I have learned how to manage my time and outline my
			research goals. Each week, I presented my work in a research group meeting which has
			exposed me to how AI/ML research is done, and how to ensure continued progress in
			self-driven work.
		</p>

		<p>
			As my paper gained exposure, I have been reached out by several people regarding my
			work. Notably, I was contacted by the popular data science podcast, Data Skeptic, who
			interviewed me for their series about clustering!
		</p>
	</Project>,
	<Project
		title="CV-BAGLE"
		subtitle="Computer Vision-Based Glyph and Label Extraction"
		image="CV-BAGLE.png"
		imgWidth={"70%"}
		id="cv-bagle"
		buttonLinks={[
			{
				text: "Read the paper",
				url:
					process.env.PUBLIC_URL +
					"/Computer_Vision_BAsed_Glyph_and_Label_Extraction__CV_BAGLE.pdf",
			},
		]}
		chips={[
			<DS_MLChip label="Computer Vision" />,
			<DS_MLChip label="OpenCV" />,
			<DS_MLChip label="Python" />,
			<DS_MLChip label="Synthetic Data Generation" />,
		]}
	>
		<p>
			From the nightly news to academic papers, you can find visualizations nearly
			everywhere. In the CV-BAGLE project, my team and I developed a tool that extracts
			glyphs and labels from data visualizations. An example of a glyph is a bar in a bar
			chart, or a line in a line chart. Labels can consist of supplementary text in the
			chart, axis labels, legends, etc. Using a combination of computer vision techniques,
			namely with OpenCV, along with OCR techniques (Tesseract), we were able to extract
			glyphs and labels from data visualizations. From these extracted glyphs and labels, we
			then engineered features to be fed into a classifier to classify the chart type. For
			our classification task, we achieved a training accuracy of 98.15% and testing accuracy
			of 81.60%.
		</p>
		<p>
			This project involved a state-of-the-art challenge, which was no small task for my
			team, even though this was a semester-long project. I learned a lot during the project,
			including best practices for image preprocessing when performing contour extraction and
			OCR tasks. I also learned the difficulty of working with large image datasets and the
			limitations of syntheticlly generated datasets. Finally, this project showed me what it
			was like to work on a team for an extended period of time on a research project where
			we needed to truly start from scratch. If you would like to read about our research,
			you can find the full paper below.
		</p>
	</Project>,
	<Project
		title="Intonation Map Creator"
		subtitle="Personal Project - Building data visualizations for musicians' intonation"
		image="IntonationMap Logo.png"
		imgWidth="70%"
		id="intonation-map-creator"
		chips={[
			<DS_MLChip label="Data Visualization" />,
			<DS_MLChip label="Database management" />,
			<WebdevChip label="React.js" />,
			<WebdevChip label="D3.js" />,
			<WebdevChip label="Full stack development" />,
			<WebdevChip label="User management" />,
			<OtherChip label="Iterative Design" />,
		]}
		buttonLinks={[{ text: "Visit the site", url: "https://intonationmap.com/" }]}
	>
		<p>
			Any musician knows the frustration that comes with playing in tune. For many
			less-experienced musicians, intonation can be a hard to grasp concept. One technique to
			help with intonation is to internalize the relative intonation tendencies on your
			instrument. However, this can be hard to memorize and to interalize trends throughout
			your instrument, let alone across multiple instruments.
		</p>
		<p>
			Intonation Map Creator aims to help musicians visualize their intonation tendencies
			through a specially-designed data visualization that combines traditional musical
			notation along with easy to understand data viz trends. With this, Intonation Map
			Creator brings modern technology and data visualization techniques into the musician's
			practice room.
		</p>
		<p>
			While working on this project, I consulted with many of my clarinetist friends in the
			Penn State School of Music, as well as Dr. Anthony Costa, who runs the Clarinet Studio
			at Penn State. Using an iterative design process, I worked with Dr. Costa on the design
			of the data visualization to best understand the needs of a musician working on
			intonation. Through this process, I learned about the incitricies of intonation
			practice, which, in addition to helping me design the application, also helped me as a
			clarinetist myself.
		</p>
		<p>
			The Intonation Map Creator application is deployed as a React app with the
			visualization created in D3.js, and the backend and hosting powered by Google Firebase.
			This project allowed to to learn a lot about advanced data visualization design, user
			data management, and full-stack web development.
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
			In this project, I worked on building a Clinical Decision Support (CDS) tool to aid
			mental health profesionals in the intake process. Using machine learning processes
			hosted on Azure, we processed hand-written forms and displaying the summarized results
			in custom-built dashboard. My main role throughout this project was developing the
			frontend, using React.js with Material UI.
		</p>
		<p>
			Throughout this project I have learned a lot. My UI skills have greatly improved as I
			work to understand the vision of my teammates and bring the product to life. We have
			adhered to a strict theming and styling philosophy, which needed to be reflected in my
			work. Throughout the project, I was consulted by several UI experts, and took their
			feedback and adjusted the product accordingly.
		</p>
		<p>
			In addition to UI skills, I also learned how to implement an API to fetch and updated
			data from the backend. This was a new layer of complexity to a project that I had not
			done before, and I needed to be open to learning new methods. Finally, I got exposure
			to the world of mental health, and the unique issues and pain points experienced by
			professionals in the field that can be addressed with technology solutions.
		</p>
		<p>This project was part of the 2021 Nittany AI Challenge.</p>
	</Project>,
	<Project
		title="OpenVessel"
		subtitle="Startup and 2nd place winner in the Nittany Ai Challenge 2020"
		image="OpenVessel Logo.png"
		imgWidth={"90%"}
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
			This project began as a team competing in the{" "}
			<a
				className="regularLink"
				href="https://nittanyai.psu.edu/alliance-programs/nittany-ai-challenge/"
				target="_blank"
			>
				Nittany AI Competition
			</a>
			. For the competition, we needed to develop a functioning product that used{" "}
			<i>"AI for good"</i>. The product we created is a tool that helps radiologists in
			identifying tumors in CT scans of the lung. We used a KMeans algorithm to segment out
			the air and other noise in CT scans in order for the radiologists to more easily see
			where a tumor is. The model was then deployed on a Flask application built from scratch
			that handles file management, users, and requests to the server hosting our ML model.
		</p>

		<p>
			After the competition, the group worked towards becoming a startup This included
			working on further understanding the research done regarding the application of
			Convolutional Neural Networks on CT scans, and eventually implementing a solution of
			our own.
		</p>
		<p>
			While working on this project, I worked in a team environment of technical and
			non-technical members using a Slack channel and Zoom to communicate in the age of
			COVID.
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
			<OtherChip label="Writing" />,
		]}
		buttonLinks={[
			{ text: "View the code on GitHub", url: "https://github.com/g1776/ChromeDinoNEAT" },
			{
				text: "Read about it on Medium",
				url: "https://medium.com/@gregoryg323/neural-networks-play-chromes-dino-game-with-neat-python-defe7c46a7f8",
			},
		]}
	>
		<p>
			The classic Chrome Dinosaur game. If you're not familiar with it, turn off your Wi-FI
			and open a new tab in Google Chrome for a surprise! In this project, I taught an AI how
			to play Chrome Dinosaur using the Python package "NEAT-Python". This package uses a
			genetic-inspired algorithm called NEAT (NeuroEvolution of Augmenting Topologies) to
			create a neural networks that evolves over generations to get better at playing the
			game.
		</p>

		<p>
			When deciding how to approach this project, a first question I had to ask was in what
			environment I wanted to work in to train the AI agent. After doing some research, I
			found a version of Chrome Dinosaur recreated with Pygame, which made integration with
			NEAT-Python much easier. After setting up my environment, I had to decide how the agent
			would be trained. This involved understand what inputs the agent has to understand the
			state of the game, as well as what controls (in this case, jump) it has. With this set
			up, training began.
		</p>

		<p>
			At the end of the project, I was able to train an AI that seemed to be unbeatable, as
			it learned to make pixel perfect jumps. You can try out the project for yourself by
			cloning the GitHub repo below. Also, feel free to read more about the project in my
			Medium post below.
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
			<DS_MLChip label="Presentation of Findings" />,
		]}
		buttonLinks={[
			{
				text: "View Report EDA",
				url: process.env.PUBLIC_URL + "STAT 184 Final Project EDA.html",
			},
			{
				text: "View Final Report",
				url:
					process.env.PUBLIC_URL +
					"STAT 184 Final Project Report - Musician Wages Analysis.html",
			},
		]}
		noDivider
	>
		<p>
			Growing up I was surrounded by music. My father played piano nearly every day, and my
			sister the clarinet. In 4th grade, I picked up the clarinet and joined the school band.
			Since then, I have been in countless bands, orchestras, and jazz bands, playing
			clarinet, saxophone, and flute. When I started this project, I was excited to find a
			dataset created by the New Music Organizing Caucus, which gathers information about
			gigs of musicians. I compared this dataset to information gathered from the Bureau of
			Labor Statistics on musicians and singers. This allows me to validate the data gathered
			from the Caucus, and analyze the distribution of musicians across the country, as well
			as the nature of the gigs they are getting.
		</p>
		<p>
			This project has been the biggest project in R I have done to date. I learned many
			useful skills, including ggplot graphing tools, and dataframe manipulating with
			tidyverse tools. This was my final project for STAT 184: Introduction to R at Penn
			State.
		</p>

		<p>
			After I finished this project, I was able to present my findings to the Caucus at one
			of their monthly meetings. This was an exciting experience, as my findings could have
			real-world impact on how the group worked, and more specifically, how they collected
			their data. I gave the group some feedback on their data quality, and how they could
			improve it by modifying their intake form. I also discussed with the group (which was
			comprised mostly of NYC musicians) my findings and what it means for the current state
			of musicians and the gigs they are getting.
		</p>
	</Project>,
];

export default projectsList;
