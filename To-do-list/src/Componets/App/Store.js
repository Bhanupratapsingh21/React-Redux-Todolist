import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from '../Futures/TodoSlice'

export const Store = configureStore({
    reducer : TodoReducer
})