import { useState } from "react";

const UseState = () => {
    // count নামে একটি স্টেট ভেরিয়েবল এবং সেটিকে আপডেট করার জন্য setCount ফাংশন।
    //const [count, setCount] = useState();
    const [state, setState] = useState({ count: 0, color: "red" });

    const count = state.count;
    // const color = state.color;

    const handleIncrease = () => {
        //setCount(count+1);
        setState((prevCount) => {
            return { ...state, count: prevCount.count + 1 };
        });
    };

    const handleDecrease = () => {
        //setCount(count-1);
        setState((prevCount) => {
            return { ...state, count: prevCount.count - 1 };
        });
    };

    return (
        <div className="p-8 space-y-6">
            <h1 className="text-xl text-center">useState use</h1>
            <button onClick={handleIncrease} className="btn bg-green-500 text-white p-4 text-xl">Increase</button>
            <p className="text-3xl">{count}</p>
            {/* <p className="text-3xl">{color}</p> */}
            <button onClick={handleDecrease} className="btn bg-red-500 text-white p-4 text-xl">Decrease</button>
        </div>
    );
};

export default UseState;