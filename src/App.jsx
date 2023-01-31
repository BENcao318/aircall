import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import axios from 'axios'
import Header from './Header'
import Tabs from './components/Tabs'

const client = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
})

function App() {
  const handleClick = () => {
    client
      .get(`/activities`)
      .then((response) => {
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="App">
      <Tabs />
    </div>
  )
}

export default App
