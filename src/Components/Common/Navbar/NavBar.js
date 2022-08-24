import { Menu, Transition } from "@headlessui/react";
import { CaretDown, CaretUp, List, X } from "phosphor-react";
import * as React from 'react';
import { Fragment, useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import Logo2 from '../../../assets/images/Logo/logo-2.webp';
import Logo1 from '../../../assets/images/Logo/logo.webp';


const NavBar = () => {

  const page = window.location.pathname === "/" || window.location.pathname === "/home";


  const [show, setShow] = useState(false);
  const [mobNavShow, setMobNavShow] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  const [isOpen, setOpen] = useState(false);
  

  


  useEffect(() => {
    window.onscroll = () => {
      setStickyNav(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);


  const dropDown = () => {
    setShow(!show);
  }
  const navShow = () => {
    setMobNavShow(!mobNavShow);
  }

  return (
    <nav className={`nav z-50  ${isOpen && "is-active"} ${page ? 'homeNav' : 'bg-white'} ${stickyNav ? 'sticky' : ''}`} >
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between flex-grow">
            <div className="flex-shrink-0">
              <h1 className="text-lg font-semibold tracking-widest text-white uppercase">
                {page ? 
                <Link to="/" className="logo">
                  <img src={Logo1} alt="" />
                </Link>
                 : 
                <Link to="/" className="logo">
                <img src={Logo2} alt="" />
                </Link> 
                }
                <Link to="/" className="logo hidden">
                  <img src={Logo2} alt="" />
                </Link>
              </h1>
            </div>
            <div className="hidden lg:block mx-auto nav_item">
              <div className="flex items-center">
                <NavLink activeClassName="is-active" 
                  to="/"
                  className={`${page ? 'text-white/[.6] hover:text-white/[1]' : 'text-[#0f0e0e]/30'} flex flex-row items-center px-3 py-2 text-sm font-medium rounded-md focus:outline-none relative link`}
                >
                  <span className="ml-2">Home</span>
                </NavLink>
                <NavLink activeClassName="is-active"
                  to="room"
                  className={`${page ? 'text-white/[.6] hover:text-white/[1]' : 'text-[#0f0e0e]/30'} flex flex-row items-center px-3 py-2 text-sm font-medium rounded-md focus:outline-none relative link`}
                >
                  <span className="ml-2">Rooms</span>
                </NavLink>
                <NavLink activeClassName="is-active" to="events" className={` flex flex-row items-center px-3 py-2 text-sm font-medium rounded-md focus:outline-none relative link ${page ? 'text-white/[.6] hover:text-white/[1]' : 'text-[#0f0e0e]/30'}`}
                >
                  <span className="ml-2">Events</span>
                </NavLink>
                <Menu as="div" className="relative">
                  <Menu.Button className={`${page ? 'text-white/[.6] hover:text-white/[1]' : 'text-[#0f0e0e]/30'} flex flex-row items-center px-3 py-2 text-sm font-medium  rounded-md focus:outline-none link no-underline`}>
                    <span className="mx-2">Services</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='15'
                      height='9'
                      fill='none'
                      viewBox='0 0 15 9'
                    >
                      <path
                        fill={`${stickyNav ? '#0f0e0e4d ' : page ? '#fff' : '#0f0e0e4d'}`}
                        d='M14.328 1.258a.625.625 0 00-.578-.383H1.25a.625.625 0 00-.578.383.656.656 0 00.133.687l6.25 6.25a.64.64 0 00.89 0l6.25-6.25a.657.657 0 00.133-.687z'
                      ></path>
                    </svg>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <div className="absolute right-0 mt-6 w-max origin-top-right rounded-md shadow-lg z-20">
                      <div className="py-10 bg-white/80 backdrop-blur-md rounded-md shadow-xs ">
                        <NavLink activeClassName="is-active"
                          to="food-corner"
                          className="flex flex-row items-center px-16 py-2 mt-1 t rounded-md text-[#0F0E0E] text-sm font-bold capitalize hov_effect"
                          role="menuitem"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="none"
                            className="mr-2"
                            viewBox="0 0 32 32"
                          >
                            <path
                              stroke="#BE9E57"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M12 2v4M16 2v4M20 2v4M6 10h20a1 1 0 011 1v12a2.986 2.986 0 01-3 3H8a2.986 2.986 0 01-3-3V11a1 1 0 011-1zM31 12l-4 3M1 12l4 3"
                            ></path>
                          </svg>
                          Food Corner
                        </NavLink>
                        <NavLink activeClassName="is-active"
                          to="fitness"
                          className="flex flex-row items-center px-16 py-2 mt-1 t rounded-md text-[#0F0E0E] text-sm font-bold capitalize hov_effect"
                          role="menuitem"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="none"
                            className="mr-2"
                            viewBox="0 0 32 32"
                          >
                            <path
                              stroke="#BE9E57"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M11 7H8a1 1 0 00-1 1v16a1 1 0 001 1h3a1 1 0 001-1V8a1 1 0 00-1-1zM24 7h-3a1 1 0 00-1 1v16a1 1 0 001 1h3a1 1 0 001-1V8a1 1 0 00-1-1zM25 10h3a1 1 0 011 1v10a1 1 0 01-1 1h-3M7 22H4a1 1 0 01-1-1V11a1 1 0 011-1h3M12 16h8M29 16h2M1 16h2"
                            ></path>
                          </svg>
                          Fitness Center
                        </NavLink>
                        <NavLink activeClassName="is-active"
                          to="pool"
                          className="flex flex-row items-center px-16 py-2 mt-1 t rounded-md text-[#0F0E0E] text-sm font-bold capitalize hov_effect"
                          role="menuitem"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="none"
                            className="mr-2"
                            viewBox="0 0 32 32"
                          >
                            <path
                              fill="#BE9E57"
                              d="M7.63 21.118a.75.75 0 001.5 0h-1.5zm7.622-14.53a.75.75 0 001.496.107l-1.496-.107zM9.13 21.118v-.031-.03-.031-.03-.031-.03-.031-.03-.031-.03-.031-.03-.031-.03-.031-.03-.031-.03-.03-.031-.03-.031-.03-.03-.031-.03-.03-.031-.03-.03-.031-.03-.03-.031-.03-.03-.03-.031-.03-.03-.03-.03-.031-.03-.03-.03-.03-.031-.03-.03-.03-.03-.03-.03-.031-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.029-.03-.03-.03-.03-.03-.029-.03-.03-.03-.03-.029-.03-.03-.03-.029-.03-.03-.03-.029-.03-.03-.03-.029-.03-.03-.029-.03-.03-.03-.029-.03-.03-.029-.03-.03-.029-.03-.029-.03-.03-.029-.03-.03-.029-.03-.029-.03-.03-.029-.03-.029-.03-.03-.029-.03-.029-.03-.029-.03-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.028-.03-.03-.029-.03-.029-.03-.029-.03-.028-.03-.03-.029-.03-.029-.03-.028-.03-.03-.029-.03-.028-.03-.03-.029-.03-.028-.03-.03-.029-.03-.029-.029-.03-.029-.029-.03-.029-.03-.028-.03-.03-.029-.029-.03-.029-.03-.029-.029-.03-.029-.029-.03-.029-.029-.03-.029-.03-.028-.03-.03-.029-.029-.03-.029-.029-.03-.029-.029-.03-.029-.029-.03-.029-.03-.028-.03-.03-.028-.03-.03-.029-.029-.03-.029-.029-.03-.029-.029-.03-.029-.029-.03-.029-.03-.028-.03-.03-.029-.029-.03-.029-.029-.03-.029-.03-.029-.029-.03-.029-.029-.03-.029-.03-.028-.03-.03-.029-.029-.03-.029-.03-.029-.029-.03-.029V12v-.028-.03-.03-.029-.03-.028-.03-.03-.029-.03-.029-.029-.03-.029-.03-.029-.03-.029-.03-.029-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.028V11v-.03-.029-.03-.029-.03-.029-.03-.029-.03-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.03-.029-.03-.029-.03-.029-.03-.03-.029-.03-.029-.03-.03-.029-.03-.03-.029-.03-.03-.029-.03-.03-.029-.03-.03-.029-.03-.03-.029-.03-.03-.029-.03-.03-.03-.029-.03-.03-.03-.029-.03-.03-.03-.029-.03-.03-.03-.03-.029-.03-.03-.03-.03-.029-.03-.03-.03-.03-.03-.03-.029-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.029-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.031-.03-.03-.03-.03-.03-.03-.031-.03-.03-.03-.03-.031-.03-.03-.03-.031-.03-.03-.03-.031-.03-.03-.031-.03-.03-.031-.03-.03-.031-.03-.03-.031-.03-.031-.03-.03-.031-.03-.031-.03-.031-.03-.031-.03-.031-.03-.031-.03-.031-.03-.031-.03-.031h-1.5V21.117h1.5zm0-15.238c0-1.096.41-1.81.96-2.246.569-.451 1.357-.658 2.175-.584.816.073 1.604.422 2.162 1.006.545.57.904 1.402.824 2.532l1.496.107c.11-1.537-.388-2.787-1.236-3.675-.835-.875-1.975-1.362-3.111-1.464-1.135-.103-2.323.174-3.242.903-.938.743-1.528 1.906-1.528 3.42h1.5zM19.06 21.118a.75.75 0 001.5 0h-1.5zm7.62-14.53a.75.75 0 001.497.107l-1.497-.107zm-6.12 14.53v-.031-.03-.031-.03-.031-.03-.031-.03-.031-.03-.031-.03-.031-.03-.031-.03-.031-.03-.03-.031-.03-.031-.03-.03-.031-.03-.03-.031-.03-.03-.031-.03-.03-.031-.03-.03-.03-.031-.03-.03-.03-.03-.031-.03-.03-.03-.03-.031-.03-.03-.03-.03-.03-.03-.031-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.029-.03-.03-.03-.03-.03-.029-.03-.03-.03-.03-.029-.03-.03-.03-.029-.03-.03-.03-.029-.03-.03-.03-.029-.03-.03-.029-.03-.03-.03-.029-.03-.03-.029-.03-.03-.029-.03-.029-.03-.03-.029-.03-.03-.029-.03-.029-.03-.03-.029-.03-.029-.03-.03-.029-.03-.029-.03-.029-.03-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.028-.03-.03-.029-.03-.029-.03-.029-.03-.028-.03-.03-.029-.03-.029-.03-.028-.03-.03-.029-.03-.028-.03-.03-.029-.03-.028-.03-.03-.029-.03-.029-.029-.03-.029-.029-.03-.029-.03-.028-.03-.03-.029-.029-.03-.029-.03-.029-.029-.03-.029-.029-.03-.029-.029-.03-.029-.03-.028-.03-.03-.029-.029-.03-.029-.029-.03-.029-.029-.03-.029-.029-.03-.029-.03-.028-.03-.03-.028-.03-.03-.029-.029-.03-.029-.029-.03-.029-.029-.03-.029-.029-.03-.029-.03-.028-.03-.03-.029-.029-.03-.029-.029-.03-.029-.03-.029-.029-.03-.029-.029-.03-.029-.03-.028-.03-.03-.029-.029-.03-.029-.03-.029-.029-.03-.029V12v-.028-.03-.03-.029-.03-.028-.03-.03-.029-.03-.029-.029-.03-.029-.03-.029-.03-.029-.03-.029-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.028V11v-.03-.029-.03-.029-.03-.029-.03-.029-.03-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.03-.029-.03-.029-.03-.029-.03-.03-.029-.03-.029-.03-.03-.029-.03-.03-.029-.03-.03-.029-.03-.03-.029-.03-.03-.029-.03-.03-.029-.03-.03-.029-.03-.03-.03-.029-.03-.03-.03-.029-.03-.03-.03-.029-.03-.03-.03-.03-.029-.03-.03-.03-.03-.029-.03-.03-.03-.03-.03-.03-.029-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.029-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.031-.03-.03-.03-.03-.03-.03-.031-.03-.03-.03-.03-.031-.03-.03-.03-.031-.03-.03-.03-.031-.03-.03-.031-.03-.03-.031-.03-.03-.031-.03-.03-.031-.03-.031-.03-.03-.031-.03-.031-.03-.031-.03-.031-.03-.031-.03-.031-.03-.031-.03-.031-.03-.031h-1.5V21.117h1.5zm0-15.238c0-1.096.41-1.81.96-2.246.569-.451 1.357-.658 2.175-.584.815.073 1.604.422 2.162 1.006.544.57.904 1.402.823 2.532l1.497.107c.11-1.537-.388-2.787-1.236-3.675-.835-.875-1.975-1.362-3.112-1.464-1.134-.103-2.322.174-3.241.903-.938.743-1.528 1.906-1.528 3.42h1.5z"
                            ></path>
                            <path
                              stroke="#BE9E57"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M8.38 8.927h11.43M8.38 12.355h11.43M8.38 15.402h11.43M8.38 18.45h11.43M3.81 24.165l1.48-.555a4.571 4.571 0 013.143-.025l2.393.855a4.572 4.572 0 002.76.1l4.117-1.144a4.572 4.572 0 012.669.068l2.944.981a4.573 4.573 0 002.892 0l1.983-.66M3.81 28.737l1.48-.556a4.57 4.57 0 013.143-.024l2.393.854a4.57 4.57 0 002.76.1l4.117-1.144a4.571 4.571 0 012.669.068l2.944.982a4.571 4.571 0 002.892 0l1.983-.661"
                            ></path>
                          </svg>
                          pool
                        </NavLink>
                        <NavLink activeClassName="is-active"
                          to="bar"
                          className="flex flex-row items-center px-16 py-2 mt-1 rounded-md text-[#0F0E0E] text-sm font-bold capitalize hov_effect"
                          role="menuitem"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="none"
                            className="mr-2"
                            viewBox="0 0 32 32"
                          >
                            <path
                              stroke="#BE9E57"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M6 17.45V26a1 1 0 001 1h18a1 1 0 001-1v-8.55M6.75 5h18.5a1.012 1.012 0 01.962.725L28 12H4l1.787-6.275A1.012 1.012 0 016.75 5v0z"
                            ></path>
                            <path
                              stroke="#BE9E57"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M12 12v2a4 4 0 11-8 0v-2M20 12v2a4 4 0 11-8 0v-2M28 12v2a4 4 0 11-8 0v-2"
                            ></path>
                          </svg>
                          Lounge Bar
                        </NavLink>
                      </div>
                    </div>
                  </Transition>
                </Menu>

                <NavLink activeClassName="is-active"
                  to="contact"
                  className={`${page ? 'text-white/[.6] hover:text-white/[1]' : 'text-[#0f0e0e]/30'} flex flex-row items-center px-3 py-2 text-sm font-medium rounded-md focus:outline-none relative link`}
                >
                  <span className="ml-2">Contact</span>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center ml-4 md:ml-6">
              <div className="question hidden lg:block lg:basis-auto">
                <div className={`${page ? 'border-white' : 'text-[#0f0e0e] border-[#0f0e0e]'} border  shadow rounded-md max-w-sm w-full mx-auto p-3`}>
                  <a href="tel:3104372766"> </a>
                  <div className="flex items-center space-x-4">
                    <a href="tel:3104372766">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill={`${stickyNav ? '#000 ' : '#BE9E57'}`}
                            d="M19.04 15.903c0 .33-.074.669-.23.999-.156.33-.357.642-.623.935-.45.495-.944.852-1.504 1.082-.55.229-1.145.348-1.787.348-.935 0-1.934-.22-2.988-.67a16.103 16.103 0 01-3.154-1.814 26.352 26.352 0 01-3.006-2.567A26.042 26.042 0 013.19 11.22c-.752-1.045-1.357-2.09-1.797-3.126-.44-1.045-.66-2.044-.66-2.998 0-.623.11-1.219.33-1.769a4.22 4.22 0 011.055-1.53c.586-.578 1.228-.862 1.906-.862.257 0 .514.055.743.165.238.11.449.275.614.513l2.127 2.997c.165.23.284.44.366.642.083.193.129.385.129.56 0 .22-.065.44-.193.65-.12.21-.293.43-.513.65l-.697.725a.49.49 0 00-.147.367c0 .073.01.137.028.21.027.074.055.129.073.184.165.302.45.697.853 1.173.412.477.852.963 1.329 1.449.495.485.972.935 1.457 1.347.477.403.871.678 1.183.843.046.019.1.046.165.074a.633.633 0 00.23.036.504.504 0 00.375-.155l.697-.688c.229-.23.449-.403.66-.513a1.22 1.22 0 01.65-.193c.175 0 .358.037.56.12.201.082.412.201.641.357l3.034 2.154c.239.165.404.358.505.587.091.229.146.458.146.715z"
                          ></path>
                          <path
                            stroke={`${stickyNav ? '#000 ' : '#BE9E57'}`}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M15.859 7.35c0-.55-.431-1.392-1.073-2.08-.586-.632-1.366-1.127-2.136-1.127M19.067 7.35A6.412 6.412 0 0012.65.934"
                          ></path>
                        </svg>
                      </div>
                    </a>
                    <div className="flex-1">
                      <a
                        className={`${page ? 'text-white' : 'text-black'}  font-bold text-sm link`}
                        href="tel:3104372766"
                      >
                        310-437-2766
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex lg:hidden">
            <div onClick={navShow} className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-black focus:outline-none focus:bg-black bg-black focus:text-white cursor-pointer">
              {mobNavShow ?
<X size={32} color="#ffffff" />

:
<List size={32} color="#ffffff" />

            }
            </div>
        </div>
      </div>
      </div>

      {mobNavShow && <div className="drop-shadow-2xl lg:hidden bg-white/[.9] absolute mob_nav rounded-bl-[10px] z-20">
        <div className="container mx-auto">
          <div className="pt-2 pb-3">
            <NavLink activeClassName="is-active"
              to="/"
              className="flex flex-row items-center px-3 py-2 t rounded-md text-[#0F0E0E] lg:text-white text-base font-semibold capitalize md:border-0 border-b"
            >
              <span className="ml-2">Home</span>
            </NavLink>
            <NavLink activeClassName="is-active"
              to="room"
              className="flex flex-row items-center px-3 py-2 mt-1 t rounded-md text-[#0F0E0E] lg:text-white text-base font-semibold capitalize md:border-0 border-b"
            >
              <span className="ml-2">Rooms</span>
            </NavLink>
            <div className="relative">
              <button onClick={dropDown} className="flex flex-row items-center px-3 py-2 mt-1 rounded-md text-[#0F0E0E] lg:text-white text-base font-semibold capitalize md:border-0 border-b w-full justify-between cursor-pointer">
                <span className="mx-2">Services</span>
                {show ? 
                <CaretUp size={20} color="#000" weight="fill" />
                :
                <CaretDown size={20} color="#000" weight="fill" />
                }
              </button>
              {show && <div
                
                className="px-2 py-2 mt-2 bg-white rounded-md shadow-xs pl-20 mobile_drop"
                
                
              >
                <NavLink activeClassName="is-active"
                  to="food-corner"
                  className="flex flex-row items-center px-3 py-2 mt-1 t rounded-md text-[#0F0E0E] lg:text-white text-sm font-semibold capitalize"
                  role="menuitem"
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    fill='none'
                    viewBox='0 0 32 32'
                  >
                    <path
                      stroke='#BE9E57'
                      d='M12 2v4m4-4v4m4-4v4M6 10h20a1 1 0 011 1v12a2.986 2.986 0 01-3 3H8a2.986 2.986 0 01-3-3V11a1 1 0 011-1zm25 2l-4 3M1 12l4 3'
                    ></path>
                  </svg>
                  Food Corner
                </NavLink>
                <NavLink activeClassName="is-active"
                  to="fitness"
                  className="flex flex-row items-center px-3 py-2 mt-1 t rounded-md text-[#0F0E0E] lg:text-white text-sm font-semibold capitalize"
                  role="menuitem"
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    fill='none'
                    viewBox='0 0 32 32'
                  >
                    <path
                      stroke='#009DAE'
                      d='M11 7H8a1 1 0 00-1 1v16a1 1 0 001 1h3a1 1 0 001-1V8a1 1 0 00-1-1zm13 0h-3a1 1 0 00-1 1v16a1 1 0 001 1h3a1 1 0 001-1V8a1 1 0 00-1-1zm1 3h3a1 1 0 011 1v10a1 1 0 01-1 1h-3M7 22H4a1 1 0 01-1-1V11a1 1 0 011-1h3m5 6h8m9 0h2M1 16h2'
                    ></path>
                  </svg>
                  Fitness Center
                </NavLink>
                <NavLink activeClassName="is-active"
                  to="pool"
                  className="flex flex-row items-center px-3 py-2 mt-1 t rounded-md text-[#0F0E0E] lg:text-white text-sm font-semibold capitalize"
                  role="menuitem"
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    fill='none'
                    viewBox='0 0 32 32'
                  >
                    <mask
                      id='path-1-outside-1_922_37376'
                      width='28'
                      height='30'
                      x='1.286'
                      y='0.523'
                      fill='#000'
                      maskUnits='userSpaceOnUse'
                    >
                      <path fill='#fff' d='M1.286.523h28v30h-28z'></path>
                      <path d='M12.304 1.544c-.757.12-1.64.511-2.204.975a4.428 4.428 0 00-1.548 2.779c-.043.296-.056 2.738-.045 8.048l.016 7.622.182.16c.236.21.548.221.774.029l.156-.133.028-.873.028-.872 5.24-.015 5.239-.014v.768c0 .423.023.83.052.905.093.241.28.367.547.367.203 0 .274-.03.405-.17l.16-.17.016-7.806.015-7.806.152-.445c.282-.823.913-1.536 1.672-1.89a3.04 3.04 0 011.428-.303c.864.007 1.563.303 2.197.93.58.574.85 1.173.947 2.11.06.575.387.832.827.65.232-.096.366-.345.364-.678-.001-.439-.213-1.234-.464-1.742-1.62-3.283-6.338-3.256-7.905.045-.367.773-.422 1.107-.455 2.742l-.029 1.419H9.65l.028-1.42c.023-1.13.049-1.48.125-1.721.24-.756.69-1.38 1.289-1.78 1.28-.86 2.98-.714 4.052.346.583.577.869 1.17.965 2.004.03.258.086.52.125.583.105.166.409.294.6.252.2-.044.425-.261.46-.447.034-.17-.05-.952-.133-1.261-.391-1.454-1.637-2.68-3.135-3.083-.332-.09-1.408-.155-1.721-.105zm7.866 8.863v1.02H9.663v-2.04H20.17v1.02zm0 3.334v1.047l-5.24-.014-5.24-.014-.014-1.033-.015-1.033H20.17v1.047zm0 3.251v1.047l-5.24-.014-5.24-.014-.014-1.033-.015-1.033H20.17v1.047zM4.52 22.666c-.866.186-1.832.566-2.06.809-.186.2-.183.505.007.729.224.264.427.27 1.018.037 1.05-.417 1.716-.542 2.513-.473.726.063.917.118 2.259.645 1.585.623 2.05.74 3.082.775 1.221.041 2.08-.139 3.682-.77 1.524-.601 2.108-.726 3.013-.648.653.057 1.037.168 2.191.633 1.552.624 2.28.799 3.328.799.707 0 1.392-.1 2.114-.306.483-.138 1.256-.42 1.52-.555a.672.672 0 00.32-.528c0-.22-.198-.473-.418-.533-.177-.049-.27-.029-.767.163-1.395.54-2.494.701-3.54.52-.6-.105-.986-.23-2.056-.662-1.452-.586-2.097-.744-3.035-.744-.94 0-1.676.182-3.026.748-.842.353-1.516.553-2.222.66-1.238.186-1.905.062-3.856-.716-1.372-.548-1.76-.642-2.76-.67-.654-.017-.9-.001-1.306.087zm.446 4.417c-.668.084-1.64.38-2.27.692-.455.226-.548.686-.196.98.231.193.501.18 1.061-.05.822-.337 1.316-.439 2.127-.44.875-.001 1.008.033 2.618.665 1.7.666 2.48.836 3.556.771 1.043-.063 1.793-.254 3.332-.85 1.344-.519 1.621-.585 2.474-.587.85-.002 1.142.067 2.363.56 1.831.739 2.36.868 3.53.863 1.084-.005 1.843-.157 3.057-.611.593-.222.817-.392.867-.658.059-.309-.256-.681-.574-.681-.05 0-.345.098-.654.217-.309.12-.81.286-1.115.37-.503.137-.64.15-1.526.153-1.154.003-1.295-.03-2.88-.664-1.221-.488-1.77-.651-2.483-.74-.93-.116-2.007.067-3.142.534-1.872.77-2.286.873-3.53.872-1.12-.001-1.272-.036-2.83-.66-1.232-.492-1.633-.617-2.312-.719a4.523 4.523 0 00-1.473-.017z'></path>
                    </mask>
                    <path
                      fill='#009DAE'
                      d='M12.304 1.544c-.757.12-1.64.511-2.204.975a4.428 4.428 0 00-1.548 2.779c-.043.296-.056 2.738-.045 8.048l.016 7.622.182.16c.236.21.548.221.774.029l.156-.133.028-.873.028-.872 5.24-.015 5.239-.014v.768c0 .423.023.83.052.905.093.241.28.367.547.367.203 0 .274-.03.405-.17l.16-.17.016-7.806.015-7.806.152-.445c.282-.823.913-1.536 1.672-1.89a3.04 3.04 0 011.428-.303c.864.007 1.563.303 2.197.93.58.574.85 1.173.947 2.11.06.575.387.832.827.65.232-.096.366-.345.364-.678-.001-.439-.213-1.234-.464-1.742-1.62-3.283-6.338-3.256-7.905.045-.367.773-.422 1.107-.455 2.742l-.029 1.419H9.65l.028-1.42c.023-1.13.049-1.48.125-1.721.24-.756.69-1.38 1.289-1.78 1.28-.86 2.98-.714 4.052.346.583.577.869 1.17.965 2.004.03.258.086.52.125.583.105.166.409.294.6.252.2-.044.425-.261.46-.447.034-.17-.05-.952-.133-1.261-.391-1.454-1.637-2.68-3.135-3.083-.332-.09-1.408-.155-1.721-.105zm7.866 8.863v1.02H9.663v-2.04H20.17v1.02zm0 3.334v1.047l-5.24-.014-5.24-.014-.014-1.033-.015-1.033H20.17v1.047zm0 3.251v1.047l-5.24-.014-5.24-.014-.014-1.033-.015-1.033H20.17v1.047zM4.52 22.666c-.866.186-1.832.566-2.06.809-.186.2-.183.505.007.729.224.264.427.27 1.018.037 1.05-.417 1.716-.542 2.513-.473.726.063.917.118 2.259.645 1.585.623 2.05.74 3.082.775 1.221.041 2.08-.139 3.682-.77 1.524-.601 2.108-.726 3.013-.648.653.057 1.037.168 2.191.633 1.552.624 2.28.799 3.328.799.707 0 1.392-.1 2.114-.306.483-.138 1.256-.42 1.52-.555a.672.672 0 00.32-.528c0-.22-.198-.473-.418-.533-.177-.049-.27-.029-.767.163-1.395.54-2.494.701-3.54.52-.6-.105-.986-.23-2.056-.662-1.452-.586-2.097-.744-3.035-.744-.94 0-1.676.182-3.026.748-.842.353-1.516.553-2.222.66-1.238.186-1.905.062-3.856-.716-1.372-.548-1.76-.642-2.76-.67-.654-.017-.9-.001-1.306.087zm.446 4.417c-.668.084-1.64.38-2.27.692-.455.226-.548.686-.196.98.231.193.501.18 1.061-.05.822-.337 1.316-.439 2.127-.44.875-.001 1.008.033 2.618.665 1.7.666 2.48.836 3.556.771 1.043-.063 1.793-.254 3.332-.85 1.344-.519 1.621-.585 2.474-.587.85-.002 1.142.067 2.363.56 1.831.739 2.36.868 3.53.863 1.084-.005 1.843-.157 3.057-.611.593-.222.817-.392.867-.658.059-.309-.256-.681-.574-.681-.05 0-.345.098-.654.217-.309.12-.81.286-1.115.37-.503.137-.64.15-1.526.153-1.154.003-1.295-.03-2.88-.664-1.221-.488-1.77-.651-2.483-.74-.93-.116-2.007.067-3.142.534-1.872.77-2.286.873-3.53.872-1.12-.001-1.272-.036-2.83-.66-1.232-.492-1.633-.617-2.312-.719a4.523 4.523 0 00-1.473-.017z'
                    ></path>
                    <path
                      stroke='#009DAE'
                      d='M12.304 1.544c-.757.12-1.64.511-2.204.975a4.428 4.428 0 00-1.548 2.779c-.043.296-.056 2.738-.045 8.048l.016 7.622.182.16c.236.21.548.221.774.029l.156-.133.028-.873.028-.872 5.24-.015 5.239-.014v.768c0 .423.023.83.052.905.093.241.28.367.547.367.203 0 .274-.03.405-.17l.16-.17.016-7.806.015-7.806.152-.445c.282-.823.913-1.536 1.672-1.89a3.04 3.04 0 011.428-.303c.864.007 1.563.303 2.197.93.58.574.85 1.173.947 2.11.06.575.387.832.827.65.232-.096.366-.345.364-.678-.001-.439-.213-1.234-.464-1.742-1.62-3.283-6.338-3.256-7.905.045-.367.773-.422 1.107-.455 2.742l-.029 1.419H9.65l.028-1.42c.023-1.13.049-1.48.125-1.721.24-.756.69-1.38 1.289-1.78 1.28-.86 2.98-.714 4.052.346.583.577.869 1.17.965 2.004.03.258.086.52.125.583.105.166.409.294.6.252.2-.044.425-.261.46-.447.034-.17-.05-.952-.133-1.261-.391-1.454-1.637-2.68-3.135-3.083-.332-.09-1.408-.155-1.721-.105zm7.866 8.863v1.02H9.663v-2.04H20.17v1.02zm0 3.334v1.047l-5.24-.014-5.24-.014-.014-1.033-.015-1.033H20.17v1.047zm0 3.251v1.047l-5.24-.014-5.24-.014-.014-1.033-.015-1.033H20.17v1.047zM4.52 22.666c-.866.186-1.832.566-2.06.809-.186.2-.183.505.007.729.224.264.427.27 1.018.037 1.05-.417 1.716-.542 2.513-.473.726.063.917.118 2.259.645 1.585.623 2.05.74 3.082.775 1.221.041 2.08-.139 3.682-.77 1.524-.601 2.108-.726 3.013-.648.653.057 1.037.168 2.191.633 1.552.624 2.28.799 3.328.799.707 0 1.392-.1 2.114-.306.483-.138 1.256-.42 1.52-.555a.672.672 0 00.32-.528c0-.22-.198-.473-.418-.533-.177-.049-.27-.029-.767.163-1.395.54-2.494.701-3.54.52-.6-.105-.986-.23-2.056-.662-1.452-.586-2.097-.744-3.035-.744-.94 0-1.676.182-3.026.748-.842.353-1.516.553-2.222.66-1.238.186-1.905.062-3.856-.716-1.372-.548-1.76-.642-2.76-.67-.654-.017-.9-.001-1.306.087zm.446 4.417c-.668.084-1.64.38-2.27.692-.455.226-.548.686-.196.98.231.193.501.18 1.061-.05.822-.337 1.316-.439 2.127-.44.875-.001 1.008.033 2.618.665 1.7.666 2.48.836 3.556.771 1.043-.063 1.793-.254 3.332-.85 1.344-.519 1.621-.585 2.474-.587.85-.002 1.142.067 2.363.56 1.831.739 2.36.868 3.53.863 1.084-.005 1.843-.157 3.057-.611.593-.222.817-.392.867-.658.059-.309-.256-.681-.574-.681-.05 0-.345.098-.654.217-.309.12-.81.286-1.115.37-.503.137-.64.15-1.526.153-1.154.003-1.295-.03-2.88-.664-1.221-.488-1.77-.651-2.483-.74-.93-.116-2.007.067-3.142.534-1.872.77-2.286.873-3.53.872-1.12-.001-1.272-.036-2.83-.66-1.232-.492-1.633-.617-2.312-.719a4.523 4.523 0 00-1.473-.017z'
                      mask='url(#path-1-outside-1_922_37376)'
                    ></path>
                  </svg>
                  pool
                </NavLink>
                <NavLink activeClassName="is-active"
                  to="bar"
                  className="flex flex-row items-center px-3 py-2 mt-1 t rounded-md text-[#0F0E0E] lg:text-white text-sm font-semibold capitalize"
                  role="menuitem"
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    fill='none'
                    viewBox='0 0 32 32'
                  >
                    <path
                      stroke='#009DAE'
                      d='M6 17.45V26a1 1 0 001 1h18a1 1 0 001-1v-8.55M6.75 5h18.5a1.012 1.012 0 01.962.725L28 12H4l1.787-6.275A1.012 1.012 0 016.75 5v0z'
                    ></path>
                    <path
                      stroke='#009DAE'
                      d='M12 12v2a4 4 0 11-8 0v-2m16 0v2a4 4 0 11-8 0v-2m16 0v2a4 4 0 11-8 0v-2'
                    ></path>
                  </svg>
                  Lounge Bar
                </NavLink>
              </div>}
            </div>
            <NavLink activeClassName="is-active"
              to="events"
              className="flex flex-row items-center px-3 py-2 mt-1 t rounded-md text-[#0F0E0E] lg:text-white text-base font-semibold capitalize md:border-0 border-b"
            >
              <span className="ml-2">Events</span>
            </NavLink>
            <NavLink activeClassName="is-active"
              to="contact"
              className="flex flex-row items-center px-3 py-2 mt-1 t rounded-md text-[#0F0E0E] lg:text-white text-base font-semibold capitalize md:border-0 border-b"
            >
              <span className="ml-2">Contanct</span>
            </NavLink>
          </div>
        </div>
        <div className="container px-6 mx-auto pb-10">
          <div className="basis-full mt-1 text-center md:hidden">
            <p className="font-semibold text-base text-[#0F0E0E]/50 lg:text-white mb-2">
              Share
            </p>
            <ul className="flex justify-center items-center gap-4 share">
              <li>
                <Link to="#">
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='16'
                    fill='none'
                    viewBox='0 0 18 16'
                  >
                    <path
                      stroke='#009DAE'
                      d='M8.5 3.875C8.5 2.157 9.945.727 11.664.75a3.125 3.125 0 012.828 1.875h2.758L14.726 5.15A9.992 9.992 0 014.75 14.5c-2.5 0-3.125-.937-3.125-.937s2.5-.938 3.75-2.813c0 0-5-2.5-3.75-9.375 0 0 3.125 3.125 6.875 3.75v-1.25z'
                    ></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='21'
                    height='20'
                    fill='none'
                    viewBox='0 0 21 20'
                  >
                    <path
                      stroke='#009DAE'
                      d='M10.5 13.125a3.125 3.125 0 100-6.25 3.125 3.125 0 000 6.25z'
                    ></path>
                    <path
                      stroke='#009DAE'
                      d='M13.938 2.813H7.061a3.75 3.75 0 00-3.75 3.75v6.875a3.75 3.75 0 003.75 3.75h6.875a3.75 3.75 0 003.75-3.75V6.561a3.75 3.75 0 00-3.75-3.75z'
                    ></path>
                    <path
                      fill='#009DAE'
                      d='M14.563 6.719a.781.781 0 100-1.563.781.781 0 000 1.563z'
                    ></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='21'
                    height='20'
                    fill='none'
                    viewBox='0 0 21 20'
                  >
                    <path
                      stroke='#009DAE'
                      d='M17.063 2.813H3.938a.625.625 0 00-.626.624v13.126c0 .345.28.625.626.625h13.124c.346 0 .625-.28.625-.625V3.438a.625.625 0 00-.625-.626zM9.875 8.75v5m-2.5-5v5'
                    ></path>
                    <path
                      stroke='#009DAE'
                      d='M9.875 10.938a2.188 2.188 0 014.375 0v2.812'
                    ></path>
                    <path
                      fill='#009DAE'
                      d='M7.375 7.031a.781.781 0 100-1.562.781.781 0 000 1.562z'
                    ></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>}
    </nav>
  );
};

export default NavBar;
