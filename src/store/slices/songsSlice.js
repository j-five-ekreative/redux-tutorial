import { createSlice } from '@reduxjs/toolkit';

const paginate = (array, page, perPage) => {
  return array.slice((page - 1) * perPage, page * 10);
};

export const songsSlice = createSlice({
  name: 'songs',
  initialState: {
    list: [],
    isLoading: true,
    pagination: {
      list: [],
      perPage: 10,
      currentPage: 1,
      totalCount: 0,
      totalPages: 1,
    },
  },
  reducers: {
    setReduxSongs: (state, event) => {
      state.list = event.payload.list;
      state.isLoading = false;
      state.pagination.totalPages = Math.ceil(
        state.pagination.totalCount / state.pagination.perPage
      );
      state.pagination.currentPage = Number(event.payload.page);
      state.pagination.totalCount = event.payload.list.length;
      state.pagination.list = paginate(
        state.list,
        state.pagination.currentPage,
        state.pagination.perPage
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { setReduxSongs } = songsSlice.actions;

export default songsSlice.reducer;
