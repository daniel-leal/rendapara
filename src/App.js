import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Main />
      <ToastContainer autoClose={10000} />
    </div>
  );
}

export default App;
