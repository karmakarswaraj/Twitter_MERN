import React from "react";
import {
  FaImage as ImageIcon,
  FaVideo as VideoIcon,
  FaGift as GiftIcon,
} from "react-icons/fa";
import Avatar from "react-avatar";

const CreatePost = () => {
  return (
    <div className="flex flex-col items-start h-full pl-3 pr-3">
      {/* Tabs Menu */}
      <div className="flex items-center justify-around w-full gap-20 pt-4 pb-3 border-gray-700">
        <div className=" m-auto text-xl text-white cursor-pointer font-extralight px-24  hover:bg-[#121212] rounded-full pb-2">
          For you
        </div>
        <div className=" m-auto text-xl text-white cursor-pointer font-extralight px-24  hover:bg-[#121212] rounded-full pb-2">
          Following
        </div>
      </div>

      {/* Tweet Box */}
      <div className="w-full max-w-4xl p-4 pt-0 bg-black rounded-lg shadow-md">
        <div className="flex flex-row ">
          <div>
            <Avatar
              src="https://pbs.twimg.com/profile_images/1764354967023054848/QbHkg____400x400.jpg"
              size="50"
              round={true}
            />
          </div>
          <div className="w-full p-4 pt-0 bg-black rounded-lg">
            <textarea
              placeholder="What's happening?"
              className="p-3 text-white bg-[#0e0e0e] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              rows={3}
            />
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                <span className="font-medium">280</span> characters left
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-500 rounded-full hover:bg-[#121212]">
                  <ImageIcon className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-500 rounded-full hover:bg-[#121212]">
                  <VideoIcon className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-500 rounded-full hover:bg-[#121212]">
                  <GiftIcon className="w-5 h-5" />
                </button>
                <button className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
