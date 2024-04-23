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
            <input type="text" placeholder='add a new Todo' className='todo-input' value={value}
                onChange={adjustInput} onKeyDown={HandleEnterPress} />
            <button className='add' onClick={createCard}><i className="fa-regular fa-plus"></i></button>
        </div>
    )
}
