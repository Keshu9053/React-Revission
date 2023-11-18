import React from 'react'
import {NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
      <header className="shadow sticky z-50 top-0">
          <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
              <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                  <Link to="/" className="flex items-center">
                      <img
                          src="https://i.pinimg.com/736x/a8/d1/9b/a8d19bfb6d5172adc87d65908c69137a.jpg"
                          className="mr-3 h-12"
                          alt="Logo"
                          width={50}
                          height={100}
                      />
                  </Link>
                  <div className="flex items-center lg:order-2">
                      <Link
                          to="#"
                          className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                      >
                          Log in
                      </Link>
                      <Link
                          to="#"
                          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                      >
                          Get started
                      </Link>
                  </div>
                  <div
                      className="hidden justify-between items-center w-full  lg:flex lg:w-auto lg:order-1"
                      id="mobile-menu-2"
                  >
                      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    
                              <NavLink
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-green-700":"text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                                  }
                                  to = '/home'
                              >
                                  Home
                              </NavLink>  
                              <NavLink
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-green-700":"text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                                  }
                                  to = '/about'
                              >
                                  Learning
                              </NavLink>
                              

                              <NavLink
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-green-700":"text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                                  }
                                  to = '/contact'
                              >
                                  Contact 
                              </NavLink>
                      </ul>
                  </div>
              </div>
          </nav>
      </header>
  );
}

