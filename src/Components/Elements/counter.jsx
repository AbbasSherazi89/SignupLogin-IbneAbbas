import { React, useState, useEffect } from "react";
import Users from "./Users";

const Counter = (props) => {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("Ali");
  const [fname, setfname] = useState("");

    useEffect(()=>{
        console.log(`You have clicked the button ${count} times`)
    },[]);

  const handleInc = () => {
    setcount(count + 1);
  };
  return (
    <>
      <div className="text-center mt-5">
        <h1>Count {count}</h1>
        <button type="submit" className="ms-2" onClick={handleInc}>
          Increment
        </button>
        <button
          type="submit"
          className="ms-2"
          onClick={() => setcount(count * 0)}
        >
          Reset
        </button>
      </div>
      <div>
        <h2>My name is {name}</h2>
        <button type="submit" className="ms-2" onClick={() => setname("Abbas")}>
          Click me
        </button>
        <h1>
          My name is: Name is {props.namep}. Hero name is {props.hname}{" "}
        </h1>

        <form className="text-center">
          <input
            type="text"
            placeholder="Enter first name"
            value={fname}
            onChange={(e) => setfname(e.target.value)}
          />
          <h1>Your first name is: {fname}</h1>
        </form>
      </div>
      <div>
        <Users/>
      </div>
    </>
  );
};

export default Counter;
