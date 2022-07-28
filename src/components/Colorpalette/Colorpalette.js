// /* eslint-disable no-unreachable */
// import React, { useEffect, useState } from "react";
// import "./Colorpalette.css";
// // import { CopyToClipboard } from "react-copy-to-clipboard";

// const Colorpalette = () => {
//   const colors = ["#FF5733", "#FFBD33", "#33FF57", "#0000ff"];

//   const [background, setBackground] = useState("#071415");
//   const [current, setCurrent] = useState(null);

//   useEffect(() => {
//     const timeOutId = setTimeout(() => {
//       setCurrent(null);
//     }, 3000);
//     return () => clearTimeout(timeOutId);
//   }, [current]);

//   return (
//     <div className="app" style={{ background: background }}>
//       {current !== null && <h1>Copied {current}</h1>}
//       <div className="conatiner">
//         {colors.map((color, index) => (
//           <div key={index} className="card">
//             <div
//               style={{
//                 background: color,
//                 filter: "brightness(85%)",
//                 boxshadow: color === background ? "0 0 5px #0000" : "",
//               }}
//               className="box"
//               onClick={() => setBackground(color)}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Colorpalette;
