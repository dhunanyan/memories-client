import { PostActionTypes } from "../constants/action.types";

const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case PostActionTypes.FETCH_ALL:
      return action.data;

    case PostActionTypes.CREATE:
      return [...posts, action.data];

    case PostActionTypes.UPDATE:
    case PostActionTypes.LIKE:
      return posts.map((post) =>
        post._id === action.data._id ? action.data : post
      );

    case PostActionTypes.DELETE:
      return posts.filter((post) => post._id !== action.data);

    case PostActionTypes.LIKE_POST:
      return posts.find((post) => post._id === action.data).likeCount + 1;

    default:
      return posts;
  }
};

export default postsReducer;
