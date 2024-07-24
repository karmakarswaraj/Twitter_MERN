import React from "react";
import Avatar from "react-avatar";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div className="w-[60%] h-full mr-10">
      <div className="flex items-center gap-5 m-1">
        <Link to="/" className="p-2 rounded-full hover:bg-[#121212] group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={20}
            height={20}
            color={"#ffffff"}
            fill={"none"}
            className="group-hover:bg-[#121212]"
          >
            <path
              d="M3.99982 11.9998L19.9998 11.9998"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <span className="text-white ">
          <h2 className="text-2xl font-bold">Profile</h2>
          <h3 className="text-sm text-slate-400">10 posts</h3>
        </span>
      </div>
      <div className=" h-[200px] overflow-hidden cursor-pointer">
        {/* BG IMAGE */}
        <img
          src="https://pbs.twimg.com/profile_banners/2805096672/1709489899/1500x500"
          alt=""
        />
      </div>
      <div className=" -mt-[80px] px-4 ">
        <div className="flex-row items-center space-x-1 ">
          <div className=" w-[120px] h-[120px] rounded-full border-4 border-black overflow-hidden cursor-pointer">
            {/* PROFILE IMAGE */}
            <Avatar
              size="120"
              round={true}
              src="https://pbs.twimg.com/profile_images/1764354967023054848/QbHkg____400x400.jpg"
            />
          </div>
          <div className="flex-1 mt-4 ">
            <h2 className="text-xl font-bold text-white">Username</h2>
            <p className="text-sm text-slate-400 text-muted-foreground">
              @username
            </p>
          </div>
        </div>
      </div>
      <div className="absolute flex top-56 ml-[700px] mt-16">
        <button className="px-4 py-2 font-bold text-white border rounded-3xl hover:bg-[#121212]">
          Edit Profile
        </button>
      </div>
      <span >
        <p className="pt-2 pl-4 text-white">A passionate Coder from India.</p>
      </span>
      <span className="flex text-sm text-slate-400 ">
        <p className="pt-2 pl-4 cursor-pointer hover:underline">50 Following</p>
        <p className="pt-2 pl-4 cursor-pointer hover:underline">70 Followers</p>
      </span>
      <div className="grid grid-cols-1 gap-6 mt-8"></div>
    </div>
  );
};

export default Profile;
