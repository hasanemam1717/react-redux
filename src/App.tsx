import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
} from "./app/Redux/features/counter/counterSlice";
import { RootState } from "./app/Redux/Store";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const disPatch = useDispatch();
  return (
    <>
      <div>
        <h1>To do app with React and redux</h1>
        <div>{count}</div>
        <button onClick={() => disPatch(increment())}>increment</button>
        <button onClick={() => disPatch(decrement())}>decrement</button>
      </div>
    </>
  );
}

export default App;
