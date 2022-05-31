import "./App.css";

import CountProvider from "./components/Count";

import Counter from "./components/Counter";
import Mirror from "./components/Mirror";
import Clear from "./components/Clear";

function App() {
  return (
    <div className="zc">
      <CountProvider>
        <Counter />
        <Clear />
        <Mirror />
      </CountProvider>
    </div>
  );
}

export default App;
