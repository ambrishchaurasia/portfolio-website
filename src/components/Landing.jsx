import React from "react"
import { motion } from "framer-motion"
import profile from "../assets/profile.png"
import profile11 from "../assets/profile11.png"
import { useState } from "react"


const Landing = () => {
  const [isHover, setIsHover] = useState(false)

  return (
   <section className="min-h-screen flex items-center pt-16 md:pt-24">
  <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-3 items-center gap-12">

    {/* LEFT SIDE */}
    <div className="space-y-4 -ml-4">
      <h2 className="text-3xl md:text-5xl font-medium  tracking-tight">
        Hello, my name is
      </h2>

      <h1 className="text-3xl md:text-5xl font-medium tracking-wide italic -ml-1"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}>
        Ambrish
      </h1>
    </div>
    

    {/* CENTER IMAGE */}
    <div className="flex  flex-col justify-center items-center">

      <motion.img
       src={isHover ? profile11 : profile}
       alt="Ambrish"
       onMouseEnter={() => setIsHover(true)}
       onMouseLeave={() => setIsHover(false)}
       
       
        className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border border-gray-200"
        animate={{
          y: [0, -4, 0],
          rotate: [0, 3, -3, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <a
    href="mailto:ambrishchaurasiya.work@gmail.com"
    className="text-sm text-gray-500 hover:text-black transition duration-300 tracking-wide py-7"
  >
    let’s build something
  </a>
    </div>

    {/* RIGHT SIDE */}
    <div className="text-right space-y-2">
      <h3 className="text-3xl md:text-5xl font-medium tracking-wide">
        Welcome to
      </h3>

      <h3 className="text-3xl md:text-5xl font-medium tracking-wide italic"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}>
        my portfolio
      </h3>
    </div>

  </div>
</section>
  )
}

export default Landing