import { useCount } from "./Count";

export default function Counter() {
  const { count, setCount } = useCount();

  return (
    <div className="zc">
      <p>Contador: {count}</p>
      <button className="azedo" onClick={() => setCount(count + 1)}>Acrescentar</button>
    </div>
  );
}
