import "./Posts.css";
import { PostsData } from "../../data/PostData.js";
import Post from "../Post/Post.jsx";
const Posts = () => {
  return (
    <div className="Posts">
      {PostsData.map((post, id) => {
        return <Post data={post} id={id} />;
      })}
    </div>
  );
};

export default Posts;
