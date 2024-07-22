import React from "react";
import Avatar from "react-avatar";
const RightSideBar = () => {
  return (
    <div className="w-[20%] pt-5">
      <div className="flex items-center gap-1 p-2 bg-gray-800 rounded-full outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          color="#ffffff"
          fill="none"
          className="bg-gray-800"
        >
          <path
            d="M17.5 17.5L22 22"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
        </svg>
        <input
          type="text"
          className="w-full text-white bg-gray-800 outline-none"
          placeholder="Search"
        />
      </div>
      <div className="mt-5">
        <div>
          <p className="text-white">People you may know</p>
        </div>

        <div className="p-4 text-white">
          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center gap-2">
              <Avatar
                src="https://pbs.twimg.com/profile_images/1764354967023054848/QbHkg____400x400.jpg"
                size="30"
                round={true}
              />
              <span className="font-bold cursor-pointer">@cricketcomau</span>
            </div>
            <button className="px-3 py-2 text-black bg-white rounded-full">
              Follow
            </button>
          </div>
          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center gap-2">
              <Avatar
                src="https://pbs.twimg.com/profile_images/1764354967023054848/QbHkg____400x400.jpg"
                size="30"
                round={true}
              />
              <span className="font-bold cursor-pointer">@cricketcomau</span>
            </div>
            <button className="px-3 py-2 text-black bg-white rounded-full">
              Follow
            </button>
          </div>
          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center gap-2">
              <Avatar
                src="https://pbs.twimg.com/profile_images/1764354967023054848/QbHkg____400x400.jpg"
                size="30"
                round={true}
              />
              <span className="font-bold cursor-pointer">@cricketcomau</span>
            </div>
            <button className="px-3 py-2 text-black bg-white rounded-full">
              Follow
            </button>
          </div>
          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center gap-2">
              <Avatar
                src="https://pbs.twimg.com/profile_images/1764354967023054848/QbHkg____400x400.jpg"
                size="30"
                round={true}
              />
              <span className="font-bold cursor-pointer">@cricketcomau</span>
            </div>
            <button className="px-3 py-2 text-black bg-white rounded-full">
              Follow
            </button>
          </div>
          
        </div>
        <div>
          <p className="text-blue-500 cursor-pointer">see more...</p>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
