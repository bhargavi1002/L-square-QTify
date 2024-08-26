// import React, { forwardRef } from 'react';
// import rightArrow from "../../assets/RightArrow.svg";

// const RightArrow =  forwardRef((props, ref) => (
//   <button ref={ref} style={{ position: 'absolute', right: 0, width: "40px",
//     height: "40px",
//     backgroundColor: "transparent",
//     border: "none",
//     top: '50%',
//     transform: 'translateY(-50%)',
//     zIndex: 10,
//     cursor: 'pointer'}}>
//     <img src={rightArrow} alt="Next" />
//   </button>
// ));

// export default RightArrow;

import React, { forwardRef } from 'react';
import rightArrow from "../../assets/RightArrow.svg";

const RightArrow =  forwardRef((props, ref) => (
  <button ref={ref} style={{ position: 'absolute', right: 0, width: "40px",
    height: "40px",
    backgroundColor: "transparent",
    border: "none",
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    cursor: 'pointer'}}>
    <img src={rightArrow} alt="Next" />
  </button>
));

export default RightArrow;