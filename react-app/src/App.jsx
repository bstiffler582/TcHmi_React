import { useState } from 'react';
import Faceplate from './components/Faceplate';

const App = () => {

  // state debugging
  const [speedSp, setSpeedSp] = useState(50);

  const btnStartPressed = (e) => {
    console.log("start pressed");
    setSpeedSp(speedSp + 1);
  }

  const btnStopPressed = (e) => {
    console.log("stop pressed");
    setSpeedSp(speedSp - 1);
  }

  let speed = 50;

  const btnSetSpeed = (sp) => {
    console.log("speed cmd:" + sp);
    setSpeedSp(sp);
  }

  return (
    <div>
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Faceplate 
        title="test" 
        running={true} 
        startBtn={btnStartPressed} 
        stopBtn={btnStopPressed}
        speed={speed}
        speedSp={speedSp}
        key={speedSp}
        setSpeedBtn={btnSetSpeed} />
    </div>
  );
};

export default App;
