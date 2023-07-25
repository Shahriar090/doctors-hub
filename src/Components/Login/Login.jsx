import React from "react";


const Login = () => {
  return (
    <div className="lg:pt-40">
      <div className="hero relative min-h-screen bg-fixed bg-[url('https://media.istockphoto.com/id/1437830105/photo/cropped-shot-of-a-female-nurse-hold-her-senior-patients-hand-giving-support-doctor-helping.webp?b=1&s=170667a&w=0&k=20&c=QKtLmZz60KaA8cxpmt1ChfpyUArzC_MRfqoYZaOUDAQ=')] bg-no-repeat bg-cover bg-center bg-white">
        <div className="effect absolute inset-0 bg-gradient-to-r from-cyan-600 to-transparent">
        <div className="hero-content lg:w-full flex-col mx-auto pt-20">
          <div className="text-center lg:text-left">
            {/* <h1 className="text-5xl font-bold text-cyan-500 m-10">Login Here</h1> */}
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm border-2  bg-transparent opacity-95">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-white">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline text-white">Login</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
