import React, { useEffect, useState } from 'react'

import { bundleData } from "../data"

import Bundles from "./Bundles"

const Prices = () => {
  const [index, setIndex] = useState(0)
  const [bundles, setBundles] = useState([])

  useEffect(() => {
    setBundles(bundleData[0].services)
  }, [])

  const getBundle = (name) => {
    const newBundles = bundleData.find((bundle) => {
      return bundle.name === name
    })
    setBundles(newBundles.services)
  }

  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto">
        {/* TEXT */}
        <div className="text-center mb-20">
          <div className="text-orange font-semibold mb-3">Our Prices</div>
          <h2 className="h2 mb-3">How Big Your Dog is?</h2>
          <p className="text-lg text-blue">Choose your dog category</p>
        </div>
        {/* GRID */}
        <div className="grid grid-cols-4 gap-4 lg:gap-[30px]">
          {bundleData.map((item, idx) => {
            const { dogCategory, name, image } = item
            return (
              <div
                onClick={() => {
                  setIndex(idx)
                  getBundle(name)
                }}
                className="cursor-pointer text-center"
                key={idx}
              >
                <div className="mb-2 lg:mb-8 hover:scale-105 transition-all duration-300">
                  <img className="w-full" src={image.type} />
                </div>
                <h3 className="lg:text-2xl text-blue font-semibold capitalize lg:mb-2">{name}</h3>
                <div className={`${index === idx ? 'relative border-b-4 border-orange after:lg:h-5 after:lg:w-5 after:lg:bg-triangle after:lg:bg-no-repeat after:lg:block after:lg:absolute after:lg:-bottom-[28px] after:lg:left-[60px]' : 'border-b-4 border-transparent'} pb-4 mb-12`}>
                  <div className="capitalize hidden lg:block">{dogCategory}</div>
                </div>
              </div>
            )
          })}
        </div>
        <Bundles bundles={bundles} />
      </div>
    </section>
  )
}

export default Prices
