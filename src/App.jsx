import { useEffect, useReducer, useState } from "react";
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
    case "ID":
      return { ...state, id: action.payload };
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
    id: 0,
  });
  const changeHandler = (event, type) => {
    dispatch({ payload: event.target.value, type });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setPeople((prev) => [...prev, state]);
    dispatch({ type: "RESET" });
  };
  const deleteHandler = (id) => {
    setPeople((prev) => prev.filter((item) => item.id !== id));
  };
  useEffect(() => {
    dispatch({
      type: "ID",
      payload: people.length < 1 ? 0 : people[people.length - 1].id + 1,
    });
  }, [people]);
  return (
    <div>
      <Form
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        item={state}
      />
      {people.map((person, index) => (
        <Card
          buttonClick={() => deleteHandler(person.id)}
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
