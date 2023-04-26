import React from 'react';

import Logo from "../assets/img/logo-white.svg"

import { social } from "../data"

const Footer = () => {
  return (
    <footer className="bg-orange py-8 lg:py-4">
      <div className="container mx-auto">
        <div className="flex flex-col text-white items-center justify-between gap-y-6 lg:flex-row">
          {/* LOGO */}
          <a href="#">
            <img src={Logo} />
          </a>
          {/* COPYRIGHT TEXT */}
          <div className="text-[15px]">&copy; Copyright 2023. All rights reserved.</div>
          {/* SOCIALS */}
          <div className="flex space-x-4">
            {social.map((item, index) => {
              return (
                <a href={item.href} key={index}>
                  <div className="w-10 h-10 bg-[#fe8d71a9] hover:bg-[#FE8D71] rounded-full text-2xl flex items-center justify-center transition">{item.icon}</div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
