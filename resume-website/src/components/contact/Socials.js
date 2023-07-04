import { Grid, Link, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PublicIcon from "@material-ui/icons/Public";

import theme from "../../theme";

const SocialThumb = ({ link, label, Icon }) => (
	<Grid item xs={12} style={{ alignItems: "center" }}>
		<Link href={link}>
			<Icon
				fontSize="large"
				style={{
					marginRight: theme.spacing(1),
					top: 10,
					position: "relative",
				}}
			/>
			<Typography variant="h5" style={{ display: "inline" }}>
				{label}
			</Typography>
		</Link>
	</Grid>
);

const Socials = () => {
	return (
		<Grid container spacing={2}>
			<SocialThumb
				link="https://github.com/g1776"
				label="github.com/g1776"
				Icon={GitHubIcon}
			/>
			<SocialThumb
				link="mailto:gregoryg323@gmail.com"
				label="gregoryg323@gmail.com"
				Icon={EmailIcon}
			/>
			<SocialThumb
				link="https://www.linkedin.com/in/gregory-glatzer"
				label="linkedin.com/in/gregory-glatzer"
				Icon={LinkedInIcon}
			/>
			<SocialThumb
				link="https://medium.com/@gregoryg323"
				label="medium.com/@gregoryg323"
				Icon={PublicIcon}
			/>
		</Grid>
	);
};

export default Socials;
