import { useEffect, useState } from "react";

export function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(function () {
    const id = setInterval(function () {
      setCounter((count) => count + 1);
    }, 1000);

    return function () {
      clearInterval(id);
    };
  }, []);

  return <p>{counter} seconds have passed.</p>;
}
