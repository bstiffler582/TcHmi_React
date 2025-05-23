import "../App.css";
import { useState } from "react";

function Faceplate (props) {

    const [speedCmd, setSpeedCmd] = useState(props.speedSp);

    const speedControls = (speed, setSpeedBtn) => {
        return (
            <div>
                <span>Actual Speed: {speed.toFixed(3)}</span><br />
                <label htmlFor="speedSp">Setpoint:</label><br />
                <input id="speedSp" type="text" defaultValue={speedCmd} onChange={(e) => setSpeedCmd(parseFloat(e.target.value))} /><br />
                <button type="button" onClick={() => setSpeedBtn(speedCmd)}>Set Speed</button>
            </div>
        );
    }

    const buttonControls = (running, startBtn, stopBtn) => {
        const runIndicator = (running) ? "button-run" : "";
        return (
            <div>
                <button 
                    type="button" 
                    className={runIndicator}
                    onClick={startBtn}>
                    Start
                </button>
                <button 
                    type="button"
                    onClick={stopBtn}>
                    Stop
                </button>
            </div>
        );
    }

    return (
        <>
            <span>{props.title}</span>
            {buttonControls(props.running, props.startBtn, props.stopBtn)}
            {speedControls(props.speed, props.setSpeedBtn)}
        </>
    );
}

export default Faceplate;