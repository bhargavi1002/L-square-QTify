// import React, {forwardRef} from 'react';
// import leftArrow from "../../assets/LeftArrow.svg";

// const LeftArrow = forwardRef((props, ref) => (
//   <button ref={ref} style={{ position: 'absolute', left: 0,  top: '50%',
//     transform: 'translateY(-50%)',
//     zIndex: 10,
//     cursor: 'pointer',
//     width: "40px",
//     height: "40px",
//     backgroundColor: "transparent",
//     border: "none"}}>
//     <img src={leftArrow} alt="Previous" />
//   </button>
// ));

// export default LeftArrow;
import React, {forwardRef} from 'react';
import leftArrow from "../../assets/LeftArrow.svg";

const LeftArrow = forwardRef((props, ref) => (
  <button ref={ref} style={{ position: 'absolute', left: 0,  top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    cursor: 'pointer',
    width: "40px",
    height: "40px",
    backgroundColor: "transparent",
    border: "none"}}>
    <img src={leftArrow} alt="Previous" />
  </button>
));

export default LeftArrow;

