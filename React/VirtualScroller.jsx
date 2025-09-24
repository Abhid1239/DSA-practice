import React, {
    useState,
    useMemo,
    useCallback,
    useRef,
    useEffect,
} from "react";
// import "./styles.css";

function VirtualScroller({
    arr,
    buffer,
    itemHeight,
    elementsPerView,
    onPageEnd,
}) {
    const [scrollTop, setScrollTop] = useState(0);
    const rafRef = useRef(null);
    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight));
    const endIndex = Math.min(arr.length, startIndex + elementsPerView + buffer);

    const filteredArray = useMemo(
        () => arr.slice(startIndex, endIndex),
        [arr, startIndex, endIndex]
    );
    useEffect(() => {
        if (endIndex >= arr.length) {
            onPageEnd();
        }
    }, [endIndex]);

    const handleScroll = useCallback((e) => {
        if (rafRef.current) return;
        rafRef.current = requestAnimationFrame(() => {
            setScrollTop(e.target.scrollTop);
            rafRef.current = null;
        });
    }, []);

    return (
        <div
            onScroll={handleScroll}
            style={{
                height: `${elementsPerView * itemHeight}px`,
                overflow: "auto",
            }}
        >
            <div
                style={{
                    height: `${itemHeight * arr.length}px`,
                    position: "relative",
                }}
            >
                {filteredArray.map((el, i) => (
                    <div
                        key={el.id}
                        style={{
                            height: `${itemHeight}px`,
                            position: "absolute",
                            top: `${itemHeight * (i + startIndex)}px`,
                        }}
                    >
                        {el.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

const MemoIsedVirtualScroll = React.memo(VirtualScroller);

export default function App() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [nexPageCalled, setNextPageCalled] = useState(false);

    const fetchData = async (page) => {
        setNextPageCalled(true);
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/comments?_limit=100&_page=${page}`
        );
        if (response.ok) {
            setData(await response.json());
        }
        setNextPageCalled(false);
    };

    useEffect(() => {
        fetchData(1);
    }, []);

    const handlePageEnd = () => {
        if (nexPageCalled) return;
        setPage(page + 1);
        fetchData(page + 1);
    };
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <MemoIsedVirtualScroll
                arr={data}
                buffer={5}
                itemHeight={50}
                elementsPerView={10}
                onPageEnd={handlePageEnd}
            />
        </div>
    );
}
