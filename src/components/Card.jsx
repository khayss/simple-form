
function Card(props) {
  return (
    <div>
      <h1>{props.username}</h1>
      <p>{props.email}</p>
      <button onClick={props.buttonClick}>DELETE</button>
    </div>
  )
}

export default Card
