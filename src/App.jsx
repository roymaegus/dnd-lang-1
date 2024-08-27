import React from 'react';
import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <h1>Welcome to the Spanish Sentence Challenges</h1>
    <nav>
      <ul>
        <li>
          <Link to="/challenge1">Challenge 1"</Link>
        </li>
        <li>
          <Link to="/challenge2">Challenge 2"</Link>
        </li>
        <li>
          <Link to="/challenge3">Challenge 3"</Link>
        </li>
        <li>
          <Link to="/challenge4">Challenge 4"</Link>
        </li>
        <li>
          <Link to="/challenge5">Challenge 5"</Link>
        </li>
        <li>
          <Link to="/challenge6">Challenge 6"</Link>
        </li>
        <li>
          <Link to="/challenge7">Challenge 7"</Link>
        </li>
        <li>
          <Link to="/challenge8">Challenge 8"</Link>
        </li>
        <li>
          <Link to="/challenge9">Challenge 9"</Link>
        </li>
        <li>
          <Link to="/challenge10">Challenge 10"</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default App;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const App = () => (
//   <div>
//     <h1>Welcome to the Code Challenges</h1>
//     <nav>
//       <ul>
//         <li>
//           <Link to="/challenge1">Find the Vowels</Link> 
//         </li>
//         <li>
//           <Link to="/challenge2">FizzBuzz</Link>
//         </li>
//         {/* Add more links as needed */}
//       </ul>
//     </nav>
//   </div>
// );

// export default App;