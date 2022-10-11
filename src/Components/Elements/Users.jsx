import React from 'react'
import Fetchdata from './Fetchdata'
const Users = () => {
    const {data}=Fetchdata('https://api.github.com/users');
  return (
    <div>
      {data && (
            data.map((user) =>(
                <div key={user.id}>
                    <h1> {user.login} </h1>
                    <p> { user.type } </p>
                </div>
            ))
          )}
    </div>
  )
}

export default Users
