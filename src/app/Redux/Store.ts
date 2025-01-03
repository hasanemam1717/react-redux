import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Redux/features/counter/counterSlice'
import taskReducer from '../Redux/features/tasks/taskSlice'
// import logger from "./middleware/loger";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: taskReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;
export type RootState = ReturnType<typeof store.getState>