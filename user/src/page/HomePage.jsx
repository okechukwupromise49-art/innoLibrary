import { BookOpen, BookOpenIcon, Download, Star, User} from "lucide-react"
import { Section } from "../component/Section"
import { Browse } from "../component/Browse_Categories"


import { BookGet } from "../component/BookGet"
import { useEffect, useState } from "react"
import { Header } from "../component/Header"

import API_URL from "../Api";

export function HomePage(){
    

     const [books, setBooks] = useState([]);
              const [search, setSearch] = useState("");
              const [category, setCategory] = useState("");
            
                 const fetchBooks = async () => {
                try {
                  let url = `${API_URL}/api/books/details?`;
            
                  if (search) url += `search=${encodeURIComponent(search)}&`;
                  if (category) url += `category=${encodeURIComponent(category)}`;
            
                  const res = await fetch(url);
                  const data = await res.json();
            
                  setBooks(data.data);
                } catch (error) {
                  console.log("Error fetching books:", error);
                }
              };
            
              // Load all books initially
              useEffect(() => {
                fetchBooks();
              }, []);
            
              // Refetch when search/category changes (with debounce)
              useEffect(() => {
                const delay = setTimeout(() => {
                  fetchBooks();
                }, 500);
            
                return () => clearTimeout(delay);
              }, [search, category]);
    return(
        <div>
            {/* header */}
           <Header/>
            <Section/>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10 mt-10">
  
  <div className="flex items-center shadow-lg rounded p-3">
    <BookOpen size={40} className="bg-blue-100 p-2 rounded text-blue-700"/>
    <div className="ml-3">
      <h1 className="font-bold">{books.length}</h1>
      <span className="text-sm text-gray-500">Books Available</span>
    </div>
  </div>

  <div className="flex items-center shadow-lg rounded p-3">
    <User size={40} className="bg-gray-100 p-2 rounded text-gray-600"/>
    <div className="ml-3">
      <h1 className="font-bold">50,000+</h1>
      <span className="text-sm text-gray-500">Active Readers</span>
    </div>
  </div>

  <div className="flex items-center shadow-lg rounded p-3">
    <Download size={40} className="bg-indigo-100 p-2 rounded text-indigo-600"/>
    <div className="ml-3">
      <h1 className="font-bold">200,000+</h1>
      <span className="text-sm text-gray-500">Downloads</span>
    </div>
  </div>

  <div className="flex items-center shadow-lg rounded p-3">
    <Star size={40} className="bg-purple-100 p-2 rounded text-purple-600"/>
    <div className="ml-3">
      <h1 className="font-bold">60+</h1>
      <span className="text-sm text-gray-500">Categories</span>
    </div>
  </div>

</div>
            <Browse/>
            <BookGet books={books}/>
        </div>
    )
}