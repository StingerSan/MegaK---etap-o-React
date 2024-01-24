import React from 'react'
import ReactDOM from 'react-dom/client'
import {Participants} from './Participants.jsx'
import {participantsData} from "./data/Participants-Data.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Participants list={participantsData} />
    </React.StrictMode>,
)


