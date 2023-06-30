import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import "./style/navbar.css"

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  }

  return (
    <div className="Navbar">
      <Link className="Link" to="/" > Home </Link>
      <Link className="Link" to="/login" > Login </Link>

      <div className="Profile">
        {user && (
          <>
            <p>{user?.displayName} </p>
            <img src={user?.photoURL || ""} width="30px" height="30px" />
            <button onClick={signUserOut}>Sign Out</button>
          </>
          )
        }
      </div>
    </div>
  )
}