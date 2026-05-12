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
            <option>Technology</option>
            <option>Science</option>
            <option>Business</option>
            <option>Education</option>
            <option>Literature</option>
            <option>History</option>
            <option>Mathematics</option>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Biology</option>
            <option>Computer Science</option>
            <option>Engineering</option>
            <option>Medicine</option>
            <option>Agriculture</option>
            <option>Economics</option>
            <option>Finance</option>
            <option>Accounting</option>
            <option>Marketing</option>
            <option>Management</option>
            <option>Entrepreneurship</option>
            <option>Law</option>
            <option>Political Science</option>
            <option>Psychology</option>
            <option>Sociology</option>
            <option>Philosophy</option>
            <option>Religion</option>
            <option>Geography</option>
            <option>Environmental Science</option>
            <option>Art</option>
            <option>Music</option>
            <option>Photography</option>
            <option>Film Studies</option>
            <option>Languages</option>
            <option>Linguistics</option>
            <option>Communication</option>
            <option>Journalism</option>
            <option>Architecture</option>
            <option>Astronomy</option>
            <option>Statistics</option>
            <option>Data Science</option>
            <option>Artificial Intelligence</option>
            <option>Cybersecurity</option>
            <option>Networking</option>
            <option>Software Development</option>
            <option>Web Development</option>
            <option>Mobile Development</option>
            <option>Cloud Computing</option>
            <option>Blockchain</option>
            <option>Robotics</option>
            <option>Energy</option>
            <option>Renewable Energy</option>
            <option>Transportation</option>
            <option>Sports</option>
            <option>Health & Fitness</option>
            <option>Food & Nutrition</option>
            <option>Travel & Tourism</option>
            <option>Culture</option>
            <option>Fashion</option>
            <option>Gaming</option>
            <option>Animation</option>
            <option>Ethics</option>
            <option>Research</option>
            <option>General Knowledge</option>
      </select>

        </div>
      </div>
    </div>
  );
}