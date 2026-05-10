import { BookOpen } from "lucide-react";
import { BookSearch } from "../component/BookSearch";
import { useEffect, useState } from "react";
import { BookGet } from "../component/BookGet";
import logo from "../assets/logo.png"
import { Header } from "../component/Header";
import API_URL from "../Api";

export function Book(){

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
            
            <Header/>
            <BookSearch  
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}/>

                <BookGet 
                books = {books}/>
        </div>
    )
}