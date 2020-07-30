import React from 'react';

import { Box, Button, Chip, Grid, } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';

import logo from '../styles/images/logo.png'
import '../styles/Menu.css';

const useStyles = makeStyles((theme) => ({
  credits: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 178,
    height: 68,
    borderRadius: '30%',

    backgroundColor: 'black',
  },
  ackn: {
    color: '#5efc0b',
    margin: 'auto',
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    // margin: 'auto',
  },
}));

const Menu = () => {
  const classes = useStyles();

  return (
    <div className="Menu">
     
        <Box className={classes.credits}>
          <Grid container justify="space-around">
            <img src={logo} className={classes.large}></img>
            <h7 className={classes.ackn}>creations</h7>
          </Grid>
        </Box>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default Menu;
