import { useRef, useState } from "react";
import "./styles.css";

function Element({ onDrop, v, index }) {
    const [axis, setAxis] = useState({
        x: 0,
        y: 0,
    });
    const [value, setValue] = useState("0, 0");
    const [isDragging, setIsDragging] = useState(false);
    const elementRef = useRef(null);

    const handleMouseDown = (e) => {
        el = elementRef.current;
        el.style.pointerEvents = "";
        el.style.cursor = "grabbing";
        el.style.zIndex = 100;

        document.body.style.userSelect = "none";
        console.log(e.target, e.clientY);
        setAxis({
            x: e.clientX,
            y: e.clientY,
        });
        setIsDragging(true);
    };
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        let x = e.clientX;
        let y = e.clientY;
        el = elementRef.current;
        el.style.transform = `translate(${x - axis.x}px, ${y - axis.y}px)`;
    };
    const handleMouseUp = (e) => {
        if (!isDragging) return;

        let y = e.clientY - axis.y;

        // setValue("0, 0");
        setIsDragging(false);
        onDrop(Math.floor(y / 100), index);
        el.style.transform = `translate(0px, 0px)`;
        document.body.style.userSelect = "";
        el.style.zIndex = 0;
        el.style.cursor = "grab";
    };
    const handleMouseLeave = () => {
        // setValue("0, 0");
        setIsDragging(false);
        el = elementRef.current;
        el.style.transform = `translate(0px, 0px)`;
        el.style.zIndex = 0;
        el.style.cursor = "grab";

        // (el.style.pointerEvents = ""), (el.style.cursor = "grab");
        document.body.style.userSelect = "";
    };
    return (
        <div
            ref={elementRef}
            style={{
                width: "100px",
                height: "100px",
                border: "1px solid grey",
                // transform: `translate(${e})`,
                margin: "4px",
                borderRadius: "4px",
                textAlign: "center",
                verticalAlign: "center",
                pointerEvents: "",
                position: "relative",
                transition: isDragging ? "none" : "transform 0.2s ease",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
        >
            {v}
        </div>
    );
}
function DragAndDrop() {
    const [el, setEl] = useState([1, 2, 3, 4, 5, 6]);

    const handleDrop = (moved, fromIndex) => {
        let updatedMoved = moved > 0 ? moved : moved + 1;
        let updatedIndex = Math.min(
            Math.max(fromIndex + updatedMoved, 0),
            el.length - 1
        );
        const updatedArray = [...el];
        const [removed] = updatedArray.splice(fromIndex, 1);
        updatedArray.splice(updatedIndex, 0, removed);
        setEl(updatedArray);
    };

    return (
        <div>
            {el.map((e, i) => (
                <Element onDrop={handleDrop} key={e} v={e} index={i} />
            ))}
        </div>
    );
}
export default function App() {
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <DragAndDrop />
        </div>
    );
}
