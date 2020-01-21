import React, { Fragment } from "react";

// UI Component
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton   
} from '@material-ui/core';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

const TopBar = () => { 
  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <PeopleAltIcon />
          </IconButton>
          <Typography variant="h6">
            Users
          </Typography>        
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default TopBar;
