// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from './Components/News';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = (theme) => {
    setIsDarkMode(theme === 'dark');
  };

  return (
    <Router>
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<News key="general" category="general" />} />
          <Route path="/science" element={<News key="science" category="science" />} />
          <Route path="/sports" element={<News key="sports" category="sports" />} />
          <Route path="/technology" element={<News key="technology" category="technology" />} />
          <Route path="/business" element={<News key="business" category="business" />} />
          <Route path="/health" element={<News key="health" category="health" />} />
          <Route path="/entertainment" element={<News key="entertainment" category="entertainment" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
