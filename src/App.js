import './App.css';
import UsersForm from './Components/UsersForm';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UsersList from './Components/UsersList';

function App() {
  const [users,setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  
  
  useEffect(()=>{
    axios.get(`https://users-crud1.herokuapp.com/users/`)
          .then(res=> setUsers(res.data));



          
  },[]);

  const getUsers = ()=>{
    axios.get(`https://users-crud1.herokuapp.com/users/`)
          .then(res=> setUsers(res.data));
  }

  const deleteUser = id =>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(()=> getUsers());
    
  } 

  const selectUser = user => setUserSelected(user)

  


  return (
    <div className="App">
        <UsersForm getUsers ={getUsers} userSelected ={userSelected} deleteUser ={deleteUser}/>
        <UsersList users ={users} selectUser ={selectUser} deleteUser= {deleteUser} />
    </div>
  );
}

export default App;
