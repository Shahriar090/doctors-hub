import React, { useEffect } from "react";
import { FaTeeth, FaRegHeart, FaHospitalUser } from "react-icons/fa";
import WorkingHour from "./WorkingHour/WorkingHour";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Category = () => {
  useEffect(() => {
    AOS.init(); // Reinitialize AOS on component mount
  }, []);
  return (
    <div className="flex flex-col lg:flex-row justify-between  lg:px-32 mt-10">
      {/* card 01 */}
      <div className="cards lg:w-3/4" data-aos="zoom-in-up">
        <div className="card w-80 h-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://media.istockphoto.com/id/1343302637/photo/happy-female-assistant-dentist-examining-little-boy-teeth-at-the-clinic.webp?b=1&s=170667a&w=0&k=20&c=-4GyDUt68l2RrsUTKJSzQM4bP6boCIn57fDY7ZtGWhI="
              alt="Dentist img"
            />
          </figure>

          <div className="mx-auto">
            <h1 className="text-5xl  text-pink-400 -mt-6 bg-white border-4 rounded-full border-white">
              <FaTeeth></FaTeeth>
            </h1>
          </div>
          <h1 className="text-center uppercase text-3xl m-3 font-bold">
            Dentist
          </h1>
          <p className="text-xl text-center m-3">
            For your child whitest teeths
          </p>
          <p className="p-5 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            natus voluptatibus quia commodi necessitatibus ad ex inventore quis,
            dolor provident similique magni cum deserunt blanditiis optio
            explicabo nesciunt non. Corporis.
          </p>
        </div>
      </div>
      {/* card 02 */}
      <div className="cards w-3/4"data-aos="flip-down">
        <div className="card w-80 h-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://media.istockphoto.com/id/610227072/photo/stethoscope-with-red-heart-on-a-wood-background.webp?b=1&s=170667a&w=0&k=20&c=KUFFNlF0uxSEGAUmGSGYYusVKVtg1CWixI6a6ySmqGA="
              alt="Heart img"
            />
          </figure>
          <div className="mx-auto">
            <h1 className="text-5xl  text-pink-400 -mt-6 bg-white border-4 rounded-full border-white">
              <FaRegHeart></FaRegHeart>
            </h1>
          </div>
          <h1 className="text-center uppercase text-3xl m-3 font-bold">
            Cardiologist
          </h1>
          <p className="text-xl text-center m-3">Got a broken heart?</p>
          <p className="p-5 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            natus voluptatibus quia commodi necessitatibus ad ex inventore quis,
            dolor provident similique magni cum deserunt blanditiis optio
            explicabo nesciunt non. Corporis.
          </p>
        </div>
      </div>
      {/* card 03 */}
      <div className="cards w-3/4"data-aos="zoom-in-up">
        <div className="card w-80 h-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://media.istockphoto.com/id/1447803707/photo/physiotherapy-neck-pain-and-stretching-with-woman-and-doctor-for-healthcare-chiropractic-or.webp?b=1&s=170667a&w=0&k=20&c=x_EhQEYYp_oPmfSyUDjh909fhbgOoVgsjNe4u7rGMho="
              alt="Chiropractor img"
            />
          </figure>
          <div className="mx-auto">
            <h1 className="text-5xl  text-pink-400 -mt-6 bg-white border-4 rounded-full border-white">
              <FaHospitalUser></FaHospitalUser>
            </h1>
          </div>
          <h1 className="text-center uppercase text-3xl m-3 font-bold">
            Chiropractor
          </h1>
          <p className="text-xl text-center m-3">Neck or back pain?</p>
          <p className="p-5 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            natus voluptatibus quia commodi necessitatibus ad ex inventore quis,
            dolor provident similique magni cum deserunt blanditiis optio
            explicabo nesciunt non. Corporis.
          </p>
        </div>
      </div>
      <WorkingHour></WorkingHour>
    </div>
  );
};

export default Category;
