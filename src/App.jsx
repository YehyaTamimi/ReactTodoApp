import { useState } from 'react';
import './App.css';


function App() {
    const [value, setValue] = useState("");
    const [todos, setTodos] = useState([]);

    const createCard = () => {
        const text = value.trim();
        if (text === "") {
            return;
        }

        const card = <TodoCard text={text} />
        const copy = [card, ...todos];
        setTodos(copy);
        setValue("");
    }

    return (
        <>
            <div className='hero-image'>
                <div className='hero-container'>
                    <h1>T O D O</h1>
                    <Input value={value} setValue={setValue} createCard={createCard} />
                </div>
            </div>
            {todos.map((todo) => todo)}
        </>
    );
}


const Input = ({ value, setValue, createCard }) => {

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
            <input type="text" placeholder='add a new Todo' className='todo-input' value={value}
                onChange={adjustInput} onKeyDown={HandleEnterPress} />
            <button className='add' onClick={createCard}><i className="fa-regular fa-plus"></i></button>
        </div>
    )
}

const TodoCard = ({ text }) => {
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

export default App;