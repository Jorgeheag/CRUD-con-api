import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsersForm = ({getUsers, userSelected}) => {

  const [name,setName]= useState ("");
  const [name2, setName2] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassaword]= useState("");
  const [date, setDate] = useState("");
  
  
  useEffect (()=>{

    if (userSelected !== null) {
      setName(userSelected.first_name);
      setName2(userSelected.last_name);
      setEmail(userSelected.email);
      setPassaword(userSelected.password);
      setDate(userSelected.birthday);
      
    }else{
      setName("")
      setEmail("")
      setPassaword("")
      setDate("")
      
    }

  },[userSelected])

 
  
  const submit = e =>{
    e.preventDefault();
  
    const user = {
      first_name: name,
      last_name: name2,
      email: email,
      password: password, 
      birthday: date
    };

    if (userSelected !== null) { //si hay algo en iser selected se edita
      alert("Editando")
      axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`,user)
           .then(()=> getUsers()) 
    }else{
      axios.post(`https://users-crud1.herokuapp.com/users/`, user)
      .then(()=> getUsers())
      .catch(error=>console.log(error.response));
    }
    


  }




  

     return (
      <form className='form' onSubmit={submit}>
        <div>
        <h1 className='title'>New user</h1>
          <label htmlFor="name">firts name</label>
          <input 
          type="text"  
          id="name"
          onChange={e=> setName(e.target.value)}
          value={name}/>

        </div>

        <div>
        <label htmlFor="name2">last name</label>
          <input 
          type="text" 
          id="name2"
          onChange={e=> setName2(e.target.value)}
          value={name2}
          />

        </div>

        <div>
        <label htmlFor="email">email</label>
          <input 
          type="email" 
          id="email"
          onChange={e=> setEmail(e.target.value)}
          value={email}
          />

        </div>
        
        <div>
        <label htmlFor="pasword">password</label>
          <input 
          type="password"
          id="pasword" 
          onChange={e=> setPassaword(e.target.value)}
          value={password}
          />

        </div>

        <div>
        <label htmlFor="date">date</label>
          <input 
          type="date" 
          id="date"
          onChange={e=> setDate(e.target.value)}
          value={date}
           /> 

        </div>

        <div>
        <button type="submit">upload</button>
        </div>

         
      </form>
    );
};

export default UsersForm;