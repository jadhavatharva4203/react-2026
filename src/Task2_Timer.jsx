import { useEffect, useState } from "react";

export default function Task2_Timer() {
  const[seconds, setSeconds] = useState(0);

  useEffect (() => {
    const intervalId = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
  
    // cleanup
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>Timer</h1>
      <p>{seconds} Seconds</p>
    </div>
  )

}