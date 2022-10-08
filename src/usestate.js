import React, { useState } from "react";

const Usestate = () => {
  const [number, setnumber] = useState(3);
  return (
    <div>
      <h1 className="text-center text-5xl p-4">Usestate Hook</h1>
      <h1 className="text-3xl text-center ">Number :{number}</h1>
      <button
        className="text-xl rounded-md bg-cyan-300 p-3 m-5"
        onClick={() => setnumber(number + 1)}
      >
        Change Number
      </button>
    </div>
  );
};

export default Usestate;
