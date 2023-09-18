import "./Posts.css";
import { PostsData } from "../../data/PostData.js";
import Post from "../Post/Post.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTimelinePosts } from "../../actions/PostAction";
const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    // dispatch(getTimelinePosts(user._id));
  }, []);
  return (
    <div className="Posts">
      {loading
        ? "Fetching..."
        : PostsData.map((post, id) => {
            return <Post data={post} id={id} />;
          })}
    </div>
  );
};

export default Posts;
