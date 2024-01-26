// code in first attempt

// import { useState } from 'react';
// import "./App.css";
// import Button from './components/Button';

// function App() {
//   return (
//     <>
//       <div className="main-background" style={{backgroundColor : color}}>
//           <div className="color-bar">
//             <Button color={"Olive"} setColor={setColor}/>
//             <Button color={"Red"} setColor={setColor}/>
//             <Button color={"Blue"} textColor= {"white"} setColor={setColor}/>
//             <Button color={"Green"} setColor={setColor}/>
//             <Button color={"Yellow"} setColor={setColor}/>
//             <Button color={"Orange"} setColor={setColor}/>
//             <Button color={"Lavender"} setColor={setColor}/>
//             <Button color={"Black"} textColor= {"white"} setColor={setColor}/>
//           </div>
//       </div>
//     </>
//   )
// }

// export default App


// improved code

import React, { useState } from 'react';
import "./App.css";
import Button from './components/Button';

function App() {
  const [color, setColor] = useState("olive");
  const buttonObj = [
    {
      Olive: ["Olive"],
      Red: ["Red"],
      Blue: ["Blue", "white"],
      Green: ["Green"],
      Yellow: ["Yellow"],
      Orange: ["Orange"],
      Lavender: ["Lavender"],
      gold : ["gold"],
      Black: ["Black", "white"]
    }
  ];

  // Extract the color names from buttonObj
  const colors = Object.keys(buttonObj[0]);

  return (
    <>
      <div className="main-background" style={{ backgroundColor: color }}>
        <div className="color-bar">
          {/* Map the colors to Button components */}
          {colors.map((colorName, index) => (
            <Button
              key={index}
              color={colorName}
              textColor={buttonObj[0][colorName].includes("white") ? "white" : undefined}
              setColor={setColor}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App;

