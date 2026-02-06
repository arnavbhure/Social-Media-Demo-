import Post from "./Post";
import style from "./PostContainerCss.module.css";
import { DEFAULT_POST_LIST } from "../store/post-store";

const PostContainer = () => {
  return (
    <div className={style.postContainerFlex}>
      {DEFAULT_POST_LIST.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostContainer;
