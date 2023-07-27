import React from "react";
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
AOS.init();

const TeamCards = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mt-6 p-6 lg:p-0">
      {/* card 01 */}
      <div className="card w-full lg:w-80 bg-base-100 shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-110" data-aos="fade-up-right">
        <figure>
          <img
            src="https://media.istockphoto.com/id/1436148451/photo/smiling-female-doctor-with-digital-tablet-standing-at-isolated-grey-background.webp?b=1&s=170667a&w=0&k=20&c=4Hau31tIdo2MGlWZ0p-CXU9VGsUu1W8SLdQ6SE773Gk="
            alt="Doctor img"
          />
        </figure>
        <div className="pl-3">
          <div className="text-3xl mt-1 flex gap-1 text-cyan-500    rounded-full ">
            <FaLinkedin></FaLinkedin>
            <FaFacebook></FaFacebook>
            <FaTwitter></FaTwitter>
          </div>
        </div>
        <div className="p-3">
          <h1 className="text-3xl font-bold">Sussie Wolff</h1>
          <h2 className="text-xl mt-2">Pediatrician</h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>{" "}
            Amet reiciendis similique quam optio doloribus magni.
          </p>
        </div>

        <div className="flex gap-2 justify-end p-3 text-xl">
          <FaFacebook></FaFacebook>
          <FaTwitter></FaTwitter>
          <FaGoogle></FaGoogle>
        </div>
      </div>
      {/* card 02 */}
      <div className="card w-full lg:w-80 bg-base-100 shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-110" data-aos="flip-up">
        <figure>
          <img
            src="https://media.istockphoto.com/id/1421939647/photo/female-doctor-smiles-for-hospital-publicity-photo.jpg?s=612x612&w=0&k=20&c=FAINAUMboxBM_0dUd64s-8_57M8a5GxZQ3vj9sWtI5Y="
            alt="Doctor img"
          />
        </figure>
        <div className="pl-3">
          <div className="text-3xl mt-1 flex gap-1 text-cyan-500    rounded-full ">
            <FaLinkedin></FaLinkedin>
            <FaFacebook></FaFacebook>
            <FaTwitter></FaTwitter>
          </div>
        </div>
        <div className="p-3">
          <h1 className="text-3xl font-bold">Ashley Willson</h1>
          <h2 className="text-xl mt-2">Dental surgeon</h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>{" "}
            Amet reiciendis similique quam optio doloribus magni.
          </p>
        </div>

        <div className="flex gap-2 justify-end p-3 text-xl">
          <FaFacebook></FaFacebook>
          <FaTwitter></FaTwitter>
          <FaGoogle></FaGoogle>
        </div>
      </div>
      {/* card 03 */}
      <div className="card w-full lg:w-80 bg-base-100 shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-110" data-aos="flip-up">
        <figure>
          <img
            src="https://media.istockphoto.com/id/1390000431/photo/shot-of-a-mature-doctor-using-a-digital-tablet-in-a-modern-hospital.jpg?s=612x612&w=0&k=20&c=ofnikeDwvLhhEvLpSuQME5kWclGchqUKSHQFdQ4mcWo="
            alt="Doctor img"
          />
        </figure>
        <div className="pl-3">
          <div className="text-3xl mt-1 flex gap-1 text-cyan-500    rounded-full ">
            <FaLinkedin></FaLinkedin>
            <FaFacebook></FaFacebook>
            <FaTwitter></FaTwitter>
          </div>
        </div>
        <div className="p-3">
          <h1 className="text-3xl font-bold">Gabriela Beckett</h1>
          <h2 className="text-xl mt-2">Cosmetic Surgeon</h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>{" "}
            Amet reiciendis similique quam optio doloribus magni.
          </p>
        </div>

        <div className="flex gap-2 justify-end p-3 text-xl">
          <FaFacebook></FaFacebook>
          <FaTwitter></FaTwitter>
          <FaGoogle></FaGoogle>
        </div>
      </div>
      {/* card 04 */}
      <div className="card w-full lg:w-80 bg-base-100 shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-110" data-aos="fade-up-left">
        <figure>
          <img
            src="https://media.istockphoto.com/id/1416945607/photo/portrait-of-a-doctors-intern-in-the-university-building.jpg?s=612x612&w=0&k=20&c=EJd8PElKT_x8AFKQFtE5NguFiPuOJe1-VO_rIGgxnl0="
            alt="Doctor img"
          />
        </figure>
        <div className="pl-3">
          <div className="text-3xl mt-1 flex gap-1 text-cyan-500    rounded-full ">
            <FaLinkedin></FaLinkedin>
            <FaFacebook></FaFacebook>
            <FaTwitter></FaTwitter>
          </div>
        </div>
        <div className="p-3">
          <h1 className="text-3xl font-bold">Georgia Button</h1>
          <h2 className="text-xl mt-2">General Doctor</h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>{" "}
            Amet reiciendis similique quam optio doloribus magni.
          </p>
        </div>

        <div className="flex gap-2 justify-end p-3 text-xl">
          <FaFacebook></FaFacebook>
          <FaTwitter></FaTwitter>
          <FaGoogle></FaGoogle>
        </div>
      </div>
    </div>
  );
};

export default TeamCards;
