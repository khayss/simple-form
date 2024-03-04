function Input(props) {
  return (
    <div>
      <label htmlFor={props.for}>{props.label}</label>
      <input type={props.type} value={props.value} onChange={props.onChange} />
    </div>
  );
}

export default Input;
