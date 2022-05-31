import { useCount } from "./Count";

export default function Clear() {
  const { setCount } = useCount();

  return (
    <div className="zc">
      <button onClick={() => setCount(0)}>Zerar</button>
    </div>
  );
}