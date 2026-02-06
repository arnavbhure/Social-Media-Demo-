import { createContext, useReducer } from "react";

export const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
    user_ID: "user-9",
  },
  {
    id: "2",
    title: "Paas ho gye bhai",
    body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
    user_ID: "user-2",
  },
  {
    id: "3",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
    user_ID: "user-9",
  },
  {
    id: "4",
    title: "Paas ho gye bhai",
    body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
    user_ID: "user-2",
  },
];

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST,
  );
  const addPost = (user_ID, postTitle, postBody) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        user_ID,
      },
    });
  };

  const deletePost = (postID) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postID,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "DELETE_POST") {
    newPostList = currPostList.fiter((post) => post.id !== action.payload.id);
  }
  return newPostList;
};

export default PostListProvider;
