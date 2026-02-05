import style from "./PostContainerCss.module.css";

const Post = () => {
  return (
    <div className={`${style.post} card`}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </p>
      </div>
    </div>
  );
};

export default Post;
