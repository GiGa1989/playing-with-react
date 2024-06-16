import React from 'react';

import UserPost from './UserPost';

const UserPostsList = ({
  userPosts,
  deletePost,
}: {
  userPosts: any;
  deletePost: any;
}) => {
  console.log('Rendering UserPostsList component');

  return (
    <div className="px-1">
      {userPosts.map((post: any) => (
        <div key={post.id} className="my-1 box flex-row">
          <UserPost post={post} />
          <button
            className="btn btn-danger"
            data-post-id={post.id}
            data-post_ttitle={post.title}
            onClick={deletePost}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default React.memo(UserPostsList);
