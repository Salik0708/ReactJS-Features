import React, { useState } from "react";

// => Step Number 1:

// const FromUncontrolledToControlledComponent = () => {
//   return (
//     <div>
//       <label>
//         My uncontrolled Input: <input type="text" />
//       </label>
//     </div>
//   );
// };

// export default FromUncontrolledToControlledComponent;

// It's an uncontrolled input field, because once you type something into the field and see changes even though we are not giving any instructions in our source code. There is no line written to display the value in the input field and no line written to change the value when we type something into it. That's because we deal with HTML here and it's the native behavior of the input field, because it manages its own internal state.

// ---X---X---X---X---X---X---X---X---X---X

// => Step Number 2:

// const FromUncontrolledToControlledComponent = () => {
//   const [value, setValue] = useState("");

//   const handleChange = (e) => setValue(e.target.value);

//   return (
//     <div>
//       <label>
//         My still uncontrolled Input:
//         <input type="text" onChange={handleChange} />
//       </label>

//       <p>
//         <strong>Output:</strong> {value}
//       </p>
//     </div>
//   );
// };

// export default FromUncontrolledToControlledComponent;

// Why is this component (element) still uncontrolled? When you start the application, the input field shows the same value as the output paragraph. That should be alright, shouldn't it? Let's see why it isn't. Try the following initial state instead:

// ---X---X---X---X---X---X---X---X---X---X

// => Step Number 3:

// const FromUncontrolledToControlledComponent = () => {
//   const [value, setValue] = useState("Hello React");

//   const handleChange = (e) => setValue(e.target.value);

//   return (
//     <div>
//       <label>
//         My still uncontrolled Input:
//         <input type="text" onChange={handleChange} />
//       </label>

//       <p>
//         <strong>Output:</strong> {value}
//       </p>
//     </div>
//   );
// };

// export default FromUncontrolledToControlledComponent;

// Now you can see the difference. While the input field shows an empty field, the output paragraph shows the initial state. Only when you start typing into the input field, both elements seem to synchronize, but they don't, because the input field still tracks its own internal state while the output paragraph is driven by the actual React state coming from the handler function. So even though they output the same when you start typing, the underlying source of the value is different:

// 1. input field receives its value from internal DOM node state
// 2. output paragraph receives its value from React's state

// ---X---X---X---X---X---X---X---X---X---X

// => Step Number 4:

// Now FROM UNCONTROLLED TO CONTROLLED COMPONENT
const FromUncontrolledToControlledComponent = () => {
  const [value, setValue] = useState("Hello React");

  const handleChange = (e) => setValue(e.target.value);

  return (
    <div>
      <label>
        My controlled Input:
        <input type="text" value={value} onChange={handleChange} />
      </label>

      <p>
        <strong>Output:</strong> {value}
      </p>
    </div>
  );
};

export default FromUncontrolledToControlledComponent;

// By giving the input the value from React's state, it doesn't use anymore its internal state, but the state you provided from React. Now the initial state should be seen for the input field and for the output paragraph once you start the application. Also when you type something in the input field, both input field and output paragraph are synchronized by React's state. The input field has become a controlled element
