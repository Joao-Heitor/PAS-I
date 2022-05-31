import React from "react";

import { useCount } from "./Count";

export default function Mirror() {
  const { count } = useCount();

  return (
    <div className="zc">
      <p>Espelho: {count}</p>
    </div>
  );
}
