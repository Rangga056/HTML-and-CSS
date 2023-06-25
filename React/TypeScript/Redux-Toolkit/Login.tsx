import { useState } from "react"
import { login, logout } from "../store"
import {useDispatch, useSelector} from "react-redux"

export const Login = () => {
  const [newUsername,setNewUsername] = useState<string>("")
  const dispatch = useDispatch();
  const username = useSelector((state: any)=> state.user.value.username)

  return (
    <div>
      <h1>{username}</h1>
      <input onChange={(e)=>{setNewUsername(e.target.value)}}/>
      <button onClick={()=>dispatch(login({username: newUsername}))}>Log in</button>
      {/*  dispatch(name of the reducer function({the reducer value: set the new value equal to})) */}
      <button onClick={()=>dispatch(logout())}>Log out</button>
    </div>
  )
}
