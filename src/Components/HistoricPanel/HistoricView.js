import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import LiveHistoricTabs from "../LiveHistoricTab/LiveHistoricTab";
import DateAndTimePicker from "../DatePickers/DatePickers";
import ResolutionPicker from "../ResolutionPicker/ResolutionPicker";
import DiscardUpdateButtons from "../DiscardUpdateButtons/DiscardUpdateButtons";

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
    display: "flex",
    flexDirection: "column",
    height: 600,
    width: 300,
    boxShadow: "0 0 3px 2px #cec7c759",
    alignItems: "center",
    margin: "auto",
  }


export default function HistoricView() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} style={cardStyles}>
      <CardContent>
          
    <LiveHistoricTabs />
    <DateAndTimePicker />
    <ResolutionPicker />

      </CardContent>
      <CardActions>
        <DiscardUpdateButtons />
      </CardActions>
    </Card>
  );
}
