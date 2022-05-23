import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import NavProvider from './components/NavProvider';

import './style.css'

import Home from './components/Home';
import Resume from './components/resume';
import MiscSwitch from './components/misc';
import Projects from './components/projects'
import Contact from './components/contact';


ReactDOM.render(
  <div style={{display: "flex", flexFlow: "column", height: "100%"}}>
  <ThemeProvider theme={theme}>
  
    <CssBaseline />
    <HashRouter>
    <NavProvider>
      <div style={{flex: "1 1 auto"}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cv" component={Resume} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/misc/:page" component={MiscSwitch} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </div>
      </NavProvider>
    </HashRouter>
  
  </ThemeProvider>
  </div>,
  document.getElementById('root')
);



