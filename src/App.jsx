import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
    const [todos, setTodos] = useState(Array(3).fill(null));

    const deleteCard = (index) => {
        const copy = [...todos]
        const result = copy.filter((todo, index1) => index1 !== index);
        setTodos(result);
    }
    
  return (
    <>
    <div className='hero-image'>
            <div className='hero-container'>
            <h1>T O D O</h1>
            <Input />
            </div>
    </div>
    {todos.map((todo, index) => <TodoCard key={index} index={index} deleteCard={deleteCard}/>)}
    </>
  );
}


const Input = () => {
    return (
        <div className='input-container'>
            <input type="text" placeholder='add a new Todo' className='todo-input'/>
            <button className='add'><i className="fa-regular fa-plus"></i></button>
        </div>
    )
}

const TodoCard = ({index ,deleteCard}) => {
    const [cardText, setCardText] = useState("read a book");
    const [inputText, setInputText] = useState(cardText);
    const [edit, setEdit] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if(edit && inputRef.current){
            inputRef.current.focus();
        }
    },[edit])

    const editText = () =>{
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
        if(inputText !== ""){
            setCardText(inputText);
        }else{
            setInputText(cardText);
        }
    }
    
    return (
        <div className='card'>
            <label className="container">
                <input type="checkbox"  />
                <span className="checkmark"></span>
            </label>
           {edit ? (<input type='text' className='text-input' value={inputText} onChange={updateInput} ref={inputRef}/>) : (<div className='text' onDoubleClick ={editText} >{cardText}</div>) }
           {edit ?  
           (<>
                <button className='save' onClick={saveChanges}><i className="fa-solid fa-check"></i></button>
                <button className='discard' onClick={discardChanges}><i className="fa-solid fa-x"></i></button>
            </>) 
           : 
           ( <>
                <button className='edit' onClick={editText}><i className="fa-solid fa-pen-to-square"></i></button>
                <button className='delete' onClick={() => deleteCard(index)}><i className="fa-solid fa-trash"></i></button>
            </>)}
        </div>
    ) 
}

export default App;