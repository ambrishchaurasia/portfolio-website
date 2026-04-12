import React from "react"
import { motion } from "framer-motion"
import profile from "../assets/profile.png"
import profile11 from "../assets/profile11.png"
import { useState } from "react"

const Landing = () => {
  const [isHover, setIsHover] = useState(false)

  return (
    <section className="min-h-screen flex items-center pt-16 md:pt-24">
      <div className="max-w-7xl mx-auto w-full px-6">

       {/* ── MOBILE LAYOUT ── */}
<div className="flex flex-col items-center md:hidden" style={{ gap: "0", paddingTop: "24px" }}>

  {/* 1. Greeting + Name */}
  <div className="text-center mb-10">
    <p className="text-lg font-normal tracking-tight" style={{ color: "var(--muted, #9a9490)" }}>
      Hello, my name is
    </p>
    <h1
      className="text-5xl font-medium italic leading-tight mt-1"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      Ambrish
    </h1>
  </div>

  {/* 2. Profile image + email */}
  <div className="flex flex-col items-center mb-10" style={{ gap: "16px" }}>
    <motion.img
      src={isHover ? profile11 : profile}
      alt="Ambrish"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="w-60 h-60 object-cover rounded-full border border-gray-800"
      animate={{ y: [0, -5, -2, 0], rotate: [0, 2, -1.5, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    <a
      href="mailto:ambrishchaurasiya.work@gmail.com"
      className="text-xs tracking-widest text-gray-500 hover:text-yellow-400 transition duration-300 px-5 py-2 rounded-full border border-gray-800 glow-animate"
    >
      💡 let's build something
    </a>
  </div>

  {/* 3. Welcome */}
  <div className="text-center">
    <p className="text-lg font-normal tracking-tight" style={{ color: "var(--muted, #9a9490)" }}>
      Welcome to
    </p>
    <h2
      className="text-5xl font-medium italic leading-tight mt-1"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      my portfolio
    </h2>
  </div>

</div>

        {/* ── DESKTOP LAYOUT (grid, hidden below md) ── */}
        <div className="hidden md:grid md:grid-cols-3 items-center gap-12">

          {/* LEFT */}
          <div className="space-y-4 -ml-4">
            <h2 className="text-5xl font-medium tracking-tight">
              Hello, my name is
            </h2>
            <h1
              className="text-5xl font-medium tracking-wide italic -ml-1"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              Ambrish
            </h1>
          </div>

          {/* CENTER */}
          <div className="flex flex-col justify-center items-center">
            <motion.img
              src={isHover ? profile11 : profile}
              alt="Ambrish"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              className="w-80 h-80 object-cover rounded-full border border-gray-200"
              animate={{ y: [0, -3, 0], rotate: [0, 3, -2, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <a
              href="mailto:ambrishchaurasiya.work@gmail.com"
              className="text-sm text-gray-500 hover:text-yellow-400 transition duration-300 tracking-wide py-7 glow-animate"
            >
              💡 let's build something
            </a>
          </div>

          {/* RIGHT */}
          <div className="text-right space-y-2">
            <h3 className="text-5xl font-medium tracking-wide">
              Welcome to
            </h3>
            <h3
              className="text-5xl font-medium tracking-wide italic"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              my portfolio
            </h3>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Landing