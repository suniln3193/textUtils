import React, { useState } from "react"; //import useState if you're using props

const Textarea = (props) => {
  // convert in uppercase
  const onClickUpperCase = () => {
    // console.log("clicked upper");
    let newText = text.toUpperCase();
    setText(newText);
  };

  // Convert in lowecase
  const onClickLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  //  Remove white space
  const removeWhiteSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

   //  Reset TextArea
   const resetArea = () => {
    setText('');
  };
  

  //  Trigger event on click
  const textOnChange = (event) => {
    setText(event.target.value);
  };

  //   Using for update to use state
  const [text, setText] = useState("");

  return (
    <>
      <div className="container mt-5">
        <h1 className="pt-4">The Ultimate Text Conversion Tool</h1>
        <div className="mt-4 mb-3">
          <textarea
            onChange={textOnChange}
            rows="10"
            cols="50"
            className="form-control"
            placeholder="Enter your text here..."
            id="floatingTextarea"
            value={text}
            style={{ borderColor: '#4A148C'}}
          ></textarea>
        </div>
        <div className="buttonWrapper pt-2 pb-2">
            <button
            type="button"
            className="btn btn-primary m-2"
            onClick={onClickUpperCase}
            >
            Convert to Uppercase
            </button>
            <button
            type="button"
            className="btn btn-primary m-2"
            onClick={onClickLowerCase}
            >
            Convert to Lowercase
            </button>
            <button
            type="button"
            className="btn btn-primary m-2"
            onClick={removeWhiteSpace}
            >
            Remove White Space
            </button>
            <button
            type="button"
            className="btn btn-primary m-2"
            onClick={resetArea}
            >
            Reset
            </button>
        </div>

        <div className="container my-3">
          <p>
            <b>{
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            </b>
            words and <b>{text.length}</b> characters
          </p>
          <p>
            <b>
            {0.008 *
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            </b>
            Minutes read
          </p>
          <h2 className="py-2">Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
      </div>
    </>
  );
};
export default Textarea;