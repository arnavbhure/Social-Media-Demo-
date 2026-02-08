import { createContext, useReducer } from "react";

const currPostList = [];

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addPosts: () => {},
});

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    currPostList,
  );
  const addPost = (user_ID, postTitle, postBody, tags, reactions) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        user_ID,
        tags,
        reactions,
      },
    });
  };

  const addPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
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
    <PostList.Provider value={{ postList, addPost, deletePost, addPosts }}>
      {children}
    </PostList.Provider>
  );
};

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postID,
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    return action.payload.posts;
  }
  return newPostList;
};

export default PostListProvider;
