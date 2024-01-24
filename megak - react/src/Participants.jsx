import {StringsList} from "./StringsList.jsx";
import {RecordsCount} from "./RecordsCount.jsx";

export const Participants = props => {
  const names = props.list
      .map(person => person.name)

  return (
    <>
        <StringsList list={names}/>
        <RecordsCount count={names.length}/>
    </>
  )
}


