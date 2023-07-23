import React from 'react';
import { FaRegClock, FaMobileAlt, FaMapMarkerAlt  } from 'react-icons/fa';
 const NavOptions = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-6'>
            {/* time and date */}
            <div className="flex gap-2 ml-10">
        <div className="icon text-orange-500">
            <h1 className="text-3xl"><FaRegClock></FaRegClock></h1>
        </div>
        <div className="time">
            <h1>Monday - Friday 8:00 am - 11:00 pm</h1>
            <p>Saturday and Sunday closed</p>
            <p>Saturday and Sunday closed</p>
        </div>
      </div>

        {/* contact */}
      <div className="flex gap-2 ml-10">
        <div className="icon  text-orange-500">
            <h1 className="text-3xl"><FaMobileAlt></FaMobileAlt></h1>
        </div>
        <div className="contact">
            <h1>+8801816534323</h1>
            <p>office@medicare@gmail.com</p>
        </div>
      </div>
        {/* location */}
      <div className="flex gap-2 ml-10">
        <div className="icon  text-orange-500">
            <h1 className="text-3xl"><FaMapMarkerAlt></FaMapMarkerAlt></h1>
        </div>
        <div className="location">
            <h1>27th Avenue</h1>
            <p>Banani Dhaka</p>
        </div>
      </div>
        </div>
    );
};

export default NavOptions;