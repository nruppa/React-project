import { click } from '@testing-library/user-event/dist/click';
import React ,{ useState,useEffect}from 'react'

export default function Useeffect1() {
    const [count, setcount] = useState(0);

    useEffect(() => console.log("count"), [count])
    // useEffect(() => {
    //   const a=()=>
    //   {
    //     setcount((count)=>count + 1)
    //   }
    // }, [count])
    return (
        <div>
            <button onClick={()=>setcount(count +1)}>click me</button>
            click{count}
        </div>
    )
    
  
}

















