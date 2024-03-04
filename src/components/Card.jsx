
function Card(props) {
  return (
    <div>
      <h1>{props.username}</h1>
      <p>{props.email}</p>
      <p>{props.password}</p>
    </div>
  )
}

export default Card
