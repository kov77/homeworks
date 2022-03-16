import React, { KeyboardEvent } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: any // need to fix any
    setNameCallback: any // need to fix any
    addUser: any // need to fix any
    error: any // need to fix any
    totalUsers: any // need to fix any
    setUsers: any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, setUsers} // деструктуризация пропсов
) => {
    let inputClass = error === 'Try one more time' || !name ? s.error : s.someClass
    let disabledHandler = error === 'Try one more time' || !name ? true : false

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
            <input value={name} onChange={setNameCallback} onKeyPress={onKeyPressHandler} className={inputClass}/>
            <span style={{margin:15}}>{totalUsers}</span>
            <button onClick={addUser} disabled={disabledHandler}>add</button>
            <button onClick={resetUsersCount}>reset</button>

            <div className={s.errorMessage}>{error}</div>

        </div>
    )
}

export default Greeting
