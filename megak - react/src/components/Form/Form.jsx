import {useState} from "react";

export const Form = props => {

    const [firstName, setFirstName] = useState('')

    const sendForm = e => {
        e.preventDefault()
        console.log(firstName)
    }

    return <>
        <form onSubmit={sendForm}>
            <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={e => setFirstName(e.target.value.toUpperCase())}
            />
            <p>You've entered {firstName.length} characters</p>
            <button type="submit">Save</button>
        </form>
    </>
};
