import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Table from './components/table'; 


function App(){
  const adminiUser = {
    email:"",
    password:""
  
  }
  const [user, setUser] = useState({name: "",email: ""});
  const [error, SetError] = useState("");


  const Login = details => {
    console.log(details);

  if (details.email == adminiUser.email && details.password == adminiUser.password == adminiUser.password)
    console.log("Logged in");
    setUser({
      name: details.name,
      email: details.email
    });
  }
const Logout = () => {
  setUser({name: "", email: ""});
}


return (
  <div className='App'>
    {(user.email != "") ? (
      <div className="welcome">
        <h2> PIZZA DUNIYA </h2>
  
        
      <button onClick={Logout}>logout</button>
    
      <Table />
      
        </div>

    

  ) : (
     <LoginForm Login={Login} error={error} />
    )};
  

    </div>
  
);
    }
export default App;

