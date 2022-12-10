import React from "react";
import profileImg from "../../../../asset/profile/profile-pic.png";

const ProfileCard = () => {
  return (
    <div className="card sticky top-0  shadow-xl">
      <figure className=" pt-10">
        <img
          src={profileImg}
          alt="profile-pic"
          className="rounded-full h-28 w-28 "
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Md. Zahid Hasan</h2>
        <p>Junior Front-End Developer</p>
      </div>
    </div>
  );
};

export default ProfileCard;
