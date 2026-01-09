import { createSlice, nanoid } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, email }) {
        return {
          payload: {
            id: nanoid(),
            name,
            email,
          },
        };
      },
    },
    deleteUser(state, action) {
      return state.filter((u) => u.id !== action.payload);
    },
    updateUser(state, action) {
      const user = state.find((u) => u.id === action.payload.id);
      if (user) {
        user.name = action.payload.name;
        user.email = action.payload.email;
      }
    },
  },
});

export const { addUser, deleteUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;
