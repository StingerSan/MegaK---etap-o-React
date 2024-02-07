import {StringsList} from "../StringsList/StringsList.jsx";
import {RecordsCount} from "../RecordsCount/RecordsCount.jsx";
import {EmailList} from "../EmailList/EmailList.jsx";
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


