/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import "./InputData.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CSVLink } from "react-csv";

const InputData = (props) => {
  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const toUpperCase = () => {
    const upperCase = text.toUpperCase();
    setText(upperCase);
  };

  const toLowerCase = (event) => {
    const lowerCase = text.toLowerCase();
    setText(lowerCase);
    event.preventDefault();
  };

  const resetInputField = (event) => {
    setText("");
    event.preventDefault();
  };

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const copBtn = (event) => {
    event.preventDefault();
  };

  const dwnldBtn = (event) => {
    event.preventDefault();
  };

  const removeExtraSpace = (event) => {
    event.preventDefault();
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  //   const previewtext = () => {
  //     if (!text) {
  //       setText("Nothing To preview");
  //     } else {
  //       setText(text);
  //     }
  //   };

  //   const removeExtraSpace = () => {};

  return (
    <>
      <div
        className="main-div"
        style={{ color: props.mode === "dark" ? "white" : "#042742" }}
        // style={{ background: props.background }}
      >
        {/* <div className="input-div"> */}
        <form>
          <h1 className="p-3">Enter the text to analyze below</h1>

          <input
            type="text"
            className="input-tag"
            // className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042742",
            }}
            value={text}
            onChange={(event) => {
              event.preventDefault();
              setText(event.target.value);
            }}
            id="mybox"
            // rows="8"
          />

          <div className="btn-div">
            <button
              type="button"
              className="btn btn-primary mx-2"
              onClick={() => {
                toUpperCase();
              }}
              disabled={!text}
            >
              Convert to Uppercase
            </button>
            <button
              type="button"
              className="btn btn-primary mx-2"
              onClick={() => {
                toLowerCase();
              }}
              disabled={!text}
            >
              Convert to Lowercase
            </button>
            <button
              type="button"
              className="btn btn-primary mx-2"
              onClick={() => resetInputField()}
              disabled={!text}
            >
              Clear
            </button>
            <CopyToClipboard text={text} onCopy={onCopyText}>
              <button
                type="button"
                className="btn btn-primary mx-2"
                onClick={() => copBtn()}
                disabled={!text}
              >
                Copy to Clipboard
              </button>
            </CopyToClipboard>
            <CSVLink
              // headers={headers}
              data={text}
              filename={`manage_team_${new Date().toJSON().slice(0, 10)}.txt`}
            >
              <button
                type="button"
                className="btn btn-primary mx-2"
                onClick={() => dwnldBtn()}
                disabled={!text}
              >
                Download Text
              </button>
            </CSVLink>
            <button
              type="button"
              className="btn btn-primary"
              onClick={removeExtraSpace}
              disabled={!text}
            >
              Remove Extra Space
            </button>
          </div>
        </form>

        <br />
        <br />
        <div className="my-3 position-sticky text-preview">
          <h2>Text Summary</h2>
          <p>
            {
              text.split(/\+s/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            Words and characters {text.trim().length}
          </p>
          <p>{0.008 * text.split(" ").length} Minutes Read</p>
          <div className="preview">
            <h3>Preview</h3>
            <div>{text ? text : "Nothing to Preview"}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputData;

// /[\n\r\s]+/g

{
  /* <div className="preview-div">
            <h2>Preview</h2>

            <p
              style={{ textAlign: "center", justifyContent: "center" }}
              // style={{
              //   // float: "right",
              //   marginLeft: "10px",
              //   textAlign: "right",
              //   justifyContent: "right",
              // }}
            >
              {text ? text : "Nothing to Preview"}
            </p>
          </div> */
}

{
  /* <div className="count-div d-flex align-items-left flex-column">
          <div className="summary-div">
            <h2 className="col-md-12 ">Your Text Summary</h2>
            <p style={{ float: "left" }}>
              {
                text.split(/\+s/).filter((element) => {
                  return element.length !== 0;
                }).length
              }{" "}
              Words and characters {text.trim().length}
            </p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
          </div>
          <div className="container">
            <h3>Preview</h3>
            <p>{text ? text : "Nothing to Preview"}</p>
          </div>
        </div> */
}

{
  /* <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042742",
            }}
            value={text}
            onChange={(event) => setText(event.target.value)}
            id="mybox"
            rows="8"
          ></textarea> */
}
