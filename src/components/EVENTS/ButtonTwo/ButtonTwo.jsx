import React, {useState} from "react";
export default function ButtonOne() {
            const [count, setCount] = useState(0);

    return <button onClick={()=> {
       setCount(count => count += 1)
    //    console.log(count + 1);
    }}>Press to add 1 =  {count}</button>
}