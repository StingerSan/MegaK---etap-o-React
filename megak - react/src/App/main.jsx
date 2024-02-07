import React from 'react'
import ReactDOM from 'react-dom/client'
import {UsersList} from "../UsersList/UsersList.jsx";
import {people} from "../data/people.jsx";



ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <UsersList users={people}/>

    </>

)


