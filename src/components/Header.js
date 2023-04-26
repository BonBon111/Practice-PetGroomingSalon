import React, { useState, useEffect } from 'react'

import Logo from "../assets/img/logo.svg"

import { CgMenuRight } from "react-icons/cg"

import Nav from "./Nav"
import NavMobile from "./NavMobile"
import Program from "./Program"

const Header = () => {
  const [bg, setBg] = useState(false)
  const [navMobile, setNavMobile] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  })


  return (
    <header
      className={`${bg ? 'bg-white shadow-md py-3' : 'bg-none py-5'} w-full fixed right-0 left-0 z-10 transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO */}
        <a>
          <img src={Logo} />
        </a>
        {/* NAV */}
        <div className="hidden lg:flex">
          <Nav />
        </div>
        {/* PROGRAM */}
        <Program />
        {/* NAV MOBILE BUTTON */}
        <div onClick={() => setNavMobile(!navMobile)} className="lg:hidden cursor-pointer">
          <CgMenuRight className="text-blue text-3xl" />
        </div>
        {/* MOBILE NAV */}
        <div className={`${navMobile ? 'max-h-[260px]' : 'max-h-0'} fixed bg-yellow w-full left-0 top-[86px] shadow-lg transition-all overflow-hidden h-full`}>
          <NavMobile />
        </div>
      </div>
    </header>
  )
}

export default Header
