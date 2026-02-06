import style from "./PostContainerCss.module.css";

const Post = ({ post }) => {
  return (
    <div className={`${style.post} card`}>
      <div className={`card-body ${style.CardBody}`}>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
      </div>
    </div>
  );
};

export default Post;
