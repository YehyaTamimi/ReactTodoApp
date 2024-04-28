import { useState, useEffect, useRef } from "react";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from "./cardStyling.js"


export default function TodoCard({ text, id, deleteCard }) {
    const [checked, SetChecked] = useState(false);
    const [cardText, setCardText] = useState(text);
    const [inputText, setInputText] = useState(cardText);
    const [edit, setEdit] = useState(false);
    const inputRef = useRef(null);
    
    const cardStyles = styles();

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
        <Card className={cardStyles.card}>
            <CardContent sx={{ display: "flex", justifyContent: "space-around", padding: "0", paddingBottom: "0" }}>
                <label className={cardStyles.container}>
                    <input type="checkbox" checked={checked} onChange={changeCardState} />
                    <span className={cardStyles.checkmark}></span>
                </label>
                {edit ? (
                    <input type='text' className={cardStyles.textInput} value={inputText} onChange={updateInput} ref={inputRef} />
                ) : (
                    <div className={cardStyles.text} onDoubleClick={editText}>
                        <span className={checked ? cardStyles.crossed : ""}>{cardText}</span>
                    </div>
                )}

                {edit ? (
                    <>
                        <IconButton className={cardStyles.save} onClick={saveChanges} color="success">
                            <CheckIcon />
                        </IconButton>
                        <IconButton className={cardStyles.discard} onClick={discardChanges} color="error">
                            <CloseIcon />
                        </IconButton>
                    </>
                ) : (
                    <>
                        <IconButton className={cardStyles.edit} onClick={editText} color="success">
                            <EditIcon />
                        </IconButton>
                        <IconButton className={cardStyles.delete} onClick={() => deleteCard(id)} color="error">
                            <DeleteIcon />
                        </IconButton>
                    </>
                )}
            </CardContent>
        </Card>
    )
}