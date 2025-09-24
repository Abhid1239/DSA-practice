import { useEffect, useRef, useState } from "react";
import "./styles.css";

const COMPLETE = 100;

function ProgressBar({ controllers }) {
    const [progress, setProgress] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const timerRef = useRef(null);

    const handleStart = () => {
        setIsStarted(true);
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setProgress((currProgress) => {
                if (currProgress == COMPLETE) {
                    clearInterval(timerRef.current);
                    setIsStarted(false);
                    return currProgress;
                } else {
                    return currProgress + 1;
                }
            });
        }, 100);
    };

    const handlePause = () => {
        clearInterval(timerRef.current);
        setIsStarted(false);
    };
    const handleReset = () => {
        clearInterval(timerRef.current);
        setIsStarted(false);
        setProgress(0);
    };

    useEffect(() => {
        if (controllers.reset) {
            handleReset();
        } else if (controllers.pause && isStarted) {
            handlePause();
        } else if (controllers.start && !isStarted) {
            handleStart();
        }
    }, [controllers]);

    // console.log(progress, COMPLETE);

    return (
        <div>
            <div
                style={{
                    width: "100%",
                    height: "10px",
                    border: "1px solid red",
                }}
            >
                <div
                    style={{
                        width: `${progress}%`,
                        height: "10px",
                        background: "blue",
                        transition: "width 0.5s",
                    }}
                ></div>
            </div>
            <div>
                <button
                    disabled={isStarted || progress == COMPLETE}
                    onClick={handleStart}
                >
                    Start
                </button>
                <button
                    disabled={!isStarted || progress == COMPLETE}
                    onClick={handlePause}
                >
                    Pause
                </button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}

function AllProgressBars({ count = 5 }) {
    const [progressBars, setProgressBars] = useState(new Array(count).fill(1));
    const [controllers, setController] = useState({
        start: false,
        pause: false,
        reset: false,
    });
    const handleAllStart = () => {
        setController({
            start: true,
            pause: false,
            reset: false,
        });
    };

    const handleAllPause = () => {
        setController({
            start: false,
            pause: true,
            reset: false,
        });
    };

    const handleAllReset = () => {
        setController({
            start: false,
            pause: false,
            reset: true,
        });
    };
    return (
        <div>
            <div>
                {progressBars.map((bar) => (
                    <ProgressBar key={bar} controllers={controllers} />
                ))}
            </div>
            <div>
                <button onClick={handleAllStart}>All Start</button>
                <button onClick={handleAllPause}>All Pause</button>
                <button onClick={handleAllReset}>All Reset</button>
            </div>
        </div>
    );
}

export default function App() {
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <AllProgressBars count={4} />
        </div>
    );
}

// You are building a React component that manages multiple progress bars on screen. Each progress bar represents a different process and should be controlled independently, but with a shared controller panel (Start All, Pause All, Reset All). Each progress bar must:
// Progress from 0 to 100 over 10 seconds (1% every 100ms).
// Support pause/resume/reset actions from both:
// The global controller buttons (Start All, Pause All, Reset All)
// Its individual controls (Start, Pause, Reset under each bar)

// Requirements
// Render N progress bars (number passed via props, e.g., numBars={5}).
// Each progress bar should:
// Have a visual bar showing progress
// Show current % completed
// Have its own Start, Pause, Reset buttons

// The controller panel at the top should:
// Start/Resume all paused progress bars
// Pause all running progress bars
// Reset all progress bars to 0

// Use functional components and React Hooks (useEffect, useRef, useState) — no external timer libraries.
// Avoid memory leaks. Make sure timers are properly cleared.
// Ensure maximum reusability and performance (e.g., memoization where needed).
// Bonus: Animate the progress bars smoothly using CSS transitions.
