import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-4  lg:px-32 lg:-mt-16  ">
        {/* card 01 */}
      <div className="card w-full lg:w-80 bg-cyan-500 text-white overflow-hidden transform transition-transform duration-300 hover:scale-110">
        <div className="card-body text-center">
          <h2 className="card-title mx-auto">Professional Staff</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi numquam nemo reiciendis est consequuntur fugiat, a doloribus nobis saepe debitis!</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline text-white">Read More</button>
          </div>
        </div>
      </div>
        {/* card 02 */}
      <div className="card w-full lg:w-80 bg-cyan-600 text-white overflow-hidden transform transition-transform duration-300 hover:scale-110">
        <div className="card-body text-center">
          <h2 className="card-title mx-auto">Professional Staff</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi numquam nemo reiciendis est consequuntur fugiat, a doloribus nobis saepe debitis!</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline text-white">Read More</button>
          </div>
        </div>
      </div>
        {/* card 03 */}
      <div className="card w-full lg:w-80 bg-cyan-500 text-white overflow-hidden transform transition-transform duration-300 hover:scale-110">
        <div className="card-body text-center">
          <h2 className="card-title mx-auto">Professional Staff</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi numquam nemo reiciendis est consequuntur fugiat, a doloribus nobis saepe debitis!</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline text-white">Read More</button>
          </div>
        </div>
      </div>
        {/* card 04 */}
      <div className="card w-full lg:w-80 bg-cyan-600 text-white overflow-hidden transform transition-transform duration-300 hover:scale-110">
        <div className="card-body text-center">
          <h2 className="card-title mx-auto">Professional Staff</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi numquam nemo reiciendis est consequuntur fugiat, a doloribus nobis saepe debitis!</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline text-white">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
