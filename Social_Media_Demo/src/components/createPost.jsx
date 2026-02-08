import { useContext, useRef } from "react";
import style from "../components/createPost.module.css";
import { PostList } from "../store/post-store";

const CreatePost = () => {
  const PostTitleElement = useRef();
  const PostBodyElement = useRef();
  const User_ID = useRef();
  const reactions = useRef();
  const tags = useRef();
  const { addPost } = useContext(PostList);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const userID = User_ID.current.value;
    const post_Title = PostTitleElement.current.value;
    const postBody = PostBodyElement.current.value;
    const Tags = tags.current.value.split(" ");
    const Reactions = reactions.current.value;
    addPost(userID, post_Title, postBody, Tags, Reactions);

    PostBodyElement.current.value = "";
    PostTitleElement.current.value = "";
    User_ID.current.value = "";
    reactions.current.value = "";
    tags.current.value = "";
  };

  return (
    <>
      <div className={style.FormFlex}>
        <form
          className={style.FormClass}
          onSubmit={(event) => handleOnSubmit(event)}
        >
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className={`form-label ${style.CreatePostStyle}`}
            >
              User ID
            </label>
            <input
              type="text"
              className="form-control"
              id="UserID"
              ref={User_ID}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className={`form-label ${style.CreatePostStyle}`}
            >
              Post Heading
            </label>
            <input
              type="text"
              className="form-control"
              id="PostTitle"
              aria-describedby="emailHelp"
              ref={PostTitleElement}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="PostContent"
              className={`form-label ${style.CreatePostStyle}`}
            >
              Post Content
            </label>
            <textarea
              className="form-control"
              id="exampleInputPassword1"
              style={{ height: "6rem" }}
              ref={PostBodyElement}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className={`form-label ${style.CreatePostStyle}`}
            >
              Number of Reactions
            </label>
            <input
              type="number"
              className="form-control"
              id="reactions"
              ref={reactions}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className={`form-label ${style.CreatePostStyle}`}
            >
              Tags (separate with space)
            </label>
            <input type="text" className="form-control" id="tags" ref={tags} />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
