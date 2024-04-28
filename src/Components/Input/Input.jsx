import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import "./Input.css"


export default function Input({ value, setValue, createCard }) {

    const adjustInput = (e) => {
        setValue(e.target.value);
    }

    const HandleEnterPress = (e) => {
        if (e.key === "Enter") {
            createCard();
        }
    }

    return (
        <div className='input-container'>
            <TextField
                className='input'
                id="filled-search"
                type="text"
                variant="standard"
                placeholder='add a new Todo'
                value={value}
                onChange={adjustInput} onKeyDown={HandleEnterPress}

            />
            <IconButton className="add" onClick={createCard} variant="contained"><AddIcon /></IconButton>
        </div>
    )
}
