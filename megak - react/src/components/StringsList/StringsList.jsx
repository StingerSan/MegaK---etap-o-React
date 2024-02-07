export function StringsList(props)  {

  const string = [...props.list, props.list.length].join(', ')
  console.log(string)
  return <p>{string}</p>
}


