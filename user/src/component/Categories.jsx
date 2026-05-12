import { BookOpen, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categoriesList = [
  "Technology", "Science", "Business", "Education", "Literature", "History",
  "Mathematics", "Physics", "Chemistry", "Biology", "Computer Science",
  "Engineering", "Medicine", "Agriculture", "Economics", "Finance",
  "Accounting", "Marketing", "Management", "Entrepreneurship", "Law",
  "Political Science", "Psychology", "Sociology", "Philosophy", "Religion",
  "Geography", "Environmental Science", "Art", "Music", "Photography",
  "Film Studies", "Languages", "Linguistics", "Communication", "Journalism",
  "Architecture", "Astronomy", "Statistics", "Data Science", "Artificial Intelligence",
  "Cybersecurity", "Networking", "Software Development", "Web Development",
  "Mobile Development", "Cloud Computing", "Blockchain", "Robotics", "Energy",
  "Renewable Energy", "Transportation", "Sports", "Health & Fitness",
  "Food & Nutrition", "Travel & Tourism", "Culture", "Fashion", "Gaming",
  "Animation", "Ethics", "Research", "General Knowledge"
];



export default function Categories({ onCategorySelect }) {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Browse Categories</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover thousands of books across diverse fields of knowledge
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {categoriesList.map((category, index) => (
            <div
              key={index}
              onClick={() => navigate("/book")}
              className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl 
                         hover:-translate-y-2 transition-all duration-300 cursor-pointer
                         border border-gray-100 hover:border-blue-200 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-blue-100 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center text-4xl mb-5 transition-all group-hover:scale-110">
                {getCategoryEmoji(category)}
              </div>

              <h3 className="font-semibold text-lg leading-tight text-gray-800 group-hover:text-blue-700 transition-colors">
                {category}
              </h3>

              <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-all flex items-center gap-2 text-blue-600 text-sm font-medium">
                Explore Books
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Helper function to assign relevant emojis */
function getCategoryEmoji(category) {
  const cat = category.toLowerCase();
  if (cat.includes("computer") || cat.includes("software") || cat.includes("web") || cat.includes("cyber")) return "💻";
  if (cat.includes("ai") || cat.includes("data") || cat.includes("blockchain")) return "🤖";
  if (cat.includes("science") || cat.includes("physics") || cat.includes("biology")) return "🔬";
  if (cat.includes("business") || cat.includes("finance") || cat.includes("marketing")) return "💼";
  if (cat.includes("medicine") || cat.includes("health")) return "🩺";
  if (cat.includes("art") || cat.includes("music") || cat.includes("film")) return "🎨";
  if (cat.includes("law")) return "⚖️";
  if (cat.includes("education")) return "📚";
  if (cat.includes("history") || cat.includes("culture")) return "🏛️";
  if (cat.includes("engineering")) return "⚙️";
  return "📖";
}