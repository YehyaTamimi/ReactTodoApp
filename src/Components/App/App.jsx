import { useCallback, useState } from 'react';
import './App.css';

import TodoCard from '../card/Card';
import Input from '../Input/Input';


function App() {
    const [value, setValue] = useState("");
    const [todos, setTodos] = useState([]);
    const deleteCard = (id) => {
        setTodos((prevTodos) => {
            const copyTodos = [...prevTodos];
            const filteredTodos = copyTodos.filter((todo) => todo.key !== id);
            return filteredTodos;
        });
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
