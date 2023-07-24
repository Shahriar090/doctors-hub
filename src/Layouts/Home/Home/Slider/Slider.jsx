import React from "react";
import { FaHospitalUser, FaMobileAlt } from "react-icons/fa";

const Slider = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://media.istockphoto.com/id/513438487/photo/doctors-and-nurses-smiling-in-hospital-hallway.jpg?s=612x612&w=0&k=20&c=Gqv61wGBPSBWciA2x6MdcEcHtGe3VxZG7-62bopf63E="
          className="w-full"
        />

        <div className="absolute top-1/3 left-48 lg:left-60 transform -translate-y-1/2 -translate-x-1/2 w-96">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl hidden lg:block font-bold mb-4 text-black">
                YOU AND <span className="text-green-600">YOUR DOCTOR</span>
              </h1>
              <p className="text-xs mt-32 lg:text-xl text-white bg-slate-500 opacity-50 lg:m-6 p-8 rounded-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores aperiam aliquam porro neque tempora dignissimos quo
                doloribus, at possimus culpa optio nobis explicabo modi minus
                voluptatem accusamus beatae, fuga rem laborum sit reprehenderit
                aut eos inventore hic. Sit, vel sed.
              </p>
              <div className="flex gap-8 mt-16 lg:mt-10 lg:ml-6 px-4 ">
                <div className="checkups flex">
                  <div className="text-l lg:text-3xl text-orange-600">
                    <FaHospitalUser></FaHospitalUser>
                  </div>
                  <div className="ml-2 text-xs">
                    <h2>Regular CheckUps</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="checkups flex">
                  <div className="text-l lg:text-3xl text-orange-600">
                    <FaMobileAlt></FaMobileAlt>
                  </div>
                  <div className="ml-2 text-xs">
                    <h2>Always Available</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-l from-black opacity-50"></div>
      </div>

      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://media.istockphoto.com/id/1406496671/photo/psychiatrist-or-professional-psychologist-counseling-or-therapy-session-to-male-patients.webp?b=1&s=170667a&w=0&k=20&c=fQ5bWxNAqf586tibxHmHRMuTJADArA_6oz1jjxElGeE="
          className="w-full"
        />

        <div className="absolute top-1/3 left-60 transform -translate-y-1/2 -translate-x-1/2 w-96">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4 text-black">
                YOU AND <span className="text-green-600">YOUR DOCTOR</span>
              </h1>
              <p className="text-xl text-white bg-slate-500 opacity-50 m-6 p-8 rounded-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores aperiam aliquam porro neque tempora dignissimos quo
                doloribus, at possimus culpa optio nobis explicabo modi minus
                voluptatem accusamus beatae, fuga rem laborum sit reprehenderit
                aut eos inventore hic. Sit, vel sed.
              </p>
              <div className="flex gap-8 mt-10 ml-6 ">
                <div className="checkups flex">
                  <div className="text-3xl text-orange-600">
                    <FaHospitalUser></FaHospitalUser>
                  </div>
                  <div className="ml-2">
                    <h2>Regular CheckUps</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="checkups flex">
                  <div className="text-3xl text-orange-600">
                    <FaMobileAlt></FaMobileAlt>
                  </div>
                  <div className="">
                    <h2>Always Available</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-l from-black opacity-50"></div>
      </div>
    </div>
  );
};

export default Slider;
