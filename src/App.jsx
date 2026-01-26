// Input Mirror (Controlled output)
// import { useState } from "react";

// export default function App() {
//   const [text, setText] = useState("")

//   function typing(e) {
//     setText(e.target.value)
//   }

//   return (
//     <div>
//       <h1>Input Mirror</h1>
//       <input type="text" value={text} onChange={typing}/>
//       <p>You typed : {text}</p>
//     </div>
//   )
//   }

// Counter with Rule
import { useState } from "react";

export default function App() {
  const[count, setCount] = useState(0)
  const[isDisabledInc, setIsDisabledInc] = useState(false);
  const[isDisabledDec, setIsDisabledDec] = useState(true);

  function increment() {
    if (count < 10) {
      const next = count + 1;
      setCount(next);
      setIsDisabledDec(false)
      setIsDisabledInc(next >= 10)
    }
    else {
      setIsDisabledDec(false)
      setIsDisabledInc(true)
    }
  }

  function decrement() {
    if (count > 0) {
      const next = count - 1;
      setCount(next);
      setIsDisabledDec(next <= 0)
      setIsDisabledInc(false)
    }
    else {
      setIsDisabledDec(true)
      setIsDisabledInc(false)
    }
  }

  

  return (
    <div>
      <h1>Counter with Rules</h1>
      <p>{count}</p>
      <button type="button" disabled={isDisabledInc} onClick={increment} >Increment</button>
      <button type="button" disabled={isDisabledDec} onClick={decrement}>Decrement</button>
    </div>
  )
}