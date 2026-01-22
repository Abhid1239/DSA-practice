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
    let mult = nextInt();
    let remaing = nextInt();
    let total = nextInt();
    // console.log(n, m, i)
    let max = (total * (total + 1)) / 2;
    let val = max * mult;
    console.log(Math.max(val - remaing, 0));
    // for (let i = 0; i < n.length; i++) {
    //     if (n[i] == n[i].toLocaleUpperCase()) {
    //         l++;
    //     } else {
    //         u++;
    //     }
    // }
    // if (l <= Math.ceil(n.length / 2)) {
    //     console.log(n.toLocaleLowerCase())
    // } else {
    //     console.log(n.toLocaleUpperCase())
    // }
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
