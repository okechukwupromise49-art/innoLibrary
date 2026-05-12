import {
  Cpu,
  FlaskConical,
  ScrollText,
  Briefcase,
  GraduationCap,
  BookOpen,
  Calculator,
  Atom,
  Globe,
  Music,
  Palette,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom"

export function Browse() {
  const navigate = useNavigate()

  const categories = [
    {
      name: "Technology",
      icon: Cpu,
      color: "bg-indigo-100 text-indigo-800",
      info: "Books Available"
    },
    {
      name: "Science",
      icon: FlaskConical,
      color: "bg-green-100 text-green-700",
      info: "Active Readers"
    },
    {
      name: "Business",
      icon: Briefcase,
      color: "bg-orange-100 text-orange-700",
      info: "Downloads"
    },
    {
      name: "Education",
      icon: GraduationCap,
      color: "bg-blue-100 text-blue-700",
      info: "Categories"
    },
    {
      name: "Literature",
      icon: BookOpen,
      color: "bg-pink-100 text-pink-700",
      info: "Popular Books"
    },
    {
      name: "History",
      icon: ScrollText,
      color: "bg-yellow-100 text-yellow-700",
      info: "Historical Records"
    },
    {
      name: "Mathematics",
      icon: Calculator,
      color: "bg-purple-100 text-purple-700",
      info: "Solved Topics"
    },
    {
      name: "Physics",
      icon: Atom,
      color: "bg-cyan-100 text-cyan-700",
      info: "Research Papers"
    },
    
  ];

  return (
    <div className="mt-10">

      <div className="flex justify-between items-center px-10">
        <h1 className="font-bold text-2xl">
          Browse Categories
        </h1>

        <div className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => navigate("/categories")}>

          <span>See All Categories</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10 mt-6">

        {categories.map((category, index) => {
          const Icon = category.icon;

          return (
            <div
              key={index}
              className="flex items-center shadow-lg rounded-xl p-4 hover:scale-105 transition duration-300 cursor-pointer"
            >
              <Icon
                size={45}
                className={`p-2 rounded ${category.color}`}
              />

              <div className="ml-3">
                <h1 className="font-bold">
                  {category.name}
                </h1>

                <span className="text-sm text-gray-500">
                  {category.info}
                </span>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}