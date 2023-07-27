import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 mt-6">
        {/* card 01 */}
      <div className="card w-full p-8 lg:w-80 bg-cyan-500 text-white overflow-hidden transform transition-transform duration-300 hover:scale-110">
        <div className="card-body text-center">
          <h2 className="card-title mx-auto text-2xl lg:text-3xl font-bold">Professional Staff</h2>
          <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi numquam nemo reiciendis est consequuntur fugiat, a doloribus nobis saepe debitis!</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline text-white btn-sm lg:btn-md">Read More</button>
          </div>
        </div>
      </div>
        {/* card 02 */}
      <div className="card w-full p-8 lg:w-80 bg-cyan-600 text-white overflow-hidden transform transition-transform duration-300 hover:scale-110">
        <div className="card-body text-center">
          <h2 className="card-title mx-auto text-2xl lg:text-3xl font-bold">Affordable Prices</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi numquam nemo reiciendis est consequuntur fugiat, a doloribus nobis saepe debitis!</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline text-white btn-sm lg:btn-md">View PriceList</button>
          </div>
        </div>
      </div>
        {/* card 03 */}
      <div className="card w-full p-8 lg:w-80 bg-cyan-500 text-white overflow-hidden transform transition-transform duration-300 hover:scale-110">
        <div className="card-body text-center">
          <h2 className="card-title mx-auto text-2xl lg:text-3xl font-bold">Insurance partners</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi numquam nemo reiciendis est consequuntur fugiat, a doloribus nobis saepe debitis!</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline text-white btn-sm lg:btn-md">Read More</button>
          </div>
        </div>
      </div>
        {/* card 04 */}
      <div className="card w-full p-8 lg:w-80 bg-cyan-600 text-white overflow-hidden transform transition-transform duration-300 hover:scale-110">
        <div className="card-body text-center">
          <h2 className="card-title mx-auto text-2xl lg:text-3xl font-bold">Consult our doctors</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi numquam nemo reiciendis est consequuntur fugiat, a doloribus nobis saepe debitis!</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline text-white btn-sm lg:btn-md">Choose A Doctor</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
