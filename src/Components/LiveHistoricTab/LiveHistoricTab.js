import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



export default function LiveHistoricTabs() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square >
      <Tabs 
        data-testid="Live-Historic-Tabs"
        value={value}
        indicatorColor="blue"
        textColor="primary"
        onChange={handleChange}
        aria-label="Live & Historic Tabs"
      >
        <Tab label="LIVE" />
        <Tab label="HISTORIC" />
      </Tabs>
    </Paper>
  );
}
