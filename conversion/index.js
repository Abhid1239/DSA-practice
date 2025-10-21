const opr = {
    "^": 3,
    "*": 2,
    "/": 2,
    "+": 1,
    "-": 1,
};

// ✅ 1️⃣ Infix → Postfix
function InfixToPostfix(chars) {
    let stack = [];
    let ans = [];

    for (let ch of chars) {
        if (/[a-zA-Z0-9]/.test(ch)) ans.push(ch);
        else if (ch === "(") stack.push(ch);
        else if (ch === ")") {
            while (stack.length && stack[stack.length - 1] !== "(")
                ans.push(stack.pop());
            stack.pop(); // remove '('
        } else {
            while (
                stack.length &&
                stack[stack.length - 1] !== "(" &&
                (opr[stack[stack.length - 1]] > opr[ch] ||
                    (opr[stack[stack.length - 1]] === opr[ch] && ch !== "^"))
            ) {
                ans.push(stack.pop());
            }
            stack.push(ch);
        }
    }

    while (stack.length) ans.push(stack.pop());
    return ans.join("");
}

// ✅ 2️⃣ Infix → Prefix
function InfixToPrefix(chars) {
    let reversed = chars
        .split("")
        .reverse()
        .map((ch) => (ch === "(" ? ")" : ch === ")" ? "(" : ch))
        .join("");

    let postfix = InfixToPostfix(reversed);
    return postfix.split("").reverse().join("");
}

// ✅ 3️⃣ Postfix → Infix
function PostfixToInfix(chars) {
    let stack = [];

    for (let ch of chars) {
        if (/[a-zA-Z0-9]/.test(ch)) stack.push(ch);
        else {
            let b = stack.pop();
            let a = stack.pop();
            stack.push("(" + a + ch + b + ")");
        }
    }

    return stack[0];
}

// ✅ 4️⃣ Prefix → Infix
function PrefixToInfix(chars) {
    let stack = [];

    for (let i = chars.length - 1; i >= 0; i--) {
        let ch = chars[i];
        if (/[a-zA-Z0-9]/.test(ch)) stack.push(ch);
        else {
            let a = stack.pop();
            let b = stack.pop();
            stack.push("(" + a + ch + b + ")");
        }
    }

    return stack[0];
}

// ✅ 5️⃣ Postfix → Prefix
function PostfixToPrefix(chars) {
    let stack = [];

    for (let ch of chars) {
        if (/[a-zA-Z0-9]/.test(ch)) stack.push(ch);
        else {
            let b = stack.pop();
            let a = stack.pop();
            stack.push(ch + a + b);
        }
    }

    return stack[0];
}

// ✅ 6️⃣ Prefix → Postfix
function PrefixToPostfix(chars) {
    let stack = [];

    for (let i = chars.length - 1; i >= 0; i--) {
        let ch = chars[i];
        if (/[a-zA-Z0-9]/.test(ch)) stack.push(ch);
        else {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(a + b + ch);
        }
    }

    return stack[0];
}


let infix = "(a+b)*(n*m)^z";
let postfix = InfixToPostfix(infix);
let prefix = InfixToPrefix(infix);

console.log("Infix   :", infix);
console.log("Postfix :", postfix);
console.log("Prefix  :", prefix);
console.log("Postfix → Infix :", PostfixToInfix(postfix));
console.log("Prefix  → Infix :", PrefixToInfix(prefix));
console.log("Postfix → Prefix:", PostfixToPrefix(postfix));
console.log("Prefix  → Postfix:", PrefixToPostfix(prefix));
