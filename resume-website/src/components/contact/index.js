import { 
    makeStyles,
    Container,
    Grid
 } from "@material-ui/core";

import Header from "../Header";
import Socials from "./Socials";

const Contact = () => {
    const classes = useStyles();

    return <Container className={classes.root}>
        <Header>Contact</Header>
        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <Socials />
            </Grid>
            <Grid item xs={12} md={6} className={classes.imgContainer}>
            <img src={process.env.PUBLIC_URL + '/me2.jpg'} className={classes.img} alt="Gregory Glatzer" />
            </Grid>
        </Grid>
    </Container>
}


const useStyles = makeStyles((theme) => ({
    root: {
      width: "80%",
      marginBottom: theme.spacing(5)
    },
    imgContainer: {
        justifyContent: "center"
    },
    img: {
        width: "100%",
        height: "auto"
    }
}));

export default Contact;