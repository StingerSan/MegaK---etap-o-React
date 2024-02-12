import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import {AgeGuesser} from "../components/AgeGuesser/AgeGuesser.jsx";
// import {Dialog} from "../components/common/Dialog/Dialog.jsx";
// import {ConfirmDialog} from "../components/common/Dialog/ConfirmDialog.jsx";
// import {Form} from "../components/Form/Form.jsx";
// import {ColorBox} from "../components/ColorBox/ColorBox.jsx";
// import {UsersList} from "../UsersList/UsersList.jsx";
// import {people} from "../data/people.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <>
            <AgeGuesser></AgeGuesser>
        </>
    </StrictMode>

)


