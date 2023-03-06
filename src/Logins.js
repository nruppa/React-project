import React, { useState, setToken } from 'react'

function Logins() {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = Logins({
            username,
            password
        });
        setToken(value);
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <label>
                    <p></p>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Logins











// This Project is a ticketing system which means we are handling tickets(issues) that the user faces. Here the issues 
// like if the user faces any issues with any devices which are used in the store (scan gun, printer, Store PC, First 
// Phone, Tool Rental. etc) then he can raise the ticket form Related Ticket Creation Forms (ESVS, First Phone 
// and Tool Rental) and these tickets are stored in Service Now and the Help desk Team or Store Team can 
// repair or replace the devices. Also, we are providing some solutions the user can search the solution and solve 
// the issue if not he can create the ticket. If the application have any issues we are intimation it as a notification 
// if the user effected with those issues, and we are tracking the impacted users and issues and make that issue as a 
// priority one. We are providing list of devices in a particular store. Also, we are providing what are the new updated 
// in Store Health application and user-provided feedback (form Usable Feedback) and Network health of the 
// store.