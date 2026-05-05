
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './page/HomePage'
import { Book } from './page/Book'
import AboutUs from './page/About'
import ContactUs from './page/Contact'

function App() {
 

  return (
    <div>
      
      <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/book" element={<Book/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
    </div>
  )
}

export default App
