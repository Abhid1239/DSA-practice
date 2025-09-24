import { useCallback, useEffect, useRef, useState } from "react";
import "./styles.css";

const useDebounce = (fn, delay) => {
    const fnRef = useRef(fn);
    const timerRef = useRef(null);

    const debounceFn = useCallback(
        (...args) => {
            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                fnRef.current(...args);
            }, delay);
        },
        [delay]
    );
    useEffect(() => {
        fnRef.current = fn;
    }, [fn]);

    debounceFn.cancel = () => {
        clearTimeout(timerRef.current);
        timerRef.current = null;
    };
    useEffect(() => {
        () => debounceFn.cancel();
    }, [debounceFn]);

    return debounceFn;
};

function Autocomplete() {
    const [value, setValue] = useState("");
    const [lists, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const currentSearchRef = useRef(0);

    const fetchList = (value) => {
        setLoading(true);
        const currentValue = ++currentSearchRef.current;
        fetch(`https://api.datamuse.com/sug?s=${value}`)
            .then((res) => res.json())
            .then((data) => {
                if (currentValue == currentSearchRef.current) {
                    setList(data);
                }
                console.log(data);
            })
            .catch((err) => {
                setList([
                    {
                        id: "UUID",
                        name: "Error Fetching List",
                    },
                ]);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const debouncedFetch = useDebounce(fetchList, 500);

    const handleChange = (e) => {
        setValue(e.target.value);
        debouncedFetch(e.target.value);
    };
    return (
        <div>
            <input value={value} onChange={handleChange} />
            <div>
                {loading && <p>Loading...</p>}
                {lists.map((el) => (
                    <div key={el.word}>{el.word}</div>
                ))}
            </div>
        </div>
    );
}

export default function App() {
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <Autocomplete />
        </div>
    );
}
