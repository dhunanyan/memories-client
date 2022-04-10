import { PostActionTypes } from "../constants/action.types";

const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case PostActionTypes.FETCH_ALL:
      return action.payload;

    case PostActionTypes.CREATE:
      return [...posts, action.payload];

    case PostActionTypes.UPDATE:
    case PostActionTypes.LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case PostActionTypes.DELETE:
      return posts.filter((post) => post._id !== action.payload);

    case PostActionTypes.LIKE_POST:
      return posts.find((post) => post._id === action.payload).likeCount + 1;

    default:
      return posts;
  }
};

export default postsReducer;
