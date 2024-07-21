import React from 'react';
import CreatePost from './CreatePost';
import Tweet from './Tweet';

const Feed = () => {
  return (
    <div className='w-[60%] h-full '>
      <CreatePost />
      <Tweet/>
      <Tweet/>
    </div>
  );
};

export default Feed;
