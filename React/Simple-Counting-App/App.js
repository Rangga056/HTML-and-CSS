import "./App.css";
import { useCount } from "./useCount";

function App() {
  const {count, increase, decrease, restart} = useCount(0);

  return (
      <div className="App">
        <span>{count}</span>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={restart}>Restart</button>
      </div>
  );
}

export default App;
