'use strict';

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let idx = 0;

const next = () => input[idx++];
const nextInt = () => Number(next());
const nextBigInt = () => BigInt(next());

function solve() {
    // console.log("Working")
    // ===== Choose ONE input pattern =====

    // Pattern 1: Single value
    // const w = nextInt();
    // if (w % 2) {
    //     console.log("NO")
    // } else {
    //     console.log(w <= 2 ? "NO" : "YES")
    // }

    // Pattern 2: n + array
    // console.log(input)
    let n = nextInt(), s = next(), t = 0;
    // console.log(n, m, i)
    let prev = 0
    for (let i = 1; i < n; i++) {
        if (s[prev] == s[i]) {
            t += 1
        } else {
            prev = i;
        }
    }
    console.log(t)
    //  k = next().toLowerCase();
    // let i = 0, res = 0, map = new Map();
    // while (i < n.length) {
    //     // console.log(n[i], k[i])
    //     if (!map.has(n[i])) {
    //         map.set(n[i], true);
    //     }
    //     i++;
    // }
    // console.log(n.slice(0, 1).toUpperCase() + n.slice(1))

    // console.log(arr, n);
    // let ans = arr.filter(options => options.filter(n => !!n).length > 1).length;
    // console.log(res)


    // Pattern 3: t test cases
    // const t = nextInt();
    // // console.log(t);
    // let type = { "X++": 1, "++X": 1, "--X": -1, "X--": -1 };
    // let count = 0;
    // for (let tc = 0; tc < t; tc++) {
    //     let str = next();
    //     // console.log(str);
    //     count += type[str];
    // }
    // console.log(count);
    // ====================================
}

solve();
