import React from "react"

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Name */}
        <h2
          className="text-2xl md:text-3xl italic mb-6"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          Ambrish Chaurasiya
        </h2>

        {/* Links */}
        <div className="flex flex-col md:flex-row md:justify-between text-gray-600 text-sm">

          <div className="space-y-2 mb-6 md:mb-0">
            <p>Email: ambrishchaurasiya.work@gmail.com</p>
            <p>Location: India</p>
          </div>

          <div className="space-y-2">
            <a href="https://www.linkedin.com/in/ambrishchaurasiya14/" className="hover:text-black transition">LinkedIn</a> <br />
            <a href="https://github.com/ambrishchaurasia/" className="hover:text-black transition">GitHub</a> <br />
            <a href="https://leetcode.com/u/ambrishchaurasia/" className="hover:text-black transition">LeetCode</a>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-12 text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} Ambrish. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer