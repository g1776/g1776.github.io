import {
    makeStyles,
    Grid,
    Typography,
} from '@material-ui/core'

import PortfolioCard from './PortfolioCard'

const InTheNews = () => {
    const classes = useStyles();
    return (
        <>
        <Typography component="h2" variant="h4">
          Articles, News, and More
        </Typography>
        <Grid container spacing={3} className={classes.articles}>
            <Grid item xs={12} md={6}>
            <PortfolioCard
            title="Data Skeptic Podcast Interview"
            description="My interview with Data Skeptic, discussing my elephant movement research."
            image={process.env.PUBLIC_URL + "/Data Skeptic.jpg"}
            link="https://dataskeptic.com/blog/episodes/2022/tracking-elephant-clusters"
            externalLink
            btnText="Listen now"
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <PortfolioCard
            title="Penn State News article highlighting my work"
            description="Read the article written about my accomplishments with the university written by Penn State News."
            image={process.env.PUBLIC_URL + "/PennStateNews.jpeg"}
            link="https://www.psu.edu/news/information-sciences-and-technology/story/ist-students-research-involves-tracking-elephant-movement/"
            externalLink
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
    articles: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    }
}))

export default InTheNews;