import React from 'react';

import PhoneIcon from "../assets/img/phone.svg"

const Program = () => {
  return (
    <div>
      {/* PHONE ICON & PHONE NUMBER */}
      <div className="flex lg:space-x-[10px] items-baseline justify-end">
        <img
          className="h-[28px] w-[28px] lg:h-[34px] lg:w-[34px]"
          src={PhoneIcon}
        />
        <div className="text-blue font-extrabold lg:text-[23px]">+ 1 000 10 84 000</div>
      </div>
      {/* OPENING HOURS */}
      <div className="text-sm">
        {/* SHOW IN DESKTOP */}
        <div className="hidden lg:flex">
          Opening Hours: Mon - Sun: 10am - 6pm
        </div>
        {/* SHOW IN MOBILE */}
        <div className="lg:hidden text-right">
          Mon - Sun: 10am - 6pm
        </div>
      </div>
    </div>
  )
}

export default Program;
