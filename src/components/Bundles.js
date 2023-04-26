import React from 'react'

import { BsCheckCircleFill } from "react-icons/bs"

const Bundle = ({ bundles }) => {
  return (
    <div className="grid grid-col md:grid-cols-3 gap-[30px]">
      {bundles.map((bundle, index) => {
        const { name, price, list } = bundle
        return (
          <div className="bg-white text-center w-full shadow-primary h-[630px] md:h-[800px] lg:h-[650px] py-12 px-8 rounded-[60px]" key={index}>
            {/* PRICE */}
            <div className="text-5xl font-bold text-blue mb-4">$ {price}</div>
            {/* NAME */}
            <div className="capitalize mb-12 text-blue font-medium">{name}</div>
            {/* LIST */}
            <div className="flex flex-col space-y-4 max-w-[250px] mx-auto">
              {list.map((item, index) => {
                return (
                  <div className="flex items-center gap-x-3" key={index}>
                    <BsCheckCircleFill className="text-orange w-4 h-4" />
                    <div className="capitalize">{item}</div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Bundle
