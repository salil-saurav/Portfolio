// // CustomCursor.js
// import { useState, useEffect } from "react";
// import "./CustomCursor.css";

// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };

//   useEffect(() => {
//     document.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div
//       className="custom-cursor"
//       style={{ left: `${position.x}px`, top: `${position.y}px` }}
//     ></div>
//   );
// };

// export default CustomCursor;
