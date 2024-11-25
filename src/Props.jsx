const ListItem = props => <li>{props.animal}</li>

export function List(props) {
  if (!props.animals)
    return <div>Loading...</div>

  if (props.animals.length === 0)
    return <div>There are no animals in the list!</div>

  return <ul>{
    props.animals.map((animal) =>
      animal.startsWith("L") && <ListItem key={animal} animal={animal} />)
  }</ul>
}


