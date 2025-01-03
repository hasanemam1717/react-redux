import { selectTasks } from "@/app/Redux/features/tasks/taskSlice";
import { AddTask } from "@/components/module/task/AddTask";
import CardTask from "@/components/module/task/CardTask";
import { useSelector } from "react-redux";

const Task = () => {
  const tasks = useSelector(selectTasks);
  return (
    <div>
      <div className="flex justify-between container mx-auto p-2">
        <h1>Task</h1>
        <AddTask></AddTask>
      </div>
      {tasks.map((task) => (
        <CardTask task={task} key={task.id}></CardTask>
      ))}
    </div>
  );
};

export default Task;
