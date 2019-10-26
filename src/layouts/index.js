import React from "react"

export default ({children}) =>
(<div>
    <h2>Header</h2>
    <br/>
    {children()}
    <br/>
    <h2>Footer</h2>
</div>)