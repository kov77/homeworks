import React, {ChangeEvent, KeyboardEvent } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    setUsers: ([]) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, setUsers} // деструктуризация пропсов
) => {
    let condition = error === 'Try one more time' || !name
    let inputClass = condition ? s.error : s.someClass
    let disabledHandler = condition ? true : false
    let setInputPlaceholder = condition ? 'Please, write your name' : ''

    const resetUsersCount = () => {
        setUsers([]);
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            addUser();
        }
    }


    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyPress={onKeyPressHandler} className={inputClass} placeholder={setInputPlaceholder}/>
            <span style={{margin:15}}>{totalUsers}</span>
            <button onClick={addUser} disabled={disabledHandler}>add</button>
            <button onClick={resetUsersCount}>reset</button>

            <div className={s.errorMessage}>{error}</div>

        </div>
    )
}

export default Greeting
