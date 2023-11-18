import React from 'react'
  

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://t4.ftcdn.net/jpg/02/55/73/15/360_F_255731595_eG8ZerN19GVsoXqnqaExufXIiWmfDcih.jpg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        What i have learned from this simple project ? 
                      </h2>
                      <p className="mt-6 text-gray-600">
                        Through this simple project, I've acquired essential skills in page navigation and seamless transition management. I've gained a practical understanding of connecting pages efficiently, utilizing the power of navlinks to facilitate transitions between two pages without the need for a complete page reload. Additionally, I've learned the application of routers, a key component in directing and organizing the flow of the web application.
                      </p>
                      <p className="mt-4 text-gray-600">
                        This newfound knowledge provides a solid foundation for creating responsive and user-friendly interfaces, showcasing the significance of effective page connections and the role of routers in enhancing the overall user experience.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}