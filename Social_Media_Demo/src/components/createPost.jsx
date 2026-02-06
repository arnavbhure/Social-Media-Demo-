import style from "../components/createPost.module.css";

const CreatePost = () => {
  return (
    <>
      <div className={style.FormFlex}>
        <form className={style.FormClass}>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className={`form-label ${style.CreatePostStyle}`}
            >
              Post Heading
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className={`form-label ${style.CreatePostStyle}`}
            >
              Post Content
            </label>
            <textarea
              className="form-control"
              id="exampleInputPassword1"
              style={{ height: "10rem" }}
            />
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
