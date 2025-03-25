import { useState } from 'react'
import './App.css'
import '../src/index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PageNotFound from './pages/PageNotFound';
import MainC from './components/MainC';
function App() {

  return (
    <>
      <Router>
        <Header/>
        <MainC/>
        <Routes>
          <Route to='*' element={PageNotFound}/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima adipisci amet officia sed, reiciendis cupiditate est accusamus perferendis iste dignissimos corporis, error voluptatem architecto asperiores sapiente esse ipsum fugiat suscipit.
        </Routes>
      </Router>
    </>
  )
}

export default App
