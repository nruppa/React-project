import React from 'react'
import C from './C'



export const UseContext = React.createContext();
export default function A() {
    return (
        <div>
            <center>
                A
            </center>
            <UseContext.Provider value={"b"}>
                <C />
            </UseContext.Provider>
        </div>
    )
}
