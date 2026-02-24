import React from "react"

const DSA = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full px-6">

        {/* Section Heading */}
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-16">
          Data Structures & Algorithms
        </h2>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">

          <div className="border border-gray-200 p-6 rounded-lg">
            <h3 className="text-2xl italic"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}>
              200+
            </h3>
            <p className="mt-2 text-gray-600">
              Problems Solved
            </p>
          </div>

            <a href="https://leetcode.com/u/ambrishchaurasia/" target="_blank" rel="noopener noreferrer"             
                className=" hover:shadow-md transition cursor-pointer">
          <div className="border border-gray-200 p-6 rounded-lg">
            <h3 className="text-2xl italic"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}>
              LeetCode
            </h3>
            <p className="mt-2 text-gray-600">
              Active Practice
            </p>
            
          </div>
          </a>

          <div className="border border-gray-200 p-6 rounded-lg">
            <h3 className="text-2xl italic"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}>
              Java
            </h3>
            <p className="mt-2 text-gray-600">
              Primary Language
            </p>
          </div>

        </div>

        {/* Topics */}
        <div>
          <h3 className="text-3xl font-medium mb-8">
            Core Topics
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <p>• Arrays & Strings</p>
            <p>• Linked Lists</p>
            <p>• Stacks & Queues</p>
            <p>• Recursion & Backtracking</p>
            <p>• Trees & Binary Search Trees</p>
            <p>• Graph Algorithms</p>
            <p>• Dynamic Programming</p>
            <p>• Sliding Window & Two Pointers</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default DSA