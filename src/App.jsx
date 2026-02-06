import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';


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
    <div className="">
      {/* 1. BÖLÜM: Header ve Hero (Senin planına göre bunlar iç içe veya ardışık) */}
      <Header />
      <main className="">
        {/* Buraya Hero, Skills, Profile, Projects gelecek */}
        {/* Şu an sadece her şeyi temizleyip Header'ı görmek için burayı boş bırakıyoruz. */}
      </main>
    </div>
  );
}

export default App