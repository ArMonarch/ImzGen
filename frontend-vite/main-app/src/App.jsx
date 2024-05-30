import { useState, useEffect }  from "react";

import { GeneratedImages } from "./Components/GeneratedImage";
import NavBar from "./Components/NavBar";
import PromptBar from "./Components/PromptBar";

function App() {

  const [Generation, setGeneration] = useState([]);

  function pushGeneratedImage(value){
    setGeneration((prevGeneration) => [...prevGeneration, value]);
  }

  useEffect(() => {
  }, []);

  return (
    <div className="flex flex-col h-[100vh]">
      <div className="flex-1 overflow-y-auto">

        <NavBar />
        
        <GeneratedImages Images={Generation}/>
        
      </div>

      <PromptBar PushGeneratedImage={pushGeneratedImage}/>
     
    </div>
  )
}

export default App;

