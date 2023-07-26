import React from "react";
import { FaClock, FaPlus } from "react-icons/fa";

const LatestNews = () => {
  return (
    <div className="p-20">
      <div className="text-center mt-14 mb-10">
        <h1 className="text-3xl uppercase font-bold">Latest News</h1>
        <span className="divider w-1/2 mx-auto"></span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>{" "}
          Dicta ut eius quaerat eos! Animi corporis neque expedita reiciendis
          voluptas doloribus!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {/* card 01 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://media.istockphoto.com/id/891577642/photo/female-doctor-holding-a-stetoschope-in-her-hands.jpg?s=612x612&w=0&k=20&c=WfNhLjKBP3OTNefnEJeDVzdzaVpSUNlxsgoXH3hLLro="
              alt="Doc img"
            />
          </figure>
          <div className=" bg-cyan-500 h-[40px] w-[40px] rounded-full ml-3">
            <h1 className="text-2xl text-white ml-2 mt-2">
              <FaPlus></FaPlus>
            </h1>
          </div>
          <div className="parent flex gap-2 ml-6 mt-5">
            <div className="icon">
              <FaClock></FaClock>
            </div>
            <div className="time">
              <p>October 12, 2022</p>
            </div>
          </div>

          <div className="heading ml-6 mt-5">
            <h1 className="text-2xl font-bold">
              2015 Best USA Hospitals and Clinics
            </h1>
          </div>
          <div className=" p-6">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              necessitatibus accusamus vero quo, magni saepe officiis cum!
              Deleniti, numquam inventore! Cumque voluptatem atque repellat
              debitis deleniti hic, odit est provident, a quas, facere nesciunt
              at reiciendis nostrum doloremque exercitationem ex!
            </p>
          </div>
        </div>
        {/* card 02 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://media.istockphoto.com/id/1370358685/photo/multicolored-pills-scattered-from-white-plastic-medicine-container.jpg?s=612x612&w=0&k=20&c=zknrVfCELovlvvXKrAlWKLnFLfkMQF8nh9k2d97pJkE="
              alt="Doc img"
            />
          </figure>
          <div className=" bg-cyan-500 h-[40px] w-[40px] rounded-full ml-3">
            <h1 className="text-2xl text-white ml-2 mt-2">
              <FaPlus></FaPlus>
            </h1>
          </div>
          <div className="parent flex gap-2 ml-6 mt-5">
            <div className="icon">
              <FaClock></FaClock>
            </div>
            <div className="time">
              <p>February 22, 2021</p>
            </div>
          </div>

          <div className="heading ml-6 mt-5">
            <h1 className="text-2xl font-bold">
            Are drugs the best solution?
            </h1>
          </div>
          <div className=" p-6">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              necessitatibus accusamus vero quo, magni saepe officiis cum!
              Deleniti, numquam inventore! Cumque voluptatem atque repellat
              debitis deleniti hic, odit est provident, a quas, facere nesciunt
              at reiciendis nostrum doloremque exercitationem ex!
            </p>
          </div>
        </div>
        {/* card 03 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://media.istockphoto.com/id/617382548/photo/business-woman-touching-the-pulse-screen.webp?b=1&s=170667a&w=0&k=20&c=OH12AI0ZWrNJeCRPIYpaMuBmnpsUlUh5VSR23zZrHas="
              alt="Doc img" className="h-[280px]"
            />
          </figure>
          <div className=" bg-cyan-500 h-[40px] w-[40px] rounded-full ml-3">
            <h1 className="text-2xl text-white ml-2 mt-2">
              <FaPlus></FaPlus>
            </h1>
          </div>
          <div className="parent flex gap-2 ml-6 mt-5">
            <div className="icon">
              <FaClock></FaClock>
            </div>
            <div className="time">
              <p>July 12, 2022</p>
            </div>
          </div>

          <div className="heading ml-6 mt-5">
            <h1 className="text-2xl font-bold">
            Negative statin stories add to heart health risk
            </h1>
          </div>
          <div className=" p-6">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              necessitatibus accusamus vero quo, magni saepe officiis cum!
              Deleniti, numquam inventore! Cumque voluptatem atque repellat
              debitis deleniti hic, odit est provident, a quas, facere nesciunt
              at reiciendis nostrum doloremque exercitationem ex!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
