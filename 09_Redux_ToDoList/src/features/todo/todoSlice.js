import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[
        {
            id : 1,
            text : "Hello world"
        }
    ]
}


export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addTodo : (state, action) => {

            const todo = {
                id : nanoid(),
                text : action.payload
            }
            
            if (todo.text) state.todos.push(todo);
        },

        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo)=> action.payload != todo.id);
        },
    }
})


export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;