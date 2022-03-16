import React, {useState} from 'react'
import Greeting from './Greeting'

type GreetingContainerPropsType = {
    users: any // need to fix any
    addUserCallback: any // need to fix any
    setUsers: any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback, setUsers}) => { // деструктуризация пропсов
    const [name, setName] = useState<any>('') // need to fix any
    const [error, setError] = useState<any>('') // need to fix any
    const setNameCallback = (e: any) => { // need to fix any
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
