import { useContext } from "react";
import style from "./PostContainerCss.module.css";
import { PostList } from "../store/post-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className={`${style.post} card`}>
      <div className={`card-body ${style.CardBody}`}>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deletePost(post.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;
