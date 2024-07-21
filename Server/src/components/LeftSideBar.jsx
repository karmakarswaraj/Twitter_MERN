import React from "react";

import { Link } from "react-router-dom";
const LeftSideBar = () => {
  return (
    <div className="flex flex-col items-start h-full pt-4 w-[20%] ml-24 ">
      {/* <Link to="#"> */}
        <div className="flex flex-col items-start justify-between pt-4 ml-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="35"
            height="35"
            color="#fff"
            fill="none"
            className="hover:bg-[#252525] rounded-full"
          >
            <path
              d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      {/* </Link> */}
      <div className="flex flex-col items-start justify-between pt-4 ">
        <div className="flex flex-row items-start gap-6 cursor-pointer hover:bg-[#252525] rounded-full p-3 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            className="text-white group-hover:bg-[#252525]"
            fill="#fff"
          >
            <path
              d="M7.08848 4.76364L6.08847 5.54453C4.57182 6.72887 3.81348 7.32105 3.40674 8.15601C3 8.99097 3 9.95552 3 11.8846V13.9767C3 17.763 3 19.6562 4.17157 20.8325C5.11466 21.7793 6.52043 21.964 9 22V18.0057C9 17.0738 9 16.6078 9.15224 16.2403C9.35523 15.7502 9.74458 15.3609 10.2346 15.1579C10.6022 15.0057 11.0681 15.0057 12 15.0057C12.9319 15.0057 13.3978 15.0057 13.7654 15.1579C14.2554 15.3609 14.6448 15.7502 14.8478 16.2403C15 16.6078 15 17.0738 15 18.0057V22C17.4796 21.964 18.8853 21.7793 19.8284 20.8325C21 19.6562 21 17.763 21 13.9767V11.8846C21 9.95552 21 8.99097 20.5933 8.15601C20.1865 7.32105 19.4282 6.72887 17.9115 5.54453L16.9115 4.76364C14.5521 2.92121 13.3724 2 12 2C10.6276 2 9.44787 2.92121 7.08848 4.76364Z"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xl text-white font-extralight group-hover:bg-[#252525] pr-2">
            Home
          </span>
        </div>
        <div className="flex flex-row items-start gap-6 cursor-pointer hover:bg-[#252525] rounded-full p-3 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
            color="#ffffff"
            fill="none"
            className="text-white group-hover:bg-[#252525]"
          >
            <path
              d="M17.5 17.5L22 22"
              stroke="currentColor" // Uses the current color for the stroke
              strokeWidth="1.5" // Sets the stroke width
              strokeLinecap="round" // Sets the stroke line cap
              strokeLinejoin="round" // Sets the stroke line join
            />
            <path
              d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
              stroke="currentColor" // Uses the current color for the stroke
              strokeWidth="1.5" // Sets the stroke width
              strokeLinejoin="round" // Sets the stroke line join
            />
          </svg>

          <span className="text-xl text-white font-extralight group-hover:bg-[#252525] pr-2">
            Explore
          </span>
        </div>
        <div className="flex flex-row items-start gap-6 cursor-pointer hover:bg-[#252525] rounded-full p-3 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
            color="#ffffff"
            fill="none"
            className="text-white group-hover:bg-[#252525]"
          >
            <path
              d="M2.52992 14.7696C2.31727 16.1636 3.268 17.1312 4.43205 17.6134C8.89481 19.4622 15.1052 19.4622 19.5679 17.6134C20.732 17.1312 21.6827 16.1636 21.4701 14.7696C21.3394 13.9129 20.6932 13.1995 20.2144 12.5029C19.5873 11.5793 19.525 10.5718 19.5249 9.5C19.5249 5.35786 16.1559 2 12 2C7.84413 2 4.47513 5.35786 4.47513 9.5C4.47503 10.5718 4.41272 11.5793 3.78561 12.5029C3.30684 13.1995 2.66061 13.9129 2.52992 14.7696Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 19C8.45849 20.7252 10.0755 22 12 22C13.9245 22 15.5415 20.7252 16 19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xl text-white font-extralight group-hover:bg-[#252525] pr-2">
            Notification
          </span>
        </div>
        <div className="flex flex-row items-start gap-6 cursor-pointer hover:bg-[#252525] rounded-full p-3 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
            color="#ffffff"
            fill="none"
            className="text-white group-hover:bg-[#252525]"
          >
            <path
              d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xl text-white font-extralight group-hover:bg-[#252525] pr-2">
            Messages
          </span>
        </div>
        {/* DUMMY */}
        <div className="flex flex-row items-start gap-6 cursor-pointer hover:bg-[#252525] rounded-full p-3 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
            color="#ffffff"
            fill="none"
            className="text-white group-hover:bg-[#252525]"
          >
            <path
              d="M2.5 12C2.5 7.77027 2.5 5.6554 3.69797 4.25276C3.86808 4.05358 4.05358 3.86808 4.25276 3.69797C5.6554 2.5 7.77027 2.5 12 2.5C16.2297 2.5 18.3446 2.5 19.7472 3.69797C19.9464 3.86808 20.1319 4.05358 20.302 4.25276C21.5 5.6554 21.5 7.77027 21.5 12C21.5 16.2297 21.5 18.3446 20.302 19.7472C20.1319 19.9464 19.9464 20.1319 19.7472 20.302C18.3446 21.5 16.2297 21.5 12 21.5C7.77027 21.5 5.6554 21.5 4.25276 20.302C4.05358 20.1319 3.86808 19.9464 3.69797 19.7472C2.5 18.3446 2.5 16.2297 2.5 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M8 17.5L16 7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-xl text-white font-extralight group-hover:bg-[#252525] pr-2">
            Grok
          </span>
        </div>
        <div className="flex flex-row items-start gap-6 cursor-pointer hover:bg-[#252525] rounded-full p-3 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
            color="#ffffff"
            fill="none"
            className="text-white group-hover:bg-[#252525]"
          >
            <path
              d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xl text-white font-extralight group-hover:bg-[#252525] pr-2">
            Bookmarks
          </span>
        </div>
        <div className="flex flex-row items-start gap-6 cursor-pointer hover:bg-[#252525] rounded-full p-3 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
            color="#ffffff"
            fill="none"
            className="text-white group-hover:bg-[#252525]"
          >
            <path
              d="M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M15 11C17.2091 11 19 9.20914 19 7C19 4.79086 17.2091 3 15 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 14H7C4.23858 14 2 16.2386 2 19C2 20.1046 2.89543 21 4 21H14C15.1046 21 16 20.1046 16 19C16 16.2386 13.7614 14 11 14Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M17 14C19.7614 14 22 16.2386 22 19C22 20.1046 21.1046 21 20 21H18.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xl text-white font-extralight group-hover:bg-[#252525] pr-2">
            Communities
          </span>
        </div>
        <div className="flex flex-row items-start gap-6 cursor-pointer hover:bg-[#252525] rounded-full p-3 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
            color="#ffffff"
            fill="none"
            className="text-white group-hover:bg-[#252525]"
          >
            <path
              d="M2.50012 12C2.50012 7.52166 2.50012 5.28249 3.89136 3.89124C5.28261 2.5 7.52178 2.5 12.0001 2.5C16.4785 2.5 18.7176 2.5 20.1089 3.89124C21.5001 5.28249 21.5001 7.52166 21.5001 12C21.5001 16.4783 21.5001 18.7175 20.1089 20.1088C18.7176 21.5 16.4785 21.5 12.0001 21.5C7.52178 21.5 5.28261 21.5 3.89136 20.1088C2.50012 18.7175 2.50012 16.4783 2.50012 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.00012 17L11.1937 12.8065M17.0001 7L12.8066 11.1935M12.8066 11.1935L9.7779 7H7.00012L11.1937 12.8065M12.8066 11.1935L17.0001 17H14.2223L11.1937 12.8065"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xl text-white font-extralight group-hover:bg-[#252525] pr-2">
            Premium
          </span>
        </div>
        <div className="flex flex-row items-start gap-6 cursor-pointer hover:bg-[#252525] rounded-full p-3 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
            color="#ffffff"
            fill="none"
            className="text-white group-hover:bg-[#252525]"
          >
            <path
              d="M8.62814 12.6736H8.16918C6.68545 12.6736 5.94358 12.6736 5.62736 12.1844C5.31114 11.6953 5.61244 11.0138 6.21504 9.65083L8.02668 5.55323C8.57457 4.314 8.84852 3.69438 9.37997 3.34719C9.91142 3 10.5859 3 11.935 3H14.0244C15.6632 3 16.4826 3 16.7916 3.53535C17.1007 4.0707 16.6942 4.78588 15.8811 6.21623L14.8092 8.10188C14.405 8.81295 14.2029 9.16849 14.2057 9.45952C14.2094 9.83775 14.4105 10.1862 14.7354 10.377C14.9854 10.5239 15.3927 10.5239 16.2074 10.5239C17.2373 10.5239 17.7523 10.5239 18.0205 10.7022C18.3689 10.9338 18.5513 11.3482 18.4874 11.7632C18.4382 12.0826 18.0918 12.4656 17.399 13.2317L11.8639 19.3523C10.7767 20.5545 10.2331 21.1556 9.86807 20.9654C9.50303 20.7751 9.67833 19.9822 10.0289 18.3962L10.7157 15.2896C10.9826 14.082 11.1161 13.4782 10.7951 13.0759C10.4741 12.6736 9.85877 12.6736 8.62814 12.6736Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xl text-white font-extralight group-hover:bg-[#252525] pr-2">
            Verified Orgs
          </span>
        </div>
        <div className="flex flex-row items-start gap-6 cursor-pointer hover:bg-[#252525] rounded-full p-3 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
            color="#ffffff"
            fill="none"
            className="text-white group-hover:bg-[#252525]"
          >
            <path
              d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <span className="text-xl text-white font-extralight group-hover:bg-[#252525] pr-2">
            Profile
          </span>
        </div>
        <div className="flex flex-row items-start gap-6 cursor-pointer hover:bg-[#252525] rounded-full p-3 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
            color="#ffffff"
            fill="none"
            className="text-white group-hover:bg-[#252525]"
          >
            <path
              d="M11.9959 12H12.0049"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.9998 12H16.0088"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.99981 12H8.00879"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <span className="text-xl text-white font-extralight group-hover:bg-[#252525] pr-2">
            More
          </span>
        </div>

        <div className="w-full pt-9">
          <button className="w-full px-4 py-3 font-bold text-white bg-blue-500 rounded-3xl hover:bg-blue-600 group">
            <span className="bg-blue-500 group-hover:bg-blue-600">Post</span>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default LeftSideBar;
