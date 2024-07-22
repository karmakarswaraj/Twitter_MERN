import React from "react";
import Avatar from "react-avatar";
const Tweet = () => {
  return (
    <div className="pb-5 mb-5 text-white border-b border-gray-700">
      <div className="flex items-center p-4 pb-2 ">
        <div className="cursor-pointer">
          <Avatar
            src="https://pbs.twimg.com/profile_images/1764354967023054848/QbHkg____400x400.jpg"
            size="30"
            round={true}
          />
        </div>
        <div className="flex gap-2 ml-3 cursor-pointer ">
          <h2 className="hover:underline">Username</h2>
          <p>@username</p>
        </div>
      </div>

      <div className="pl-12 pr-4">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus nisi culpa illum porro amet. Atque consectetur
          molestias nostrum perferendis dignissimos corrupti delectus velit
          aperiam omnis vero mollitia veritatis eaque impedit et cumque,
          inventore magni praesentium consequatur placeat accusantium similique
          unde? Praesentium atque, placeat eligendi quis unde natus aliquam
          dolor accusantium.
        </div>

        <div className="flex items-center justify-center gap-40 pt-4">
          <div className="flex items-center gap-2 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              color="#ffffff"
              fill="none"
              className="rounded-full hover:bg-red-700"
            >
              <path
                d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <span className="rounded-full">10</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              color="#ffffff"
              fill="none"
              className="rounded-full hover:bg-blue-600"
            >
              <path
                d="M8 13.5H16M8 8.5H12"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <span>10</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              color="#ffffff"
              fill="none"
              className="rounded-full hover:bg-blue-600"
            >
              <path
                d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>10</span>
          </div>
          <div className="flex items-center gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              color="#ffffff"
              fill="none"
              className="rounded-full hover:bg-blue-600"
            >
              <path
                d="M11.922 4.79004C16.6963 3.16245 19.0834 2.34866 20.3674 3.63261C21.6513 4.91656 20.8375 7.30371 19.21 12.078L18.1016 15.3292C16.8517 18.9958 16.2267 20.8291 15.1964 20.9808C14.9195 21.0216 14.6328 20.9971 14.3587 20.9091C13.3395 20.5819 12.8007 18.6489 11.7231 14.783C11.4841 13.9255 11.3646 13.4967 11.0924 13.1692C11.0134 13.0742 10.9258 12.9866 10.8308 12.9076C10.5033 12.6354 10.0745 12.5159 9.21705 12.2769C5.35111 11.1993 3.41814 10.6605 3.0909 9.64127C3.00292 9.36724 2.97837 9.08053 3.01916 8.80355C3.17088 7.77332 5.00419 7.14834 8.6708 5.89838L11.922 4.79004Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
            </svg>
            <p> 10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
