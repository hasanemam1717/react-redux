import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <div className="container mx-auto mt-3 ">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Task Manager</h1>
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
};

export default Navbar;
