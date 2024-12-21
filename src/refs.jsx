import { useRef, useEfffect } from "react";

function ButtonComponent() {
  const buttonRef = useRef(null);

  useEfffect(() => {
    buttonRef.current.focus();
  }, []);

  return <button ref={buttonRef}>Click Me!</button>;
}
