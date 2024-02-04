export function EmailList(props)  {
  const email = props.list.join(', ')
  console.log(email)
  return <p>{email}</p>
}


