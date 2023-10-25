import React from 'react';
import WindowsTracker from './WindowsTracker';
import './App.css';


function App() {

  const [show, setShow] = React.useState(true)

  function handleToggle(){
    setShow(prevShow => !prevShow)
  }

  
  return (
    <div>
      <button onClick={handleToggle}>Toggle Window Tracker</button>
      {show && <WindowsTracker />}
    </div>
  );
}

export default App;
