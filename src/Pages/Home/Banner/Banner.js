import React from "react";

const Banner = () => {
  return (
    <div
      className=" hero "
      style={{
        backgroundImage: `url("https://img.freepik.com/free-vector/white-laptop-tablet-phone-with-blank-screen_107791-1814.jpg?w=2000")`,
      }}
    >
      <div className="hero-overlay bg-opacity-10 "></div>
      <div className="hero-content  text-black">
        <div className="py-20">
          <h1 className="mb-5 text-5xl font-bold">I'm Zahid Hasan</h1>
          <p className="mb-5">Junior Front-End Web Development</p>
          <button className="btn btn-outline bg-white">Download Resume</button>
        </div>
        <div>
          <img src="" alt="" />
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
