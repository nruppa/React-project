import React from 'react'
// import Logins from './Logins';

export default function login() {


    const sub = () => {
        console.log("hi");
    }

    return (
        <div>
            <form >
                <label>
                    UserName:
                    <input type="text" placeholder='username'
                    // style={{
                    //     padding: "10px 10px",
                    //     width: "80%",
                    //     maxWidth: 200,
                    //     margin: "5px auto"
                    // }} 
                    />
                </label>
                <br></br>
                <label>
                    Password:
                    <input type="password" />
                </label>
                <br></br>
                <button onClick={sub} >Submit</button>
            </form>
        </div>
    )
}
