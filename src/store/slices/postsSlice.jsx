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
    },
    {
      id: nanoid(),
      body: 'Hello CodionsLab!',
      username: 'Sohail Arham',
      created_at: new Date().toISOString(),
      likes: 5,
      dislikes: 0,
      comments: [],
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
      prepare(body) {
        return {
          payload: {
            id: nanoid(),
            body,
            username: 'staticUser',
            created_at: new Date().toISOString(),
            comments: [],
            likes: 0,
            dislikes: 0,
          },
        };
      },
    },
    editPost(state, action) {
      const { id, body } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.body = body;
      }
    },
    deletePost(state, action) {
      const { id } = action.payload;
      state.posts = state.posts.filter((post) => post.id !== id);
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
      }
    },
    likePost(state, action) {
      const { id } = action.payload;
      const post = state.posts.find((post) => post.id === id);
      if (post) {
        post.likes += 1;
      }
    },
    dislikePost(state, action) {
      const { id } = action.payload;
      const post = state.posts.find((post) => post.id === id);
      if (post) {
        post.dislikes += 1;
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
