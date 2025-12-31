// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Hero from './components/hero'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePages'
import DetailSurahPage from './pages/DetailSurahPage'
import DetailTafsirPage from './pages/DetailTafsirPage'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/surah/:surahId" element={<DetailSurahPage />} />
        <Route path="/tafsir/:surahId" element={<DetailTafsirPage />} />
      </Routes>
    </div>
  )
}

export default App
