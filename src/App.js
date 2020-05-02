import React, { useState } from "react";
import logo from "./logo.svg";
import "./index.css";
import Middle from "./components/Middle";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Spinner from "./components/Spinner";
import Particles from "./components/Particles";
import Vanta from "./components/Vanta";
import { ReactTerminal } from "react-terminal";
import Typing from "react-typing-animation";
function App() {
  const [show, setShow] = useState(false);
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
          <Work />
          <About />
          <Contact />
          <Vanta />
        </div>
      ))
    : (returnValue = (
      <div className="terminal"><div className="innerTerminal">
   
      <ReactTerminal commands={commands} showControlButtons={false}theme={"dark"}welcomeMessage={<Typing>
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
    ));
  return returnValue
}

export default App;
