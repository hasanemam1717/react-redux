import { cn } from "@/lib/utils";
import { ITask } from "@/type";

interface IProps {
  task: ITask;
}
const CardTask = ({ task }: IProps) => {
  console.log(task);
  return (
    <div>
      <div>
        <div className="flex  border-2 p-4  justify-between container mx-auto">
          <div className="flex p-4 gap-3 items-center">
            <h1
              className={cn("size-3 rounded-full ", {
                "bg-green-500": task.priority === "HIGH",
                "bg-yellow-500": task.priority === "LOW",
              })}
            ></h1>
            <h1>{task.priority}</h1>
          </div>
          <div className="flex gap-5">
            <h1>Title:{task.title}</h1>
            <h1>Description :{task.description}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTask;
