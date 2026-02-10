import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { data as localData } from './mocks/data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  const loading = useSelector((state) => state.loading);

  const [savedLang] = useLocalStorage('language', 'en');
  const [savedDarkMode] = useLocalStorage('darkMode', false);

  useEffect(() => {
    dispatch({ type: 'SET_LANGUAGE', payload: savedLang });
    dispatch({ type: 'TOGGLE_DARK_MODE', payload: savedDarkMode });
    dispatch({ type: 'FETCH_START' });

    axios({
      method: 'post',
      url: 'https://reqres.in/api/workintech',
      data: localData,
      headers: {
        'x-api-key': 'reqres_dd64f34d6b8a4d2a80e77d4c9d2f60af'
      }
    })
      .then(response => {
        console.log("API'den Gelen Yanıt (Simülasyon Başarılı):", response.data);

        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
        toast(savedLang === 'tr' ? '🚀 Hoş geldiniz!' : '🚀 Welcome back!');
      })
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (loading) return (
    <div className="flex items-center justify-center h-screen font-Inter text-2xl">
      Syncing with server...
    </div>
  );

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        theme={darkMode ? 'dark' : 'light'}
        hideProgressBar={false}
      />
    </div>
  );
}

export default App;