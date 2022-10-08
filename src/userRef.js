import React, { useRef, useEffect, useState } from "react";

const UserRef = () => {
  const [inputValue, setInputValue] = useState("");
  const [no, setno] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  }, [no]);

  return (
    <div className="text-center">
      <h1 className="text-3xl text-center">UseRef</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
      <button className="bg-cyan-600 p-4" onClick={() => setno(no + 1)}>
        Incrase
      </button>
    </div>
  );
};

export default UserRef;
