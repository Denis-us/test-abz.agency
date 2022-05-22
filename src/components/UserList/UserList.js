import { useEffect, useState } from 'react'
import api from '../../services/usersApi'
import Card from '../Card/Card'
import Button from '../Button/Button'
import s from './UserList.module.css'

const UserList = () => {

    const [users, setUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    

    useEffect(() => {
        const fetchUsers = () => {
            api.getUsers().then(users => {
                setUsers(users)
            })}

            fetchUsers()
    }, [])

    useEffect(() => {
        if(currentPage === 1) {
            return
        }
        
        const fetchUsers = (currentPage) => {
            api.getUsers(currentPage).then(users => {
            setUsers(prevUsers => [...prevUsers, ...users]
        )})}

        fetchUsers(currentPage)   
    }, [currentPage])


    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1)
    }
    

    return (
        <>
            <ul className={s.list}>
                {users && users.map(user => (
                    <li key={user.id} className={s.listEl}>
                        <Card
                            photo={user.photo}
                            name={user.name}
                            email={user.email}
                            position={user.position}
                            phone={user.phone}/>
                    </li>
                    
                ))}
            </ul>
            <Button onClick={nextPage}>Show more</Button>
        </>
        
    )
}

export default UserList