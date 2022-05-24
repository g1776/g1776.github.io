import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
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
          <DrawerLink to="/resume" onClick={close}>
            Resume/CV
          </DrawerLink>
          <DrawerLink to="/projects" onClick={close}>
            Projects
          </DrawerLink>
          <DrawerLink to="/contact" onClick={close}>
            Contact
          </DrawerLink>
        </List>
      </Drawer>
      <IconButton onClick={() => (isOpen ? close() : open())}>
        <MenuIcon fontSize="large" />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
