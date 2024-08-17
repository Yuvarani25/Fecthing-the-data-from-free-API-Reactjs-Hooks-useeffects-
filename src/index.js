import ReactDOM from 'react-dom';
import React, {useState,useEffect} from 'react';

function Userdemo(){
    const[user,setUsers]=useState([]);
    const[loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data=>{
        setUsers(data);
        setLoading(false);
      })
      .catch(error=>{
        console.error("if it is not loading, will be error msg");
        setLoading(false);
      });
    },[]);
    if(loading){
        return<p>Loading</p>;
    }
    return(
        <div>
            <h2>List out the users in API</h2>
            <ul style={{listStyleType:"none"}}>
                {user.map(user=>(
                    <li key = {user.id} >{user.id} : {user.name}</li>
                )
                )}
            </ul>
        </div>
    );
}ReactDOM.render(<Userdemo/>,document.getElementById('root'))