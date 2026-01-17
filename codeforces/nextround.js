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
    const n = nextInt(), k = nextInt();
    let arr = [], isInc = false, last = k, adv = 0;
    for (let i = 0; i < n; i++) {
        let ele = nextInt();
        arr.push(ele);
    }

    arr.forEach(number => {
        if (number >= arr[k - 1] && number !== 0) {
            adv += 1;
        }
    })
    // console.log(arr, n);
    // let ans = arr.filter(options => options.filter(n => !!n).length > 1).length;
    console.log(adv)


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
