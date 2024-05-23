import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import styles from "./inputStyling.js"
import React from 'react';

export default function Input({ value, setValue, createCard }) {

    const inputStyles = styles();
    const adjustInput = (e) => {
        setValue(e.target.value);
    }

    const HandleEnterPress = (e) => {
        if (e.key === "Enter") {
            createCard();
        }
    }

    return (
        <div className={inputStyles.inputContainer}>
            <TextField
                className={inputStyles.input}
                id="filled-search"
                type="text"
                variant="standard"
                placeholder='add a new Todo'
                value={value}
                onChange={adjustInput} onKeyDown={HandleEnterPress}
                InputProps={{
                    disableUnderline: true 
                  }}

            />
            <IconButton className={inputStyles.add} onClick={createCard} variant="contained"><AddIcon /></IconButton>
        </div>
    )
}
