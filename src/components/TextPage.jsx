import React, { useState } from "react";

function TextPage() {
  const [text, setText] = useState("");
  const [msg, setMsg] = useState("");
  const handleText = (e) => {
    setText(e.target.value);
  };

  const setAlert=(message)=>{
    setMsg(message);

    setTimeout(() => {
        setMsg("");
      }, 1500);
  }
  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
  };
  return (
    <>
      <div className="container mt-3">
        {msg && 
          <div class="alert alert-info" role="alert">
            {msg}
          </div>
        }
        <h1 className="mt-5 mb-3">Enter Your Text Here!</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="7"
            value={text}
            onChange={handleText}
          ></textarea>
        </div>
        <button className="btn btn-success mx-1" onClick={()=>{handleUpperCase(); setAlert("Converted to UpperCase!");}}>
          Convert to UpperCase
        </button>
        <button className="btn btn-success mx-1" onClick={()=>{handleLowerCase(); setAlert("Converted to LowerCase!");}}>
          Convert to LowerCase
        </button>
        <button className="btn btn-success mx-1" onClick={()=>{handleSpaces(); setAlert("Cleared Extra Spaces!");}}>
          Remove Spaces
        </button>
        <button className="btn btn-success mx-1" onClick={()=>{handleCopy(); setAlert("Text Copied!");}}>
          Copy Text
        </button>
        <button className="btn btn-success mx-1" onClick={()=>{handleClear(); setAlert("Cleared Text!");}}>
          Clear All
        </button>

        <hr />
        <h3 className="mt-5">Words & Characters Count:</h3>
        <p>
          {text.split(/\s+/).filter((e) => e.length !== 0).length} Words &{" "}
          {text.replace(/\s+/g, "").length} Characters
        </p>

        <h3 className="mt-3">Text Summary</h3>
        <p>{text.length ? text : "Nothing to Preview!"}</p>
      </div>
    </>
  );
}

export default TextPage;
