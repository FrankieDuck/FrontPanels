import React from 'react';

import HistoricPanel from './Components/HistoricPanel/HistoricView'
import HelpPanel from './Components/HelpPanel/HelpPanel';
import LivePanel from './Components/LivePanel/LivePanel';
import HelpDrawer from './Components/HelpPanel/HelpPanelDrawer';
import LandingPage from './Components/LandingPage'
import HistoricDrawer from './Components/HomePage'

import TimePicker from './Components/ValuePicker/ValuePickers'
import LiveHistoricTabs from './Components/LiveHistoricTab/LiveHistoricTab'


function App() {
  return (
    <div className="App">
      <LiveHistoricTabs />
    </div>
  );
}

export default App;
