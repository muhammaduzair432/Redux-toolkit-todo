import { createSlice,nanoid } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: "todos",
    initialState: { todos: [{ id: 1, text: "Sample Todo" }] },
    reducers: {
        addTodo: (state, action) => {
            const todo= { id: nanoid(), text: action.payload };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload);
        }

    }
    })
    export const {addTodo,removeTodo}=TodoSlice.actions;
    export default TodoSlice.reducer;
