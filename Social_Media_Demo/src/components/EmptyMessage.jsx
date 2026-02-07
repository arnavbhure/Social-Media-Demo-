import { useContext } from "react";
import { PostList } from "../store/post-store";
import style from "./EmptyMessageClass.module.css";

export const EmptyMessage = ({ activeSection }) => {
  const { postList } = useContext(PostList);
  if (activeSection === "home" && postList.length === 0) {
    return (
      <div className={style.MessageFlex}>
        <div className={style.EmptyMessageClass}>
          <h2>Post List is Empty!!</h2>
          <p>Create Post To View them here...</p>
        </div>
      </div>
    );
  }
  return null;
};
