import { useReducer, useState } from "react";
import Form from "./components/Form";
import Card from "./components/Card";

const reducer = (state, action) => {
  switch (action.type) {
    case "USERNAME":
      return { ...state, username: action.payload };
    case "EMAIL":
      return { ...state, email: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    case "RESET":
      return { username: "", email: "", password: "" };
    default:
      throw new Error("invalid input or action");
  }
};

function App() {
  const [people, setPeople] = useState([]);
  const [state, dispatch] = useReducer(reducer, {
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (event, type) =>
    dispatch({ payload: event.target.value, type });

  const submitHandler = (e) => {
    e.preventDefault();
    if (state.username !== "" || state.email !== "" || state.password !== "")
      setPeople((prev) => [...prev, state]);
    dispatch({ type: "RESET" });
  };
  return (
    <div>
      <Form
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        item={state}
      />
      {people.map((person, index) => (
        <Card
          key={index}
          username={person.username}
          email={person.email}
          password={person.password}
        />
      ))}
    </div>
  );
}

export default App;
