import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Challenge1 from './challenges/Challenge1';
import Challenge2 from './challenges/Challenge2';
import Challenge3 from './challenges/Challenge3';
import Challenge4 from './challenges/Challenge4';
import Challenge5 from './challenges/Challenge5';
import Challenge6 from './challenges/Challenge6';
import Challenge7 from './challenges/Challenge7';
import Challenge8 from './challenges/Challenge8';
import Challenge9 from './challenges/Challenge9';
import Challenge10 from './challenges/Challenge10';

const Root = () => (
  <Router basename="/dnd-lang-1">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/challenge1" element={<Challenge1 />} />
      <Route path="/challenge2" element={<Challenge2 />} />
      <Route path="/challenge3" element={<Challenge3 />} />
      <Route path="/challenge4" element={<Challenge4 />} />
      <Route path="/challenge5" element={<Challenge5 />} />
      <Route path="/challenge6" element={<Challenge6 />} />
      <Route path="/challenge7" element={<Challenge7 />} />
      <Route path="/challenge8" element={<Challenge8 />} />
      <Route path="/challenge9" element={<Challenge9 />} />
      <Route path="/challenge10" element={<Challenge10 />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import App from './App';
// import Challenge1 from '.challenges/Challenge1';
// import Challenge2 from './Challenge2';

// const Root = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/challenge1" element={<Challenge1 />} />
//       <Route path="/challenge2" element={<Challenge2 />} />
      
//     </Routes>
//   </Router>
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>
// );
