import React from 'react';
import Landing from './Landing Page/landing';
import Singup from './Components/Signup/signup';
import LogIn from './Components/LogIn/LogIn';

const App = () => {
  return (
    <div>
      <Landing />
      <Singup />
      <LogIn />
    </div>
  )
}

export default App;