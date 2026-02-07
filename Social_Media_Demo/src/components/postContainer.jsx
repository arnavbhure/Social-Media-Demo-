import Post from "./Post";
import style from "./PostContainerCss.module.css";
import { PostList } from "../store/post-store";
import { useContext } from "react";

const PostContainer = () => {
  const { postList } = useContext(PostList);
  return (
    <div className={style.postContainerFlex}>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostContainer;
