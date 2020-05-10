import React, { useState } from "react";
import "./index.css";
import Middle from "./components/Middle";
import Spinner from "./components/Spinner";
import Vanta from "./components/Vanta";
import { ReactTerminal } from "react-terminal";
import Typing from "react-typing-animation";
function App() {
  const [show, setShow] = useState(true);
  const commands = {
    follow: () => setShow(true),
    cd: (directory) => `changed path to ${directory}`,
  };
  let returnValue;
  show
    ? (returnValue = (
        <div>
          <Spinner />
          <Middle />
          <Vanta />
        </div>
      ))
    : (returnValue = 
      <div className="terminal"><div className="innerTerminal">
      <ReactTerminal commands={commands} showControlButtons={false} theme={"dark"} welcomeMessage={<Typing>
      <span>Wake up, Neo...</span>
      <Typing.Delay ms={3000}/>
      <Typing.Backspace count={15}/>
      
      <span>The Matrix has you...</span>
      <Typing.Delay ms={3000}/>
      <Typing.Backspace count={21}/>
      <span>Knock, knock, Neo.</span>
      <Typing.Delay ms={2000}/>
    </Typing>}/>
    </div></div>
    );
  return returnValue
}

export default App;
