import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import UserList from './components/UserList'
import CreateForm from './components/CreateUser.jsx'
// import EditUser from './components/EditUser'
// import SearchUser from './components/SearchUser'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* <Route path='/' element={<App />} /> */}
        <Route path='/postulantes/listapostulantes' element={<UserList />} />
        <Route path='/postulantes/creapostulante' element={<CreateForm />} />
        {/* <Route path='/postulantes/actualizapostulante/:idpostulante' element={<EditUser />} /> */}
        {/* <Route path='/postulantes/listapostulante/:idpostulante' element={<SearchUser />} /> */}

      </Routes>

    </div>
  )
}

export default App
