import React from 'react'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a mi ecommerce en react"} />
    </div>
  )
}

export default App

