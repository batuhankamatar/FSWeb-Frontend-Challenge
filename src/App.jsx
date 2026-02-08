import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';


function App() {
  const { darkMode, content } = useSelector((state) => state);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (!content) return null;

  return (
    <div>
      <Header />
      <Hero />
      <Skills />
    </div>
  );
}

export default App