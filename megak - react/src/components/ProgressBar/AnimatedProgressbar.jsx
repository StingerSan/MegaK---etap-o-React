import React, {useEffect, useState} from 'react';
import {Progressbar} from "./Progressbar.jsx";

export const AnimatedProgressbar = props => {
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() =>{

            setPercentage(percentage => percentage + 1)

        }, 16)

        return () => clearInterval(intervalId)
    }, []);

    return <Progressbar percentage={percentage}/>
}
