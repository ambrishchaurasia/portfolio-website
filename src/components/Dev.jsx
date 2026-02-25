import React, { useRef } from "react"
import { ChevronLeft, ChevronRight, Github } from "lucide-react"

const Projects = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef
    if (!current) return

    const scrollAmount = 380
    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  const projects = [
    {
      title: "Doonga Boys Hostel Website",
      desc: "The Doonga Boys Home website was created to give the hostel a proper digital presence. ",
      github: "https://github.com/ambrishchaurasia/doongaboyshome",
      live: "https://doongaboyshome.vercel.app/",
    },
    {
      title: "Waste Classification using AI",
      desc: "Waste classification as organic or recyclable using YOLOv8.",
      github: "https://github.com/ambrishchaurasia/waste-classification",
      live: "https://waste-classification-one.vercel.app/.com",
    },
    {
      title: "LE4VE",
      desc: "Cricket game built in vanilla JavaScript.",
      github: "https://github.com/ambrishchaurasia/cricketgame",
      live: "https://ambrishchaurasia.github.io/cricketgame/",
    },
     {
      title: "ByteNotes",
      desc: "A note-taking app built with React and Tailwind CSS.",
      github: "https://github.com/ambrishchaurasia/bytenotes",
      live: "https://bytenotes.vercel.app/",
    },
  ]

  return (
    <section className="min-h-screen border-t border-gray-200 flex items-center">
<div className="max-w-6xl mx-auto w-full px-6 py-24">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-16">
           Projects
        </h2>

        {/* MOBILE SLIDER */}
<div
  ref={scrollRef}
  className="flex md:hidden overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
>
  {[...projects, ...projects].map((project, index) => (
    <div
      key={index}
      onClick={() => window.open(project.live, "_blank")}
      className="min-w-full snap-center px-2"
    >
      <div className="border border-gray-200 rounded-2xl p-6 flex flex-col justify-between h-[240px]">
        <h3 className="text-xl font-medium mb-3">
          {project.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          {project.desc}
        </p>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition"
        >
          <Github size={16} />
          GitHub
        </a>
      </div>
    </div>
  ))}
</div>


{/* DESKTOP GRID (UNCHANGED) */}
{/* DESKTOP SLIDER */}
<div className="hidden md:block relative">

  {/* LEFT BUTTON */}
  <button
    onClick={() => scroll("left")}
    className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 hover:shadow-md transition"
  >
    <ChevronLeft size={20} />
  </button>

  {/* GRID WRAPPER */}
  <div
    ref={scrollRef}
    className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar"
  >
    {projects.map((project, index) => (
      <div
        key={index}
        onClick={() => window.open(project.live, "_blank")}
        className="min-w-[300px] border border-gray-200 rounded-2xl p-6 flex flex-col justify-between h-[240px] hover:shadow-lg hover:-translate-y-1 transition cursor-pointer"
      >
        <h3 className="text-xl font-medium mb-3">
          {project.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          {project.desc}
        </p>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition"
        >
          <Github size={16} />
          GitHub
        </a>
      </div>
    ))}
  </div>

  {/* RIGHT BUTTON */}
  <button
    onClick={() => scroll("right")}
    className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 hover:shadow-md transition"
  >
    <ChevronRight size={20} />
  </button>

</div>
        <div className="mt-20 text-center text-sm text-gray-600 tracking-wide">
  MERN · SQL · HTML · CSS · JavaScript · <span className="line-through text-gray-400">GPT</span>
</div>
      </div>
    </section>
  )
}

export default Projects

