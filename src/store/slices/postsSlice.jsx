import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  posts: [
    {
      id: nanoid(),
      body: 'Hello World!',
      username: 'staticUser',
      created_at: new Date().toISOString(),
      likes: 1,
      dislikes: 0,
      comments: [],
      no_of_comments: 0,
    },
  ],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
    },
    editPost(state, action) {
      const { postId, body } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.body = body;
      }
    },
    deletePost(state, action) {
      const { postId } = action.payload;
      state.posts = state.posts.filter((post) => post.id !== postId);
    },
    addComment(state, action) {
      const { postId, commentBody } = action.payload;
      //  Find the post
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        post.comments.push({
          commentedBy: 'Static User',
          id: nanoid(),
          commentBody: commentBody,
          created_at: new Date().toISOString(),
        });
        post.no_of_comments += 1;
      }
    },
    editComment: (state, action) => {
      const { postId, commentId, body } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        const comment = post.comments.find(
          (comment) => comment.id === commentId,
        );
        if (comment) {
          comment.commentBody = body;
        }
      }
    },

    deleteComment(state, action) {
      const { postId, commentId } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        post.comments = post.comments.filter(
          (comment) => comment.id !== commentId,
        );
        post.no_of_comments -= 1;
      }
    },
    likePost(state, action) {
      const { postId } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        post.likes += 1;
      }
    },
  },
});

export const {
  addPost,
  editPost,
  deletePost,
  addComment,
  editComment,
  deleteComment,
  likePost,
  dislikePost,
} = postsSlice.actions;

export default postsSlice.reducer;
