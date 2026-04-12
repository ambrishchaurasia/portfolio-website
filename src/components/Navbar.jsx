import React, { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-lg font-semibold text-gray-900 tracking-tight">
          Ambrish
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm text-gray-600">
          <a href="#development" className="hover:text-gray-900 transition">Projects</a>
          <a href="#dsa" className="hover:text-gray-900 transition">DSA</a>
          <a href="#education" className="hover:text-gray-900 transition">Education</a>
          <a href="#other" className="hover:text-gray-900 transition">Hobbies</a>

          <a 
            href="/Resume-AmbrishChaurasiya.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition relative group overflow-hidden"
          >
            <span className="px-1 relative z-10 group-hover:text-white">
              Resume
            </span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-gray-900 z-0 group-hover:h-full"></span>  
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
  {isOpen && (
  <>
    {/* Background overlay */}
    <div 
      className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
      onClick={() => setIsOpen(false)}
    ></div>

    {/* Glass menu */}
    <div className="fixed top-20 left-4 right-4 z-50">
      <div className="flex flex-col items-center gap-6 py-6 text-gray-800 text-sm 
      bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl">
        
        <a href="#development" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#dsa" onClick={() => setIsOpen(false)}>DSA</a>
        <a href="#education" onClick={() => setIsOpen(false)}>Education</a>
        <a href="#other" onClick={() => setIsOpen(false)}>Hobbies</a>

        <a 
          href="/Resume-AmbrishChaurasiya.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
        >
          Resume
        </a>
      </div>
    </div>
  </>
)}
    </nav>
  )
}

export default Navbar