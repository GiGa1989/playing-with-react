const UserPost = ({ post }: { post: any }) => {
  console.log('Rendering UserPost component');

  return (
    <div className="my-1 flex-row-left">
      <h4 id={post.title} className="px-2 font-sm font-bold">
        {post.title}
      </h4>
    </div>
  );
};

export default UserPost;
// export default memo(UserPost);
