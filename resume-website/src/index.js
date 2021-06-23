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

import './style.css'

import Nav from './components/Nav';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';


ReactDOM.render(
  <div style={{display: "flex", flexFlow: "column", height: "100%"}}>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <HashRouter>
      <Nav style={{flex: "0 1 auto"}}/>
      <div style={{flex: "1 1 auto"}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Redirect to="/" />
        </Switch>
      </div>
    </HashRouter>
  </ThemeProvider>
  </div>,
  document.getElementById('root')
);



