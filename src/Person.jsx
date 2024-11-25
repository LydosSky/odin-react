import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });
  const [value, setValue] = useState("");

  const handleIncreaseAge = () => {
    setPerson((prevPerson) => ({ ...prevPerson, age: person.age + 1 }));
    setPerson((prevPerson) => ({ ...prevPerson, age: person.age + 1 }));
  };

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase Age</button>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}
