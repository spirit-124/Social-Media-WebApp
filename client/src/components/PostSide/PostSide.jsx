import PostShare from "../PostShare/PostShare";
import Posts from "../posts/Posts";
import "./PostSide";

const PostSide = () => {
  return (
    <>
      <div className="PostSide">
        <PostShare />
        <Posts />
      </div>
    </>
  );
};

export default PostSide;
