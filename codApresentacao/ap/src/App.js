import "./App.css";

import CountProvider from "./components/Count";

import Counter from "./components/Counter";
import Mirror from "./components/Mirror";

function App() {
  return (
    <div className="zc">
      <CountProvider>
        <Counter />
        <Mirror />
      </CountProvider>
    </div>
  );
}

export default App;
