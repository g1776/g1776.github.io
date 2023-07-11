import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import NavProvider from "./components/nav/NavProvider";

import "./style.css";

// import Home from './components/Home';
import Home from "./components/home/";
import Portfolio from "./components/portfolio";
import MiscSwitch from "./components/misc";
import Contact from "./components/contact";
import { ResumeDS, ResumeSWE } from "./components/resume";

ReactDOM.render(
	<div style={{ display: "flex", flexFlow: "column", height: "100%" }}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<NavProvider>
					<div style={{ flex: "1 1 auto" }} id="flex-container">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/portfolio" component={Portfolio} />
							<Route path="/misc/:page" component={MiscSwitch} />
							<Route path="/contact" component={Contact} />
							<Route path="/resume-ds" component={ResumeDS} />
							<Route path="/resume-swe" component={ResumeSWE} />

							{/* Make this page have two buttons on it to choose which resume you're looking for? */}
							<Route path="/resume" component={ResumeDS} />
							<Redirect to="/" />
						</Switch>
					</div>
				</NavProvider>
			</Router>
		</ThemeProvider>
	</div>,
	document.getElementById("root")
);
