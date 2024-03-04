import Input from "./Input";

function Form(props) {
  return (
    <div>
      <form onSubmit={(e) => props.submitHandler(e)}>
        <Input
          label="username"
          for="username"
          type="text"
          value={props.item.username}
          onChange={(e) => props.changeHandler(e, "USERNAME")}
        />
        <Input
          label="email"
          for="email"
          type="email"
          value={props.item.email}
          onChange={(e) => props.changeHandler(e, "EMAIL")}
        />
        <Input
          label="password"
          for="password"
          type="password"
          value={props.item.password}
          onChange={(e) => props.changeHandler(e, "PASSWORD")}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default Form;
