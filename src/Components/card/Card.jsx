import { useState, useEffect, useRef } from "react";
import "./Card.css"

export default function TodoCard({ text, id, deleteCard }) {
    const [checked, SetChecked] = useState(false);
    const [cardText, setCardText] = useState(text);
    const [inputText, setInputText] = useState(cardText);
    const [edit, setEdit] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (edit && inputRef.current) {
            inputRef.current.focus();
        }
    }, [edit])

    const changeCardState = () => {
        SetChecked(!checked);
    }

    const editText = () => {
        setEdit(!edit);
    }

    const updateInput = (e) => {
        setInputText(e.target.value)
    }

    const discardChanges = (e) => {
        setInputText(cardText);
        setEdit(!edit)
    }

    const saveChanges = (e) => {
        setEdit(!edit);
        if (inputText !== "") {
            setCardText(inputText);
            updateCardHistory();
        } else {
            setInputText(cardText);
        }
    }

    const updateCardHistory = () => {
        const savedCards = JSON.parse(localStorage.getItem("savedCards"));
        const updatedCardsHistory = savedCards.map((card) => {
            if (card.key === id) {
                card.props.text = inputText;
                return card;
            }
            return card;
        });
        localStorage.setItem("savedCards", JSON.stringify(updatedCardsHistory));
    }

    return (
        <div className='card'>
            <label className="container">
                <input type="checkbox" checked={checked} onChange={changeCardState} />
                <span className="checkmark"></span>
            </label>
            {edit ? (<input type='text' className='text-input' value={inputText} onChange={updateInput} ref={inputRef} />) : (<div className='text' onDoubleClick={editText} ><span className={checked ? "crossed" : ""}>{cardText}</span></div>)}
            {edit ?
                (<>
                    <button className='save' onClick={saveChanges}><i className="fa-solid fa-check"></i></button>
                    <button className='discard' onClick={discardChanges}><i className="fa-solid fa-x"></i></button>
                </>)
                :
                (<>
                    <button className='edit' onClick={editText}><i className="fa-solid fa-pen-to-square"></i></button>
                    <button className='delete' onClick={() => deleteCard(id)}><i className="fa-solid fa-trash"></i></button>
                </>)}
        </div>
    )
}