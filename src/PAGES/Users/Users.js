import {useEffect, useState} from 'react';
import {doGet} from '../services';
import UserList from './UserList'



export default function Users() {
    const [users, setUsers] = useState([])

    async function getUsers() {
        const res = await doGet('/users')
        setUsers(res)
    }
    useEffect(()=>{
        getUsers()
    },[])
    return (
        <div>
            <UserList 
                users={users}
                setUsers={setUsers}
            
            />
        </div>
    )
}
