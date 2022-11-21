import React from 'react'
import { UseContext } from './A'

export default function C() {
    return (
        <div>
            <center>
                c component
                <UseContext.Consumer>
                    {value =>
                    <div>{value}</div>}
                </UseContext.Consumer>
            </center>
        </div>
    )
}
