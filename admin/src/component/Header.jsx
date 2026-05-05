import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom"

export function Header(){
    const navigate = useNavigate()
    return(
        <div>
             <div className="shadow flex justify-between items-center px-6 py-3">
                            <div className="flex items-center gap-2">
                            <img src={logo} alt="" className="w-14" />
                            <div>
                                <span className="font-bold text-lg text-yellow-600">Innovative</span> 
                                <span className="font-bold">E-Library</span>
                                <p className="text-xs text-gray-400">Your Digital Library</p>
                            </div>
                            </div>
            
            
                            {/*nav */}
                           <div className="hidden md:flex text-sm items-center gap-2">
                                <p className="cursor-pointer hover:text-blue-700"
                                        onClick={() => navigate("/")}>Home</p>
                                <p className="cursor-pointer hover:text-blue-700"
                                    onClick={() => navigate("/book")}>Books</p>
                                <p className="cursor-pointer hover:text-blue-700"
                                    >Categories</p>
                                <p className="cursor-pointer hover:text-blue-700"
                                    onClick={() => {navigate("/about")}}>About Us</p>
                                <p className="cursor-pointer hover:text-blue-700"
                                        onClick={() => {navigate("/contact")}}>Contact</p>
                                </div>
            
                            <div  className="flex justify-between text-center items-center">
                                <button className="text-blue-700 border border-blue-700 px-3 py-1 rounded hover:bg-blue-50"
                                        >Login</button>
                                 <button className="ml-3 mr-4 text-white bg-blue-700 rounded px-3 py-1 hover:bg-blue-800">Sign Up</button>
                            </div>
                        </div>
        </div>
    )
}