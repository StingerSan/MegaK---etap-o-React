import {StringsList} from "./StringsList.jsx";
import {RecordsCount} from "./RecordsCount.jsx";
import {EmailList} from "./EmailList.jsx";
import {useState} from "react";

export const Participants = props => {
    const [thingsToDo, setThingsToDo] = useState('do lodówki')

    setTimeout(() => {
        setThingsToDo('zjeść...')
    }, 5000)

  return (
    <>
        {thingsToDo}
    </>
  )
}


