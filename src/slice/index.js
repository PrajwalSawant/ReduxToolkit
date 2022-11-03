import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    userList: [],
    selectedUser: {},
  },
  reducers: {
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
});
export const { setUserList, setSelectedUser } = UserSlice.actions;
export default UserSlice.reducer;
