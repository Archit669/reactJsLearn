import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);
    console.log(user.name, user.password);
    if (!user){
        return <div>please log in</div>
    }
    
    return <div> welcome {user.name} </div>
}

export default Profile
