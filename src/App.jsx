import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Components } from './components/Components'
import { Routes, Route, Link } from 'react-router-dom';
import { Layout } from './view/Layout';
import { Home } from './view/Home';
import { Contact } from './view/Contact';


function App() {

  return (
    <div className="App">
        <Routes>
        <Route element={<Layout/>}>
        <Route path="component" element={<Components />} />
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        </Route>
        </Routes>
    </div>
  )
}

export default App
