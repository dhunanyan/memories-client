import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";

import memories from "../../assets/memories.png";

import useStyles from "./nav-bar.styles";

const Navbar = () => {
  const classes = useStyles();
  const currentUser = null;

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </div>

      <Toolbar className={classes.toolbar}>
        {currentUser ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={currentUser.result.name}
              src={currentUser.result.imageUrl}
            >
              {currentUser.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {currentUser.result.name}
            </Typography>
            <Button
              className={classes.logout}
              variant="contained"
              color="secondary"
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            className={classes.logout}
            color="primary"
            variant="contained"
          >
            Sign in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
