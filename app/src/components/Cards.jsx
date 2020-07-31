import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card, makeStyles, CardContent} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';


function Cards(){
  const [isFlipped, flip] = React.useState(false);

  const handleClick = event => flip(!isFlipped);

  const useStyles = makeStyles({
    card: {
      maxHeight: 300,
      minHeight: 300,
      maxWidth: 200,
      minWidth: 200,
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    front: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    }, 
    back: {
      background: 'linear-gradient(45deg, #2862bf 30%, #c32dfa 90%)',
    }
  });

  const {card, front, back} = useStyles();

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <Card className={[card, front]} onClick={handleClick}>
        <CardContent>
          <Icon className="fas fa-question"/>
        </CardContent>
      </Card>
      <Card className={[card, back]} onClick={handleClick}>
      </Card>
    </ReactCardFlip>
  )
}

export default Cards;