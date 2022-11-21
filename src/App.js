import React from 'react'
import Demo from './Demo';
import Login from './Login';
import Useeffect1 from './Useeffect1';
import A from './A';
import Exampleform from './Exampleform';

// import Logins from './Logins';
// import Logins from './Logins';
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Demo />
      <Login />
      <div>Useeffect1</div>
      <Useeffect1/>
      <A/>
      <Exampleform/>
      {/* <Logins/> */}

      {/* <Routes>
        <Route path="/" element={<Demo />}/>
        <Route path="/dd" element={<Login />} />
      </Routes> */}
    </div>
  );
}

export default App;
