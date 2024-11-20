import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListEmployee from './components/ListEmployee'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import EmployeeComponent from './components/EmployeeComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    
      <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/* home page */}
        <Route path='/' element={<HomePage/>}></Route>
        {/* List Employee page */}
        <Route path='/employees' element={<ListEmployee/>}></Route>
        {/* Add Employee page  */}
        <Route path='/add' element={<EmployeeComponent/>}></Route>        
      </Routes>
      <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
