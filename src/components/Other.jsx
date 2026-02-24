import React from "react"
import singing from "../assets/singing.png"
import editing from "../assets/editing.png"
import cricket from "../assets/cricket.png"
import meditation from "../assets/meditation.png"

const Other = () => {
  const hobbies = [
    { img: singing, label: "Singing" },
    { img: editing, label: "Video Editing" },
    { img: cricket, label: "Cricket" },
    { img: meditation, label: "Meditation" },
  ]

  return (
    <section className="min-h-screen border-t border-gray-200 flex items-center">
      <div className="max-w-6xl mx-auto w-full px-6 py-24">

        <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-16">
          Hobbies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl"
            >
              <img
                src={hobby.img}
                alt={hobby.label}
                className="w-full h-60 object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Optional subtle overlay label */}
              <div className="mt-3 text-sm text-gray-600 text-center">
                {hobby.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Other