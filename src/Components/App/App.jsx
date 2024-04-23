import { useCallback, useState, useEffect } from 'react';
import './App.css';

import TodoCard from '../card/Card';
import Input from '../Input/Input';


function App() {
    const [value, setValue] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(() => loadSavedCards(), []);
    
    const loadSavedCards = () => {
        const savedCards = JSON.parse(localStorage.getItem("savedCards"));
        let cards;
        if (savedCards) {
           cards = savedCards.map((card) => {
                return <TodoCard key={card.key} id={card.key} text={card.props.text} deleteCard={deleteCard} />
            });
            setTodos(cards);
        }
    }


    const deleteCard = (id) => {
        setTodos((prevTodos) => {
            const copyTodos = [...prevTodos];
            const filteredTodos = copyTodos.filter((todo) => todo.key !== id);
            return filteredTodos;
        });

        const savedCards = JSON.parse(localStorage.getItem("savedCards"));
        const filteredHistory = savedCards.filter((card) => card.key !== id);
        localStorage.setItem("savedCards", JSON.stringify(filteredHistory));

    }

    const createCard = () => {
        let time = new Date().getTime();
        const text = value.trim();
        if (text === "") {
            return;
        }

        const todoCard = <TodoCard key={time} id={time.toString()} text={text} deleteCard={deleteCard} />
        const copy = [todoCard, ...todos];
        setTodos(copy);
        setValue("");

        localStorage.setItem("savedCards", JSON.stringify(copy));
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


export default App;
