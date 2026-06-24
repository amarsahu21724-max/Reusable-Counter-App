import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="app">
      <h1 className="heading">Reusable Counter App</h1>

      <Counter title="Counter One" initialValue={0} step={1} />
      <Counter title="Counter Two" initialValue={5} step={5} />
      <Counter title="Counter Three" initialValue={10} step={10} />
    </div>
  );
}

export default App;