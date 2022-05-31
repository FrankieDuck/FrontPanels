import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import HelpIcon from '@material-ui/icons/Help';
import EditIcon from '@material-ui/icons/Edit';
import SchoolIcon from '@material-ui/icons/School';
import DescriptionIcon from '@material-ui/icons/Description';
import CloseIcon from '@material-ui/icons/Close';


const style = {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: '.5rem',
    padding: '5px'
}
const crossStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
}
const iconSize = {
  transform: "scale(1.0)"
}
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const cardStyles = {
    flexDirection: "column",
    height: 900,
    width: 300,
    boxShadow: "0 0 3px 2px #cec7c759",
    alignItems: "center",
    margin: "auto",
  }


export default function HelpPanel() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (

    <Card className={classes.root} style={cardStyles}>
      
      <CardContent>
        <div style={crossStyle}>
          <Typography variant="h4" component="div" ><b>Help</b></Typography>
          <CloseIcon />
        </div>
      </CardContent>

    <br></br>
    <br></br>
    
    <CardActions style={{  display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "flex-start",}} >
      <a href="https://www.freecodecamp.org/">
        <div style={style}>
          <EmojiObjectsIcon style={iconSize} />
          <Typography variant="h5">&nbsp;&nbsp;&nbsp;Genius Library</Typography>
        </div>
      </a>

    <br></br>
    <br></br>
        <div style={style}>
          <HelpIcon style={iconSize}/>
          <Typography variant="h5">&nbsp;&nbsp;&nbsp;Help Center</Typography>
        </div>
        <br></br>
        <br></br>
        <div style={style}>
      <EditIcon style={iconSize}/>
      <Typography variant="h5">&nbsp;&nbsp;&nbsp;Send Feedback</Typography>
      </div>
      <br></br>
      <br></br>
      <div style={style}>
      <SchoolIcon style={iconSize}/>
      <Typography variant="h5">&nbsp;&nbsp;&nbsp;Training and More</Typography>
      </div>
      <br></br>
      <br></br>
      <div style={style}>
      <DescriptionIcon style={iconSize}/>
      <Typography variant="h5">&nbsp;&nbsp;&nbsp;What's New</Typography>
      </div>
      </CardActions> 
    </Card>
  );
}
