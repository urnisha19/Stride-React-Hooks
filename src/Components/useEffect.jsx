import { useEffect, useState } from "react";

const UseEffect = () => {
    const [type, setType] = useState('user');

    const handleType = (type) => {
        setType(type);
    };

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`) //` is a diacritical mark
            .then(response => response.json())
            .then(json => console.log(json))
    },[type]); //[dependency] শুধুমাত্র যখন type পরিবর্তিত হয় তখন এই ইফেক্ট চলবে।

    return (
        <div>
            <h1 className="text-xl text-center">useEffect use</h1>
            <button className="btn p-5 border border-black m-2" onClick={() => handleType("users")}>Users</button>
            <button className="btn p-5 border border-black m-2" onClick={() => handleType("posts")}>Posts</button>
            <button className="btn p-5 border border-black m-2" onClick={() => handleType("comments")}>Comments</button>
        </div>
    );
};

export default UseEffect;