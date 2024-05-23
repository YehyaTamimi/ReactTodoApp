import { useState, useEffect } from 'react';
import TodoCard from '../card/Card';
import Input from '../Input/Input';
import styles from './appStyling.js';
import Weather from '../Weather/Weather.jsx';
import { useLocation } from 'react-router-dom';
import React from 'react';


function App() {
    const { state } = useLocation();
    const [value, setValue] = useState("");
    const [todos, setTodos] = useState([]);
    const appStyle = styles();

    useEffect(() => loadSavedCards(), []);
    
    const loadSavedCards = () => {
        const savedCards = JSON.parse(localStorage.getItem("savedCards"));
        let cards;

        if (savedCards) {
            cards = savedCards.map((card, index) => {
                    if (state?.delete && (card.key === state?.id)) {
                            return;   
                    }
                    return addPropsToCard(card);
            });
            const cardsFinal = cards.filter((card) => card !== undefined)
            setTodos(cardsFinal);
            localStorage.setItem("savedCards", JSON.stringify(cardsFinal));

        }
    }

    const addPropsToCard = (card) => {
       const cardProps = {
        key : card.key,
        id: card.key,
        text: card.props.text,
        deleteCard: deleteCard,
       }

       if(card.key === state?.id){
        cardProps.text = state.title;
        cardProps.check = state.check;
       }

       return <TodoCard {...cardProps}/>
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
            <div className={appStyle.heroImage}>
                <Weather />
                <div className={appStyle.heroContainer}>
                    <h1 className={appStyle.h1}>T O D O</h1>
                    <Input value={value} setValue={setValue} createCard={createCard} />
                </div>
            </div>
            {todos.map((todo) => todo)}
        </>
    );
}


export default App;
