import React from "../lib/React.Js";

function App(){
    
    const a = React.createElement("a", {href : "https://google.com", about:"_blank"}, "click me to go to google.com");
    return a;
}

export default App;
