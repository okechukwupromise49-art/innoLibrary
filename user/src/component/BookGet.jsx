import {  ExternalLink } from "lucide-react";

export function BookGet({ books }) {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-4xl font-bold tracking-tight">📚 E-Library</h2>
          <p className="text-gray-500 mt-1">
            {books.length} {books.length === 1 ? "book" : "books"} available
          </p>
        </div>
      </div>

      {/* BOOK GRID */}
      {books.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-400">No books found</p>
          <p className="text-gray-500 mt-2">Try adding some books to your library</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {books.map((book) => (
            <div
              key={book._id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl 
                         transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* COVER IMAGE */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-500 
                             group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-white/90 backdrop-blur-md text-xs font-medium 
                                   px-3 py-1 rounded-full text-gray-800 shadow-sm">
                    {book.category}
                  </span>
                </div>

               
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="font-semibold text-xl leading-tight line-clamp-2 mb-2">
                  {book.title}
                </h3>

                <p className="text-gray-600 text-sm mb-5">
                  ✍️ {book.author}
                </p>

                {/* View Button */}
                <a
                  href={book.bookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-zinc-900 hover:bg-black 
                             text-white font-medium py-3.5 px-6 rounded-2xl transition-all 
                             active:scale-[0.97]"
                >
                  View Book
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}