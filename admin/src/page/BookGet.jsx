import { Trash2, Pencil, ExternalLink, Download } from "lucide-react";

export function BookGet({ books, onEdit }) {

  const onDelete = async (id, books) => {
  try {
    await fetch(`http://localhost:4000/api/books/delete/${id}`, {
      method: "DELETE",
    });
     window.location.reload();
  } catch (error) {
    console.error(error);
  }

  
};
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold tracking-tight">📚 E-Library</h2>
        <p className="text-gray-500 text-lg">{books.length} books</p>
      </div>

      {books.length === 0 ? (
        <p className="text-center text-gray-500 py-20 text-xl">
          No books found
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {books.map((book) => {
            // ✅ Safe URL handling
           const viewUrl = book.bookUrl;

            const downloadUrl =
              typeof book.bookUrl === "string"
                ? book.bookUrl.replace("/upload/", "/upload/fl_attachment/")
                : "#";

            return (
              <div
                key={book._id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                {/* Cover */}
                <div className="relative h-72 bg-gray-100">
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium rounded-full">
                      {book.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-semibold text-xl line-clamp-2 mb-2">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    ✍️ {book.author}
                  </p>

                  <div className="flex gap-3">
                    {/* ✅ View */}
                    <a
                      href={viewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-zinc-900 hover:bg-black text-white py-3.5 rounded-2xl font-medium flex items-center justify-center gap-2 transition"
                    >
                      <ExternalLink size={18} />
                      View Book
                    </a>

                    {/* ✅ Download (proper Cloudinary way) */}
                    <a
                      href={downloadUrl}
                      className="px-5 border border-gray-300 hover:bg-gray-50 flex items-center justify-center rounded-2xl transition"
                      title="Download PDF"
                    >
                      <Download size={20} />
                    </a>
                  </div>

                  {/* Admin Actions */}
                  <div className="flex justify-end gap-4 mt-6">
                    <button
                      onClick={() => onEdit(book)}
                      className="text-green-600 hover:text-green-700 transition"
                    >
                      <Pencil size={20} />
                    </button>
                    <button
                      onClick={() => onDelete(book._id)}
                      className="text-red-600 hover:text-red-700 transition"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}