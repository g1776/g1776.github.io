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
            btnText="Read More"
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <PortfolioCard
            title="Computer Vision-Based Glyph and Label Extraction (CV-BAGLE)"
            description="From the nightly news to academic papers, you can find visualizations
            nearly everywhere. In the CV-BAGLE project, my team and I developed a tool that extracts glyphs and labels from
            data visualizations. An example of a glyph is a bar in a bar chart, or a line in a line chart. Labels can consist
            of supplementary text in the chart, axis labels, legends, etc. Using a combination of computer vision techniques,
            namely with OpenCV, along with OCR techniques (Tesseract), we were able to extract glyphs and labels from data visualizations.
            From these extracted glyphs and labels,"
            image={process.env.PUBLIC_URL + "/CV-BAGLE.png"}
            link="/portfolio#cv-bagle"
            btnText="Read More"
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