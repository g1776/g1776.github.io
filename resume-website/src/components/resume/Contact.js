import { Grid, Link, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import theme from "../../theme";

const ContactThumb = ({ link, label, Icon, lg = 4 }) => (
    <Grid
      item
      container
      xs={12}
      lg={lg}
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <Link href={link}>
        <Icon
          fontSize="large"
          style={{
            marginRight: theme.spacing(1),
            top: 10,
            position: "relative",
          }}
        />
        <Typography variant="body1" style={{ display: "inline" }}>
          {label}
        </Typography>
      </Link>
    </Grid>
  );

const Contact = () => {
    return (
      <Grid container style={{ 
        justifyContent: "center", 
        alignItems: "center",
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(7),
         }}>
        <ContactThumb
          link="https://github.com/g1776"
          label="github.com/g1776"
          Icon={GitHubIcon}
        />
        <ContactThumb
          link="mailto:gregoryg323@gmail.com"
          label="gregoryg323@gmail.com"
          Icon={EmailIcon}
        />
        <ContactThumb
          link="https://www.linkedin.com/in/gregory-glatzer"
          label="linkedin.com/in/gregory-glatzer"
          Icon={LinkedInIcon}
        />
      </Grid>
    );
  };

export default Contact;