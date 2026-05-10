import { useState } from "react";
import API_URL from "../Api";

export function Upload() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    file: null,
    cover: null,
  });
  const [bookFile, setBookFile] = useState(null)
  const [coverFile, setCoverFile] = useState(null)
  const [msg, setMsg] = useState("")


  async function handletest(){
  
      console.log("click")

       const res =  await fetch(`${API_URL}/api/books/health`)
   const data = await res.json()
   console.log(data.message)
      
  }
  

  const handleSubmit = async(e) => {
    e.preventDefault();

     if (!bookFile || !coverFile) {
      setMsg("Please upload both book and cover");
      return;
    }
    const formData = new FormData()
    formData.append("title", form.title)
    formData.append("author", form.author)
    formData.append("category", form.category)
    formData.append("description", form.description)
    formData.append("book", bookFile)
    formData.append("cover", coverFile)

    try{
      const res = await fetch(`${API_URL}/api/books/upload`,
        {
          method: "POST",
          mode: "cors",
          body:formData,
        }
      )
      const data = await  res.json()
      console.log(data)
      setMsg(data.message)

    }catch(err){
      console.log(err)
      setMsg(err.message)
    }
    
  };



  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-6">

      <h2 className="text-xl font-bold mb-4">Upload New Book</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Title */}
        <div>
          <label className="text-sm text-gray-600">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter book title"
            className="w-full border p-2 rounded mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
          />
        </div>

        {/* Author */}
        <div>
          <label className="text-sm text-gray-600">Author</label>
          <input
            type="text"
            name="author"
            placeholder="Enter author name"
            className="w-full border p-2 rounded mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
             onChange={(e) =>
          setForm({ ...form, author: e.target.value })
        }
          />
        </div>

        {/* Category */}
        <div>
          <label className="text-sm text-gray-600">Category</label>
          <select
            name="category"
            className="w-full border p-2 rounded mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) =>
          setForm({ ...form, category: e.target.value })
        }
          >
            <option value="">Select category</option>
            <option>Technology</option>
            <option>Science</option>
            <option>Business</option>
            <option>Education</option>
            <option>Literature</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="text-sm text-gray-600">Description</label>
          <textarea
            name="description"
            placeholder="Write short description..."
            rows="3"
            className="w-full border p-2 rounded mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="text-sm text-gray-600">Upload PDF</label>
          <input
            type="file"
            name="file"
            accept="application/pdf"
            className="w-full mt-1"
             onChange={(e) => setBookFile(e.target.files[0])}
          />
        </div>

        {/* Cover Image */}
        <div>
          <label className="text-sm text-gray-600">Cover Image</label>
          <input
            type="file"
            name="cover"
            accept="image/*"
            className="w-full mt-1"
             onChange={(e) => setCoverFile(e.target.files[0])}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
        >
          Upload Book
        </button>
          <p>{msg}</p>
          
      </form>
      <button
          
            onClick={handletest}>test</button>
    </div>
  );
}