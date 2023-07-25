import React from "react";

const Location = () => {
  return (
    <>
    <h1 className="text-3xl font-bold uppercase text-center text-cyan-400 m-5">Find Us On Google Map</h1>
    <span className="divider w-1/2 mx-auto"></span>
    <div className="max-w-screen-xl mx-auto m-3">
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/912922882/vector/vector-city-map-of-hong-kong-with-well-organized-separated-layers.jpg?s=612x612&w=0&k=20&c=aGfHaoxlL5XUqm52hesXu75feyPvB9C1v9AxSkqpKFo=)",
        }}
      >
        {/* <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div> */}
      </div>
    </div></>
  );
};

export default Location;
