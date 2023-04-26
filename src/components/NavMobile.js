import React from 'react'

import { navigation } from "../data"

const NavMobile = () => {
  return (
    <nav className="h-full">
      <ul className="h-full flex flex-col justify-center items-center space-y-5">
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <a
                className="capitalize text-blue font-medium"
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavMobile
