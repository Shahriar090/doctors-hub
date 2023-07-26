import React from "react";
import bannerImg from "../../../assets/banner.jpg"
import bannerImg2 from "../../../assets/bannerImg2.jpg"

const Banner = () => {
  return (
    <div className="pt-0 lg:pt-40 ">
      <div
        className="hero min-h-screen bg-fixed relative"
        style={{
          backgroundImage: `url(${bannerImg2})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase inline-grid">Welcome To <span className="text-green-600">Green </span>View Hospital</h1>
            <p className="mb-5">
            Providing compassionate healthcare services since 1985. Our dedicated team of medical professionals is committed to delivering the highest quality patient care and promoting wellness within the community.
            </p>
            <button className="btn btn-outline text-white border-green-600">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
