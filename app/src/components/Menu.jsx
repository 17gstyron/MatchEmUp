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
    width: 160,
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
  container: {
    width: '50rem',
    height: '20rem',
    marginTop: 100,
    boxShadow: '0 0 1rem 0 rgba(0, 0, 0, .2)',   
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'rgba(255, 255, 255, .15)',
    
    backdropFilter: 'blur(5px)',
  },
}));

const Menu = () => {
  const classes = useStyles();

  return (
    <div className="Menu">
      <h4 className="title">Match Em Up!</h4>
      <div className={classes.container}></div>

      <Box className={classes.credits}>
        <Grid container justify="space-around">
          <img src={logo} className={classes.large}></img>
          <h7 className={classes.ackn}>creation</h7>
        </Grid>
      </Box>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default Menu;
