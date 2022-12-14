import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getPosts = createAsyncThunk(
  'counter/fechPosts',
  async (_, { dispatch }) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    dispatch({ payload: posts });
  }
);

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state, action) => {
      state.loading = true;
      // state.error = null;
      // state.posts = []
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      (state.loading = false), (state.posts = action.payload);
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.error = action.payload;
      state.posts = [];
    });
  },
});

// Action creatore functions that takes(optional) payload as argument
export const { increment, decrement } = counterSlice.actions;

// State selector function
export const countSelector = (state) => state.counter.value;
export const postsSelector = (state) => state.counter.posts;

// Reducer function
export default counterSlice.reducer;
