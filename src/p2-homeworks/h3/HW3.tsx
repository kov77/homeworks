import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'

// types
export type UserType = {
    _id: string
    name: string
}



// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<any>([]) // need to fix any

    const addUserCallback = (name: any) => { // need to fix any
        setUsers([...users, name])
    }


    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback} setUsers={setUsers}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
