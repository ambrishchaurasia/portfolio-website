import React from "react"

const Education = () => {
  return (
    <section className="min-h-screen flex items-center border-t border-gray-200">
      <div className="max-w-6xl mx-auto w-full px-6 py-24">

        <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-16">
          Education
        </h2>

        <div className="space-y-12">

          {/* B.Tech */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-medium">
                B.Tech in Computer Science and Engineering
              </h3>
              <p className="text-gray-600">
                UPES, Dehradun
              </p>
              <p className="text-gray-600">
                CGPA: 8.4 / 10
              </p>
            </div>
            <p className="text-gray-500 text-sm">
              Aug 2023 – Present
            </p>
          </div>

          <div className="h-px bg-gray-200"></div>

          {/* Class XII */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-medium">
                Class XII, CBSE
              </h3>
              <p className="text-gray-600">
                Reliance Academy
              </p>
              <p className="text-gray-600">
                Percentage: 70.4%
              </p>
            </div>
            <p className="text-gray-500 text-sm">
              Apr 2021 – Mar 2022
            </p>
          </div>

          <div className="h-px bg-gray-200"></div>

          {/* Class X */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-medium">
                Class X, ICSE
              </h3>
              <p className="text-gray-600">
                St. Joseph’s School
              </p>
              <p className="text-gray-600">
                Percentage: 91.8%
              </p>
            </div>
            <p className="text-gray-500 text-sm">
              Apr 2019 – Mar 2020
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Education

