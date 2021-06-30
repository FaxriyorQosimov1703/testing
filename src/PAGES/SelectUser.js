import {useEffect, useState} from 'react';
import {doGet} from './services';


function SelectUser({onChange, name}) {
    const [user, setUser] = useState([]);
    const [currentUser, setCurrentUser] = useState('')


    async function getUsers() {
        const users= await doGet('/users')
        setUser(users)
    }

    function onChangeSelect(event) {
        const id = event.target.value;
        const id1 = id === ''?'':parseInt(id)
        setCurrentUser(id1)
        if(onchange)
            onChange(id)
    }
    useEffect(()=>{
        getUsers()
    },[])


    return <select name='name' value={currentUser} onChange={onChangeSelect}>
        {
            user.map(item=>
                
                <option value={item.id} key={item.id}>{item.name}</option>
                
                )
        }
    </select>
}

export default SelectUser