import { useState } from "react";

export default function TodoCard ({ text }) {
    const [checked, SetChecked] = useState(false);

    const changeCardState = () => {
        SetChecked(!checked);
    }

    return (
        <div className='card'>
            <label className="container">
                <span className={checked ? "crossed" : ""}>{text}</span>
                <input type="checkbox" checked={checked} onChange={changeCardState} />
                <span className="checkmark"></span>
            </label>
            <button className='edit'><i className="fa-solid fa-pen-to-square"></i></button>
            <button className='delete'><i className="fa-solid fa-trash"></i></button>
        </div>
    )
}