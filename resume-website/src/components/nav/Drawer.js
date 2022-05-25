import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Grid,
  useTheme
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

import Logo from "./Logo";

const DrawerLink = (props) => {
  return (
    <ListItem onClick={props.onClick} className="no-dash">
      <ListItemText>
        <Link to={props.to} className="nav-text nav-link">
          <Typography component="h3" variant="h5">
            {props.children}
          </Typography>
        </Link>
      </ListItemText>
    </ListItem>
  );
};

const DrawerComponent = () => {
  const [isOpen, setOpen] = useState(false);

  const open = () => setOpen(true);
  const close = () => setOpen(false);

  const theme = useTheme();

  return (
    <>
      <Drawer open={isOpen} onClose={close} anchor="top">
        <List>
          <ListItem onClick={close} className="no-dash">
            <ListItemText>
              <Logo />
            </ListItemText>
          </ListItem>
          <DrawerLink to="/" onClick={close}>
            Home
          </DrawerLink>
          <DrawerLink to="/portfolio" onClick={close}>
            Portfolio
          </DrawerLink>
          <DrawerLink to="/contact" onClick={close}>
            Contact
          </DrawerLink>
        </List>
      </Drawer>
      <Grid container style={{justifyContent: "space-between", alignItems: "center", paddingRight: theme.spacing(2)}}>
        <Grid item>
          <IconButton onClick={() => (isOpen ? close() : open())}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <Link to={"/"} className="nav-text">
            <Logo />
          </Link>
        </Grid>
      </Grid>
      
    </>
  );
};

export default DrawerComponent;