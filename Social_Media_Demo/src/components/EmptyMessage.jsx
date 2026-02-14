import { useContext, useState } from "react";
import { PostList } from "../store/post-store";
import style from "./EmptyMessageClass.module.css";
import Spinner from "./Spinner";

export const EmptyMessage = ({ activeSection }) => {
  const { postList, addPosts } = useContext(PostList);
  const [loading, setLoading] = useState(false);

  const handleOnClick = async () => {
    try {
      setLoading(true);

      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();

      addPosts(data.posts);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  if (activeSection === "home" && postList.length === 0) {
    return (
      <div className={style.MessageFlex}>
        <div className={style.EmptyMessageClass}>
          <h2>Post List is Empty!!</h2>
          <p>Create Post To View them here...</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleOnClick}
          >
            Fetch Post
          </button>
        </div>
      </div>
    );
  }

  return null;
};
