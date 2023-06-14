import { useState } from "react"
//custom hook name muset use "use" infront of the name
export const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const toggle = () => {
    setState((prev)=>!prev)
    //this will change the previous state which is False to True
  }

  return [state, toggle] //returning the state and the toggle function
  //if you return as an object instead you need type it like {state: customName, toggle} if you want a custom name
}
