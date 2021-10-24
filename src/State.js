import React from 'react'
import { useState } from 'react'

const State = () => {
    const [col, setCol] = useState(true);
    return (
        <div>
            <h1 style={{
                color : col? "green" : "red"
            }}
            onClick = {() => setCol(!col)}
            >
                UseState Hook Example
            </h1>
        </div>
    )
}

export default State
