import React from "react";
import { FaRegClock, FaMobileAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavOptions = () => {
  return (
    <div className="flex flex-col lg:flex-row cursor-pointer gap-6 text-xl font-semibold text-cyan-600">
      <li><Link to='/'>Home</Link></li>
      <li><Link>About Us</Link></li>
      <li><Link>Pages</Link></li>
      <li><Link>Blog/News</Link></li>
      <li><Link>Shop</Link></li>
     
      {/* <div className="flex gap-2 ml-10">
        <div className="icon text-orange-500">
          <h1 className="text-3xl">
            <FaRegClock></FaRegClock>
          </h1>
        </div>
        <div className="time">
          <h1>Monday - Friday 8:00 am - 11:00 pm</h1>
          <p>Saturday and Sunday closed</p>
        </div>
      </div>

    
      <div className="flex gap-2 ml-10">
        <div className="icon  text-orange-500">
          <h1 className="text-3xl">
            <FaMobileAlt></FaMobileAlt>
          </h1>
        </div>
        <div className="contact">
          <h1>+8801816534323</h1>
          <p>office@medicare@gmail.com</p>
        </div>
      </div>
   
      <div className="flex gap-2 ml-10">
        <div className="icon  text-orange-500">
          <h1 className="text-3xl">
            <FaMapMarkerAlt></FaMapMarkerAlt>
          </h1>
        </div>
        <div className="location">
          <h1>27th Avenue</h1>
          <p>Banani Dhaka</p>
        </div>
        <span className="border-b"></span>
      </div> */}
   
        
        
       
      
    </div>
  );
};

export default NavOptions;
