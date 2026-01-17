'use strict';

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let idx = 0;

const next = () => input[idx++];
const nextInt = () => Number(next());
const nextBigInt = () => BigInt(next());

function solve() {

    // ===== Choose ONE input pattern =====

    // Pattern 1: Single value
    const w = nextInt();
    if (w % 2) {
        console.log("NO")
    } else {
        console.log(w <= 2 ? "NO" : "YES")
    }

    // Pattern 2: n + array
    // const n = nextInt();
    // const arr = [];
    // for (let i = 0; i < n; i++) arr.push(nextInt());

    // Pattern 3: t test cases
    // const t = nextInt();
    // for (let tc = 0; tc < t; tc++) {
    //     // read per test case input here
    // }

    // ====================================

}

solve();
