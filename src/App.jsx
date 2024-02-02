import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Shop from './Pages/Shop'
import Product from './Pages/Productcollect'
import Arrival from './Pages/Arrival'
import Warrenty from './Pages/Warrenty'
import Profile from '../src/Pages/Profile'
import Shoping from '../src/Pages/Shoping'
import Footer from '../src/Component/Footer'
import Support from './FooterPages/Support'
import About from '../src/FooterPages/About'
import Condition from './FooterPages/Condition'
import Policy from './FooterPages/Policy'
import Return from './FooterPages/Return'
import { FaInstagram } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io'
import Productcollect from './Pages/Productcollect'
import Forget from './Component/Forget'
import Creat from './Component/Creat'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/Shop' element={<Shop/>}/>
      <Route path='/Productcollect' element={<Productcollect/>}/>
        <Route path='/Arrival' element={<Arrival/>}/>
        <Route path='/Warrenty' element={<Warrenty/>}/>
      </Routes>
      <Routes>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Forget' element={<Forget/>}/>
        <Route path='/Creat' element={<Creat/>}/>
        <Route path='/Shoping' element={<Shoping/>}/>
      </Routes>
      <Routes>
        <Route path='/Support' element={<Support/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Condition' element={<Condition/>}/>
       <Route path='/Policy' element={<Policy/>}/>
       <Route path='/Return' element={<Return/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
  
       </div>
    </>
  )
}

export default App
