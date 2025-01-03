import { ITask } from "@/type";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../Store";
interface IinitialState {
    tasks: ITask[]
}
const initialState: IinitialState = {
    tasks: [
        {
            id: "0001",
            title: "Initialize frontend",
            description: "Create home and routing page .",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "HIGH"
        },
        {
            id: "0002",
            title: "Create github repo",
            description: "Create home and routing page .",
            dueDate: "2025-12",
            isCompleted: false,
            priority: "LOW"
        }
    ]
}

const todoSlice = createSlice({
    name: "task",
    initialState,
    reducers: {

    }


})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks
}
export default todoSlice.reducer