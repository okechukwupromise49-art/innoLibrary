import { Route, Routes } from 'react-router-dom'


import { Book } from './page/Book'
import { Upload } from './page/Upload'
import { BookGet } from './page/BookGet'



function App() {
 

  return (
    <div>
      <Routes>
         
         <Route path="/" element={<Book/>}/>
         <Route path="/upload" element={<Upload/>}/>
          <Route path="/bookget" element={<BookGet/>}/>
      </Routes>
    </div>
  )
}

export default App
