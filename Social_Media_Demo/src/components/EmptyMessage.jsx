import { useContext } from "react";
import { PostList } from "../store/post-store";
import style from "./EmptyMessageClass.module.css";

export const EmptyMessage = ({ activeSection }) => {
  const { postList, addPosts } = useContext(PostList);

  const handleOnClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
      });
  };

  if (activeSection === "home" && postList.length === 0) {
    return (
      <div className={style.MessageFlex}>
        <div className={style.EmptyMessageClass}>
          <h2>Post List is Empty!!</h2>
          <p>Create Post To View them here...</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleOnClick()}
          >
            Fetch Post
          </button>
        </div>
      </div>
    );
  }
  return null;
};
