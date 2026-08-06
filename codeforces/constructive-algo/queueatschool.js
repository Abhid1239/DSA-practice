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
    let n = nextInt(), m = nextInt(), s = next().split("");
    // console.log(n, m, s)
    let i = 0, isChange = false;;

    while (i < m) {
        let j = s.length - 1;
        while (j > 0) {
            if (s[j] == "G" && s[j - 1] == "B") {
                isChange = true;
                [s[j], s[j - 1]] = [s[j - 1], s[j]];
                j--;
            }
            j--;
        }
        if (!isChange) {
            break;
        }
        isChange = false;
        i++;
        // console.log(n, m, i)
    }
    console.log(s.join(""))
    // console.log(i);
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
    // for (let tc = 0; tc < t; tc++) {
    //     let str = next();
    //     // console.log(str);
    //     count += type[str];
    // }
    // console.log(count);
    // ====================================
}

solve();
