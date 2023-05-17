const { createSlice } = require("@reduxjs/toolkit");
const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
