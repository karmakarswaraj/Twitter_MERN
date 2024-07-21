import React from "react";
import Avatar from "react-avatar";
const Tweet = () => {
  return (
    <div className="pb-5 mb-5 text-white border rounded">
      <div className="flex items-center p-4 pb-2">
        <div>
          <Avatar
            src="https://pbs.twimg.com/profile_images/1764354967023054848/QbHkg____400x400.jpg"
            size="30"
            round={true}
          />
        </div>
        <div className="flex gap-2 ml-3">
            <h2>Username</h2>
            <p>@username</p>
        </div>
      </div>

      <div className="pl-12 pr-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quo illo esse aliquam eveniet est impedit vel iusto laborum quis ipsum sit voluptatibus modi sint, nulla dolorem veritatis suscipit sed harum temporibus earum, nam, rerum at. Temporibus, inventore nobis. Veniam quam inventore sit blanditiis sequi quod iste voluptate hic sint?
      </div>
    </div>
  );
};

export default Tweet;
