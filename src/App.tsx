import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RenderRouter from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <RenderRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
