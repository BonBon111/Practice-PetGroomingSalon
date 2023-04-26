import React from 'react'

import DogImg from "../assets/img/dogs/dog-appointment.png"

const Appointment = () => {
  return (
    <section className="bg-yellow-secondary min-h-[548px] py-12 lg:mt-32 lg:pb-12">
      <div className="container mx-auto">
        {/* IMAGE */}
        <div className="w-full max-w-[790px] mx-auto justify-center hidden lg:flex">
          <img src={DogImg} />
        </div>
        {/* FORM */}
        <form className="bg-yellow py-8 px-6 w-full max-w-[790px] h-[500px] mx-auto lg:-mt-5 rounded-[60px] text-center flex flex-col justify-start items-center space-y-4">
          <h2 className="h2">Get an appointment</h2>
          <input
            className="input-control"
            placeholder="Full name"
            type="text"
          />
          <input
            className="input-control"
            placeholder="Email address"
            type="text"
          />
          <input
            className="input-control"
            placeholder="Phone number"
            type="text"
          />
          <button className="btn w-full max-w-[514px]">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Appointment
