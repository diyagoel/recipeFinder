import React from 'react'
import Home from './components/Home'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Recipeid from './components/Recipeid'
import Category from './components/Category'
import SearchElement from './components/SearchElement'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:idMeal' element={<Recipeid/>}></Route>
        <Route path='/category/:name' element={<Category/>}></Route>
        <Route path='/search/:searchTerm' element={<SearchElement/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
