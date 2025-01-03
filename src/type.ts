export interface ITask {
    id: string,
    title: string,
    description: string,
    dueDate: string,
    isCompleted: false,
    priority: "HIGH" | "LOW"
}