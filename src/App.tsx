import { useState } from 'react';
import './App.css';
import SplitScreen from './SplitScreen';

function LeftHand() {
  return <h1 style={{ backgroundColor: 'red' }}>Left</h1>;
}

function RightHand() {
  return <p style={{ backgroundColor: 'blue' }}>Right</p>;
}

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={1}>
      <LeftHand />
      <RightHand />
    </SplitScreen>
  );
}

export default App;
