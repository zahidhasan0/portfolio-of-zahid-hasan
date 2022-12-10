import React from "react";

const Banner = () => {
  return (
    <div
      className=" hero "
      style={{
        backgroundImage: `url("")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">I'm Zahid Hasan</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-outline">Download Resume</button>
        </div>
      </div>
    </div>
    // <div className="ml-12">
    //   <h4 className="text-5xl">
    //     I'm <span className="font-bold">Zahid Hasan</span>,
    //     <br />
    //     <span>
    //       A Junior Front-End
    //       <br /> <span className="font-bold">Web Developer</span>
    //     </span>
    //   </h4>
    //   <button className="btn btn-outline">Download Resume</button>
    // </div>
  );
};

export default Banner;
