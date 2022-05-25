

const UsersList = ({users, selectUser, deleteUser}) => {
    return (
        <ul className='user-card'>
            {
                users.map(user=>(
                    <li key={user.id}>
                        <p><b>first name: </b>{user.first_name}</p>
                        <p><b>last name: </b>{user.last_name}</p>
                        <p><b>email: </b>{user.email}</p>
                        <p><b>password: </b>{user.password}</p>
                        <p><b>Birthday: </b>{user.birthday}</p>
                        <button onClick={()=> selectUser(user)}>Edit</button>
                        <button onClick={()=>deleteUser(user.id)}>Eliminar</button>
                    </li>
                ))
            }
        </ul>
            

    );
};

export default UsersList;