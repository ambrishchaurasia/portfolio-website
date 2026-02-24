import React from "react"

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Name / Logo */}
        <h1 className="text-lg font-semibold text-gray-900 tracking-tight">
          Ambrish
        </h1>

        {/* Links */}
        <div className="hidden md:flex space-x-8 text-sm text-gray-600">
           <a href="#development" className="hover:text-gray-900 transition">
            Projects
          </a>
          <a href="#dsa" className="hover:text-gray-900 transition">
            DSA
          </a>
          <a href="#education" className="hover:text-gray-900 transition">
            Education
          </a>
          
         
          <a href="#other" className="hover:text-gray-900 transition">
            Hobbies
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar