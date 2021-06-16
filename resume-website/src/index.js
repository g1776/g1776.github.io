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
import About from './components/About';


ReactDOM.render(
  <div style={{backgroundColor: "rgb(35,31,32)"}}>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <HashRouter>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  </ThemeProvider>
  </div>,
  document.getElementById('root')
);
