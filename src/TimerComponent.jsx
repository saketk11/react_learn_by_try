import React, { useState, useEffect } from "react";

const TimerComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        // Cleanup function
        return () => {
            clearInterval(interval);
            console.log("Cleanup executed, interval cleared.");
        };
    }, []); // No dependencies, runs once on mount and unmount

    
  function handleTitleChange(e) {
    console.log("The new title is:", e.target.value);
    // 'e' represents synthetic event
    const nativeEvent = e.nativeEvent;
    console.log(nativeEvent);
    e.stopPropagation();
    e.preventDefault();
  }

    return (
        <div>
            Count: {count}<br/>
            <input name="title" onChange={handleTitleChange} />
        </div>);
};

export default TimerComponent;
