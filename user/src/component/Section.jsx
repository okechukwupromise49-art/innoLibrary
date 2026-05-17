import { Search } from "lucide-react";
import crown from "../assets/crown.png";
import { useNavigate } from "react-router-dom"

export function Section() {
    const navigate = useNavigate()
  return (
    <section className="grid md:grid-cols-2 items-center px-10 py-10 gap-10">
      
      {/* LEFT SIDE */}
      <div>
        <p className="p-2 mt-4 bg-blue-100 w-fit text-sm text-blue-700 rounded">
          Welcome To Innovative E-Library
        </p>

        <h1 className="font-bold text-gray-800 text-4xl mt-4">
          Discover Knowledge
        </h1>
        <h1 className="font-bold text-blue-700 text-4xl">
          Enrich Your Mind
        </h1>

        <div className="text-gray-500 text-sm mt-3">
          <p className="">Access thousands of free books, research materials,</p>
          <p>and educational resources anytime, anywhere.</p>
        </div>

        {/* SEARCH BAR */}
        <div className="flex items-center shadow-lg p-2 mt-4 w-full max-w-md bg-white rounded"
          onClick={() => navigate("/book")}>
          <input
            type="text"
            placeholder="Search for books, authors, categories..."
            className="flex-1 focus:outline-none px-2"
          />
          <Search className="text-white bg-blue-700 p-2 rounded cursor-pointer" />
        </div>

        {/* BUTTONS */}
        <div className="mt-5 flex gap-3">
          <button className="text-white bg-blue-700 rounded px-4 py-2"
              onClick={() => navigate("/book")}>
            Explore Library
          </button>
          <button className="shadow bg-white text-black rounded px-4 py-2"
            onClick={() => navigate("/about")}>
            How it works
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div>
        <img src={crown} alt="Library Illustration" className="w-full" />
      </div>
    </section>
  );
}