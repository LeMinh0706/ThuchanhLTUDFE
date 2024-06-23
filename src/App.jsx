import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'

function App() {


  return (
    <>
      <Header />
      <Outlet></Outlet>
    </>
  )
}

export default App
