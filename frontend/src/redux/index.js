import { createSlice } from "@reduxjs/toolkit";
import { getAllTodos, postTodo, deleteTodo, updateTodo } from "./actions";

//import actions from
const initialState = {
  todos: [],
  isEditing: false,
  updateId: null,
};
const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    // addTodo: (state, action) => {
    //oneway of adding to the item
    // return {
    //   ...state,
    //   todos: [...state.todos, action.payload],
    // };
    // state.todos.push(action.payload);
    // },
    // deleteTodo: (state, action) => {
    //new id
    // const id = action.payload;
    // console.log("Id to remove", id);
    // state.todos = state.todos.filter((item) => item.id !== id);
    // },

    editing: (state, action) => {
      state.isEditing = !state.isEditing;
      state.updateId = action.payload;
    },

    // updateTodo: (state, action) => {
    //   //get id of the item to update
    //   // console.log("updated todo", action.payload);
    //   const { id } = action.payload;
    //
    //   //one way of updating the list
    //   const todos = state.todos.filter((item) => item.id !== id);
    //   todos.push(action.payload);
    //   state.todos = todos;
    //   state.isEditing = !state.isEditing;
    //
    //   //second way of updating
    //   /*
    //   const updateIndex = state.todos.findIndex((item) => item.id === id);
    //
    //   if (updateIndex !== -1) {
    //     state.todos[updateIndex] = action.payload;
    //   }
    //   state.isEditing = !state.isEditing;
    //   */
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTodos.fulfilled, (state, action) => {
        const todos = {
          ...state,
          todos: action.payload,
        };
        // console.log(todos);
        return todos;
      })
      .addCase(getAllTodos.rejected, (state, action) => {
        console.log("error");
      })
      .addCase(postTodo.fulfilled, (state, action) => {
        console.log(action.payload);
        // state.todos.push(action.payload);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        console.log("rejected");
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        console.log("deleted");
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        console.log("updated");
      });
  },
});
// export const todoActions = todoSlice.actions;
export const { editing } = todoSlice.actions;
export default todoSlice;