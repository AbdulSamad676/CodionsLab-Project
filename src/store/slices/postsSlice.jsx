import { createSlice, nanoid } from '@reduxjs/toolkit';
import { db } from '../../firebase';
// import { createSlice, nanoid } from '@reduxjs/toolkit';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// checking from gpt:
export const addPost = (postData) => async (dispatch) => {
  console.log('✅ PostData in Slice', postData);

  try {
    // Add post to Firestore
    const docRef = await addDoc(collection(db, 'posts'), postData);
    // Dispatch the action with the payload
    dispatch(addPostSuccess({ ...postData, id: docRef.id }));
  } catch (error) {
    console.error('Error adding post:', error);
    // Handle error
  }
};

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
    // addPost: {
    //   reducer(state, action) {
    //     state.posts.push(action.payload);
    //   },
    // },
    addPostSuccess(state, action) {
      state.posts.push(action.payload);
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
  addPostSuccess,
  editPost,
  deletePost,
  addComment,
  editComment,
  deleteComment,
  likePost,
  dislikePost,
} = postsSlice.actions;

export default postsSlice.reducer;
