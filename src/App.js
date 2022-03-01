import { useState, useEffect } from 'react';
import MainPage from './pages/MainPage';
import useToggle from './hooks/useToggle';

function App() {
  useEffect() 
  const toggleResult = useToggle()

  const toggleDarkMode = () => {
    useToggle(!toggleResult)
  }



  return (
    <div className={toggleResult ? "dark" : "light"}>
      <button onClick={toggleDarkMode}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;
