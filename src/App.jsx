import './App.css';

function App() {
  return (
    <>
    <div className='hero-image'>
            <div className='hero-container'>
            <h1>T O D O</h1>
            <Input />
            </div>
    </div>
    <TodoCard />
    <TodoCard />
    <TodoCard />
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

const TodoCard = () => {
    return (
        <div className='card'>
            <label className="container">
                read a book
                <input type="checkbox"  />
                <span className="checkmark"></span>
            </label>
            <button className='edit'><i className="fa-solid fa-pen-to-square"></i></button>
            <button className='delete'><i className="fa-solid fa-trash"></i></button>
        </div>
    ) 
}

export default App;