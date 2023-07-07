import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
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

ReactDOM.render(
	<div style={{ display: "flex", flexFlow: "column", height: "100%" }}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<HashRouter>
				<NavProvider>
					<div style={{ flex: "1 1 auto" }}>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/portfolio" component={Portfolio} />
							<Route path="/misc/:page" component={MiscSwitch} />
							<Route path="/contact" component={Contact} />
							<Redirect to="/" />
						</Switch>
					</div>
				</NavProvider>
			</HashRouter>
		</ThemeProvider>
	</div>,
	document.getElementById("root")
);
