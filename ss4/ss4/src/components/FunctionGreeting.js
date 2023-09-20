import { useEffect, useState } from "react";

const FunctionGreeting = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(()=>{
    window.localStorage.setItem("firstName",firstName);
    window.localStorage.setItem("lastItem",lastName);
  },[firstName,lastName])

  return (
    <div>
      <input
        type="text"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      ></input>
      <br></br>
      <input
        type="text"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      ></input>
      <p>
        Hello,{""}
        <span>
          {firstName} {lastName}
        </span>
      </p>
    </div>
  );
};
export default FunctionGreeting;
