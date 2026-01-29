"use client"

export function ExpertiseSection() {
  const expertise = {
    build: [
      "Web Design",
      "Web Development",
      "eCommerce",
      "Mobile Apps",
      "UI/UX Design",
      "Brand Identity",
      "Complex Applications"
    ],
    maintain: [
      "Website Maintenance",
      "Performance Optimization",
      "Security Updates",
      "Content Management",
      "Bug Fixes",
      "Technical Support"
    ],
    grow: [
      "SEO Optimization",
      "Digital Marketing",
      "Analytics & Tracking",
      "Conversion Optimization",
      "Social Media Integration",
      "Email Marketing"
    ]
  }

  return (
    <div className="bg-[#F4F4F4] py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-black leading-tight">
            Our Expertise
          </h2>
        </div>

        {/* Expertise Categories */}
        <div className="space-y-16">
          {/* Build Section */}
          <div className="border-t border-gray-300 pt-8">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              <h3 className="text-2xl font-light text-gray-600 lg:w-48 flex-shrink-0">
                Build
              </h3>
              <div className="flex flex-wrap gap-4">
                {expertise.build.map((item, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 rounded-full border border-black text-black text-base font-normal hover:bg-black hover:text-white transition-colors duration-300 cursor-default"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Maintain Section */}
          <div className="border-t border-gray-300 pt-8">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              <h3 className="text-2xl font-light text-gray-600 lg:w-48 flex-shrink-0">
                Maintain
              </h3>
              <div className="flex flex-wrap gap-4">
                {expertise.maintain.map((item, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 rounded-full border border-black text-black text-base font-normal hover:bg-black hover:text-white transition-colors duration-300 cursor-default"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Grow Section */}
          <div className="border-t border-gray-300 pt-8">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              <h3 className="text-2xl font-light text-gray-600 lg:w-48 flex-shrink-0">
                Grow
              </h3>
              <div className="flex flex-wrap gap-4">
                {expertise.grow.map((item, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 rounded-full border border-black text-black text-base font-normal hover:bg-black hover:text-white transition-colors duration-300 cursor-default"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
