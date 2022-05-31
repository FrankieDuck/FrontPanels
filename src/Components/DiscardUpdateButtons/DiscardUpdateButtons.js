import React from 'react';
import Button from '@material-ui/core/Button';

export default function DiscardUpdateButtons() {
  
  return (
    <div style={{margin: '10px',}}>
      <Button style={{ color: 'blue', }} >DISCARD</Button>
      <Button variant="contained" color="primary">UPDATE</Button>
    </div>
  );
}
