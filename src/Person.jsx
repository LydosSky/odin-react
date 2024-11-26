import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({
    firstName: "john",
    lastName: "doe",
    age: 100,
  });

  const changePerson = function (e) {
    if (e.target.id === "firstName")
      setPerson({ ...person, firstName: e.target.value });
    if (e.target.id === "lastName")
      setPerson({ ...person, lastName: e.target.value });
  };

  return (
    <>
      <h1>{`${person.firstName} ${person.lastName}`}</h1>
      <h2>{person.age}</h2>
      <input
        id="firstName"
        type="text"
        placeholder="FirstName"
        onChange={(e) => changePerson(e)}
      />
      <input
        id="lastName"
        type="text"
        placeholder="LastName"
        onChange={(e) => changePerson(e)}
      />
    </>
  );
}
