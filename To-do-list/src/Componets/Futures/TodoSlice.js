import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {id : "1" ,  Tittle : "Hello" , Description : "" , Duedate : "Not Set" , Priority : "High" }
    ]
};

const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('todos');
        if (serializedState === null) {
            return initialState;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return initialState;
    }
};

const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('todos', serializedState);
    } catch (err) {
        console.log("error in saveing contact dev about it ")
    }
};

export const TodoSlice = createSlice({
    name: 'Todo',
    initialState: loadStateFromLocalStorage(),
    reducers: {
        addtodo: (state, action) => {
            const { Tittle, Description, Priority, Duedate } = action.payload;
            const newTodo = {
                id: nanoid(),
                Tittle,
                HasCompleted: false,
                Description,
                Priority,
                Duedate
            };
            state.todos.push(newTodo);
            saveStateToLocalStorage(state);
        },
        removetodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            saveStateToLocalStorage(state);
        },
        togglehasdone: (state, action) => {
            state.todos = state.todos.map(todo =>
                todo.id === action.payload ? { ...todo, HasCompleted: !todo.HasCompleted } : todo
            );
            saveStateToLocalStorage(state);
        },
        Edittodo: (state, action) => {
            const { id, ...updatedTodo } = action.payload;
            state.todos = state.todos.map(todo =>
                todo.id === id ? { ...todo, ...updatedTodo } : todo
            );
            saveStateToLocalStorage(state);
        },
    }
});

export const { addtodo, removetodo, togglehasdone, Edittodo } = TodoSlice.actions;
export default TodoSlice.reducer;
