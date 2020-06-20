import React from 'react';
import './App.scss';
import Button from 'react-bootstrap/Button';

function App() {
    const clickHandler = () => {
        console.log("test")
    }

  return (
      <div className="container">
          <h1>Hello React!</h1>
          <Button variant="primary" onClick={clickHandler}>I'm a button</Button>
      </div>
  );
}

export default App;
