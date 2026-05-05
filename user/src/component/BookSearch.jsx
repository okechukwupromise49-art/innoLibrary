import { useEffect, useState } from "react";

export function BookSearch({search,setSearch,category,setCategory}) { 
  
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-800 py-6 px-6 md:px-16">
      
      <div className="bg-white p-4 rounded flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-lg">
        
        {/* TEXT */}
        <div>
          <h2 className="font-bold text-lg">
            Explore Thousands of Books
          </h2>
          <p className="text-sm text-gray-500">
            Find your next read
          </p>
        </div>

        {/* SEARCH AREA */}
        <div className="flex w-full md:w-auto gap-2">
          
          <input
            type="text"
          
            placeholder="Search books, authors, categories..."
            className="flex-1 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
             value={search}
              onChange={(e) => setSearch(e.target.value)}
          />

            <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ padding: "8px" }}
          >
            <option value="">All Categories</option>
            <option value="Science">Science</option>
            <option value="Math">Math</option>
            <option value="History">History</option>
            <option value="Education">Education</option>
      </select>

        </div>
      </div>
    </div>
  );
}