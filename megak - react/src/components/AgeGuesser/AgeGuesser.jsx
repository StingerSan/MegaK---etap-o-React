import React, {useEffect, useState} from "react";

export const AgeGuesser = props => {
    const [age, setAge] = useState(null)

    useEffect(async () => {
        const res = await fetch('https://api.agify.io/?name=Stinger');
        const data = await res.json();
        setAge(data.age);
    },[])

    if (age === null) {
        return <p>Wczytywanie...</p>;
    }
    return <>
        <p>Twój wiek: {age}</p>
        <p>Twoja data urodzenia: {new Date().getFullYear() - age}</p>
    </>
}
