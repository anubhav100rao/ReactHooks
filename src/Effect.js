import React from 'react'
import { useState, useEffect } from 'react'

// MILLION DOLLAR QUESTIONS WHY USEEFFECT ? 
// SideEffects in app -> management


const Effect = () => {

    const [time, setTime] = useState(new Date()) // this is state of time

    useEffect(function() {
        const timer = setTimeout(() => setTime(new Date()), 1000)
        return () => clearTimeout(timer)
    })
    // useEffect(function() {
    //     setTimeout(() => setTime(new Date()), 1000)
    // }, [time])
    return (
        <div>
            <h1>Use Effect example { time.toLocaleTimeString() } </h1>
        </div>
    )
}

export default Effect
