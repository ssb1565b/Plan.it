import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RenderRouter from './routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RenderRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
