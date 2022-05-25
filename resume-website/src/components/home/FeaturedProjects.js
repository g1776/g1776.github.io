import {
    makeStyles,
    Grid,
    Typography,
} from '@material-ui/core'

import PortfolioCard from './PortfolioCard'

const FeaturedProjects = () => {
    const classes = useStyles();
    return (
        <>
        <Typography component="h2" variant="h4">
          Featured Projects
        </Typography>
        <Grid container spacing={3} className={classes.featuredProjects}>
            <Grid item xs={12} md={6}>
            <PortfolioCard
            title="Elephant movement research with IST Faculty"
            description="Working with IST Faculty at Penn State, 
            I conducted research on the movement of elephants in sub-saharan Africa, including what environmental and spatial factors affects their movement. 
            Using DBSCAN and KMeans clustering algorithms, I developed a pipeline that yields potential &quot;locations of interest&quot; for elephants. 
            This research led to the publication of my research paper, &quot;An Analysis of Elephants' Movement Data in Sub-Saharan Africa Using Clustering&quot; in the TAWIRI Conference in Arusha, Tanzania."
            image={process.env.PUBLIC_URL + "/Range Cluster Hotspots.png"}
            link="/portfolio#elephant-movement-research"
            btnText="Read More..."
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <PortfolioCard
            title="The Mental Health Project"
            description="In this project, I worked on building a 
            Clinical Decision Support (CDS) tool to aid mental health
            profesionals in the intake process. Using machine learning processes
            hosted on Azure, we processed hand-written forms and displaying
            the summarized results in custom-built dashboard. My main role
            throughout this project has been developing the frontend, using
            React.js with Material UI."
            image={process.env.PUBLIC_URL + "/TMHP.jfif"}
            link="/portfolio#the-mental-health-project"
            btnText="Read More..."
            />
            </Grid>
            <Grid item xs={12} md={6}>
                
            </Grid>
            <Grid item xs={12} md={6}>
                
            </Grid>
        </Grid>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    featuredProjects: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    }
}))

export default FeaturedProjects;