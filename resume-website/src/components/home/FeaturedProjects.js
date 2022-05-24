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
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
            <PortfolioCard
            title="Elephant movement research with IST Faculty"
            description="Working with IST Faculty at Penn State, 
            I conducted research on the movement of elephants in sub-saharan Africa, including what environmental and spatial factors affects their movement. 
            Using DBSCAN and KMeans clustering algorithms, I developed a pipeline that yields potential &quot;locations of interest&quot; for elephants. 
            This research led to the publication of my research paper, &quot;An Analysis of Elephants' Movement Data in Sub-Saharan Africa Using Clustering&quot; in the TAWIRI Conference in Arusha, Tanzania."
            image={process.env.PUBLIC_URL + "/Range Cluster Hotspots.png"}
            link="/projects#elephant-movement-research"
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <PortfolioCard
            title="The Mental Health Project"
            description="Working with IST Faculty at Penn State, 
            I conducted research on the movement of elephants in sub-saharan Africa, including what environmental and spatial factors affects their movement. 
            Using DBSCAN and KMeans clustering algorithms, I developed a pipeline that yields potential &quot;locations of interest&quot; for elephants. 
            This research led to the publication of my research paper, &quot;An Analysis of Elephants' Movement Data in Sub-Saharan Africa Using Clustering&quot; in the TAWIRI Conference in Arusha, Tanzania."
            image={process.env.PUBLIC_URL + "/TMHP.jfif"}
            link="/projects#the-mental-health-project"
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

}))

export default FeaturedProjects;