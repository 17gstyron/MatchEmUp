import React, { useEffect, useState } from 'react';

import { Box, Button, ButtonGroup, Grid, } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

import logo from '../styles/images/logo.png'
import bgMusic from '../audio/Menu.mp3';
import '../styles/Menu.css';
import '../styles/PlayerSelect.scss';

const useStyles = makeStyles((theme) => ({
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
  icon: {
    color: '#433e55',
    fontSize: 50,
  },
  options: {
    marginTop: 20,
    color: '#433e55',
    fontSize: 50,
    '&:hover': {
      fontSize: 35,
    },
  },
  option: {
    textAlign: 'center',
    color: '#433e55',
    fontSize: 30,
    '&:hover': {
      fontSize: 35,
    },
  },
  credits: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 160,
    height: 68,
    borderRadius: '30%',
    backgroundColor: 'black',
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

const Menu = () => {
  const [audioOn, setAudioOn] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    const sound = document.getElementById('bgm');

    if (audioOn) {
      sound.play();
    } else {
      sound.pause();
    }
  }, [audioOn]);

  const toggleAudio = () => {
    setAudioOn(!audioOn)
  };

  return (
    <div className="Menu">
      <audio src={bgMusic} id="bgm"></audio>

      <h4 className="title">Match Em Up!</h4>
      <div className={classes.container}>
        {audioOn
          ? <VolumeUpIcon className={classes.icon} onClick={toggleAudio} />
          : <VolumeOffIcon className={classes.icon} onClick={toggleAudio} />
        }
        <div>
          <ButtonGroup
            className={classes.options}
            orientation="vertical"
            aria-label="vertical contained primary button group"
            variant="text"
            size="large"
          >
            <Button className={classes.option} size="large">
              <input id="toggle-on" class="toggle toggle-left" name="toggle" value="false" type="radio" checked />
                <label for="toggle-on" class="btn">1P</label>
                <input id="toggle-off" class="toggle toggle-right" name="toggle" value="true" type="radio" />
                <label for="toggle-off" class="btn">2P</label>
            </Button>
                <Button className={classes.option} size="large">CLASSIC</Button>
                <Button className={classes.option} size="large">CUSTOM</Button>
          </ButtonGroup>
        </div>
      </div>

          <Box className={classes.credits}>
            <Grid container justify="space-around">
              <img src={logo} className={classes.large}></img>
              <h7 className="ackn">creation</h7>
            </Grid>
          </Box>
        </div>
  );
}

export default Menu;
