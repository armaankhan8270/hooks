import axios from "axios";
import React, { useState, useEffect } from "react";

const Useeffect = () => {
  const [quote, setquote] = useState([]);
  const [imageNo, setimageNo] = useState(2);
  useEffect(() => {
    const GetAllQuotes = async () => {
      const url = `https://type.fit/api/quotes`;
      await axios.get(url).then((books) => {
        setquote(books.data[imageNo].text);
        // setquote(books);
      });
    };
    GetAllQuotes();
  }, [imageNo]);
  return (
    <div>
      <div>
        <h1 className="text-center text-5xl p-4">UseEffect Hook</h1>
        <h1 className="text-3xl text-center ">{quote}</h1>
        <button
          className="text-xl rounded-md bg-cyan-300 p-3 m-5"
          onClick={() => setimageNo(imageNo + 2)}
        >
          Change quote
        </button>
        {quote}
      </div>
      );
    </div>
  );
};

export default Useeffect;
