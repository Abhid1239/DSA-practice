
async function fetchLists(url) {
    let response = await fetch(url);
    if (!response.ok) {
        return [];
    }
    return await response.json();
}

function debounce(fn, time) {
    let timerRef;
    return (...val) => {
        clearTimeout(timerRef);
        timerRef = setTimeout(() => {
            fn(...val);
        }, time);
    };
}

function typeAhead(typed, list) {
    return list.filter((n) => n.includes(typed));
}

let debouncedTypeAhead = debounce(typeAhead, 100);

let data = fetchLists("https://jsonplaceholder.typicode.com/users").then((d) =>
    d.map((d) => d.name)
);

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        debouncedTypeAhead("a", data);
    }, Math.random() * 1000);
}
export { };