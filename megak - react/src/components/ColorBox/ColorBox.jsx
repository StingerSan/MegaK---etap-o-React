import './ColorBox.css'
import {useState} from "react";

export const ColorBox = props => {

    const [backgroundColor, setBackgroundColor] = useState('#ff0000')

    return <>
        <div className="ColorBox__box" style={{backgroundColor}}/>
        <div>
            <select
                value={backgroundColor}
                onChange={event => setBackgroundColor(event.target.value)}
            >
                <option value="#ff0000">Red</option>
                <option value="#00ff00">Green</option>
                <option value="#0000ff">Blue</option>
            </select>
        </div>
        <div>
            <input
                type="color"
                value={backgroundColor}
                onChange={event => setBackgroundColor(event.target.value)}
            />
        </div>
    </>
}
