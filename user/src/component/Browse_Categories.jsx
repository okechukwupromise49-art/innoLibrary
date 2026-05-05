import {
  Cpu,        // Technology
  FlaskConical, // Science
  ScrollText, // History
  Briefcase,  // Business
  GraduationCap, // Education
  BookOpen    // Literature
} from "lucide-react";
import {   Download, Star, User} from "lucide-react"
export function Browse(){
    return(
        <div className=" mt-10 ">
             <h1 className="font-bold ml-14 text-2xl">Browse Categories</h1>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10 ">
 
  <div className="flex items-center shadow-lg rounded p-3">
    <Cpu size={40} className=" p-2 bg-indigo-100 rounded text-indigo-800"/>
    <div className="ml-3">
      <h1 className="font-bold">Technology</h1>
      <span className="text-sm text-gray-500">Books Available</span>
    </div>
  </div>

  <div className="flex items-center shadow-lg rounded p-3">
    <FlaskConical size={40} className="bg-green-200 p-2 rounded text-green-600"/>
    <div className="ml-3">
      <h1 className="font-bold">Science</h1>
      <span className="text-sm text-gray-500">Active Readers</span>
    </div>
  </div>

  <div className="flex items-center shadow-lg rounded p-3">
    <Briefcase size={40} className="bg-orange-100 p-2 rounded text-orange-700"/>
    <div className="ml-3">
      <h1 className="font-bold">Business</h1>
      <span className="text-sm text-gray-500">Downloads</span>
    </div>
  </div>

  <div className="flex items-center shadow-lg rounded p-3">
    <GraduationCap size={40} className="bg-blue-100 p-2 rounded text-blue-700"/>
    <div className="ml-3">
      <h1 className="font-bold">Education</h1>
      <span className="text-sm text-gray-500">Categories</span>
    </div>
  </div>

   <div className="flex items-center shadow-lg rounded p-3">
    <BookOpen size={40} className="bg-pink-100 p-2 rounded text-pink-700"/>
    <div className="ml-3">
      <h1 className="font-bold">Literature</h1>
      <span className="text-sm text-gray-500">Downloads</span>
    </div>
  </div>

  <div className="flex items-center shadow-lg rounded p-3">
    <ScrollText size={40} className="bg-brown-200 p-2 rounded text-brown-700"/>
    <div className="ml-3">
      <h1 className="font-bold">History</h1>
      <span className="text-sm text-gray-500">Categories</span>
    </div>
  </div>

</div>
        </div>
    )
}