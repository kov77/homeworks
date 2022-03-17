import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
    setUsers: ([]) => void

}


// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback, setUsers}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')
    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {

        setName((e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)).replace(/[^a-zA-Z]/g, "").replace(/\s+/g, ''))
    }
    const addUser = () => {
        if(name && name !== ' ') {
            addUserCallback(name)
            alert(`Hello  ${name}!`)
            setName('')
        } else {
            setError('Try one more time')
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            setUsers={setUsers}
        />
    )
}

export default GreetingContainer
