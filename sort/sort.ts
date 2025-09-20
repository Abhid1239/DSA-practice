function selection(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

console.log(selection([4, 7, 3, 2, 6]));

function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubble([4, 7, 3, 2, 6]));

function insertion(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        break;
      }
    }
  }
  return arr;
}

console.log(insertion([4, 7, 3, 2, 6]));

function merger(arr, l, m, r) {
  let ls = l;
  let rs = m + 1;
  let res = [];
  console.log(res, l, ls, rs, r);

  while (ls <= m && rs <= r) {
    if (arr[ls] > arr[rs]) {
      res.push(arr[rs]);
      rs++;
    } else {
      res.push(arr[ls]);
      ls++;
    }
  }
  while (ls <= m) {
    res.push(arr[ls]);
    ls++;
  }
  while (rs <= r) {
    res.push(arr[rs]);
    rs++;
  }
  console.log(res, l, ls, rs, r);
  let s = 0;
  for (let i = l; i <= r; i++) {
    arr[i] = res[s];
    s++;
  }
}
function sor(arr, l, r) {
  if (l >= r) return;
  let m = Math.floor((l + r) / 2);
  sor(arr, l, m);
  sor(arr, m + 1, r);
  merger(arr, l, m, r);
}
function merge(arr) {
  sor(arr, 0, arr.length - 1);
  return arr;
}
console.log(merge([4, 7, 3, 2, 6]));

function recursiveBubble(i, max, arr) {
  if (i == max && max == 1) {
    return arr;
  }
  if (i == max) {
    return recursiveBubble(0, max - 1, arr);
  }
  if (arr[i] > arr[i + 1]) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
  return recursiveBubble(i + 1, max, arr);
}

console.log(recursiveBubble(0, 4, [4, 7, 3, 2, 6]), "done");

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let p = arr[0],
    l = [],
    r = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > p) {
      r.push(arr[i]);
    } else {
      l.push(arr[i]);
    }
  }
  l = quickSort(l);
  r = quickSort(r);
  return [...l, p, ...r];
}
console.log(quickSort([4, 7, 3, 2, 6]), "quick");

function quickIndex(arr, l = 0, h = arr.length - 1) {
  if (l >= h) return arr;
  let p = l,
    r = h;
  while (p < r) {
    if (arr[p] >= arr[p + 1]) {
      [arr[p], arr[p + 1]] = [arr[p + 1], arr[p]];
      p++;
    } else {
      [arr[r], arr[p + 1]] = [arr[p + 1], arr[r]];
      r--;
    }
  }
  quickIndex(arr, l, p - 1);
  quickIndex(arr, p + 1, h);
  return arr;
}

function quick(arr, l = 0, r = arr.length - 1) {
  let h = r;
  let p = l;
  if (l >= r) return;

  while (p < h) {
    if (arr[p] > arr[p + 1]) {
      [arr[p], arr[p + 1]] = [arr[p + 1], arr[p]];
      p++;
    } else {
      [arr[p + 1], arr[h]] = [arr[h], arr[p + 1]];
      h--;
    }
  }
  quick(arr, l, p - 1);
  quick(arr, p + 1, r);
  return arr;
}

console.log(quickIndex([4, 7, 3, 2, 6]), "index");
console.log(quick([4, 7, 3, 2, 6]), "index");
console.log(quick([1, 2, 3, 4]), "index");
console.log(quick([4, 3, 2, 1]), "index");

function longestSubarray(nums, k) {
  let maxLen = 0,
    obj = {},
    sum = 0;
  nums.forEach((n, i) => {
    sum += n;
    if (sum == k) {
      maxLen = Math.max(maxLen, i + 1);
    } else {
      let isPresent = sum - k;
      //   console.log(obj, isPresent, sum, k, obj[isPresent], i);
      if (obj[isPresent] !== undefined) {
        maxLen = Math.max(maxLen, i - parseInt(obj[isPresent]));
      }
    }
    obj[sum] = i;
  });

  return maxLen;
}

console.log(longestSubarray([10, 5, 2, 7, 1, 9], 15));

function longestSubarray2(arr, k) {
  let left = 0,
    right = 0,
    len = 0,
    sum = arr[0],
    n = arr.length;
  while (right < n) {
    while (sum > k && left < right) {
      sum -= arr[left];
      left++;
    }
    if (sum == k) {
      len = Math.max(len, right - left + 1);
    }
    right++;
    sum += arr[right];
  }
  return len;
}
console.log(longestSubarray2([10, 5, 2, 7, 1, 9], 15));
console.log(Infinity, "a".charCodeAt(0), "z".charCodeAt(), 122 - 97);

console.log(Math.min(...[1, 2, 3]));
let a = 1;
let b = ++a;
console.log(a, b);
console.log("a".slice(0, 1));
console.log("a".slice(0, 0));
console.log("ab".slice(0, 1));
console.log("a".slice(0, 0));

function fractionalKnapsack(val, wt, cap) {
  let arr = val.map((v, i) => [v, wt[i]]);
  arr.sort((a, b) => {
    let cA = a[0] / a[1];
    let cB = b[0] / b[1];
    if (cB - cA) {
      return +1;
    } else {
      return -1;
    }
  });
  console.log(arr);
  let i = 0,
    currCap = cap,
    res = 0;
  while (i < arr.length) {
    if (arr[i][1] < currCap) {
      res += arr[i][0];
      currCap -= arr[i][1];
    } else {
      res += (arr[i][0] / arr[i][1]) * currCap;
      break;
    }
    i++;
  }
  return res;
}
console.log(fractionalKnapsack([60, 100, 120], [10, 20, 30], 50));

function findPlatform(a, d) {
  a = a.map((a) => [a, "a"]);
  d = d.map((d) => [d, "d"]);
  let t = [...a, ...d].sort((a, b) => a[0] - b[0]);

  return t.reduce((a, t) => (a + t[1] == "d" ? -1 : +1), 0);
}

console.log(
  findPlatform(
    ["0900", "0940", "0950", "1100", "1500", "1800"],
    ["0910", "1200", "1120", "1130", "1900", "2000"]
  )
);

let abcd = { A: 1, B: 2 };
console.log(Object.entries(abcd).length);
let c = "ABCAD".split("");
c = c.map((c) => c.charCodeAt(0) - "A".charCodeAt(0));
console.log(c);

function characterReplacement(s, k) {
  let l = 0,
    r = 0,
    hm = {},
    sum = 0,
    mFreq = 0,
    pNum = -Infinity;
  s = s
    .split("")
    .map((c) => c.charCodeAt(0) - "A".charCodeAt(0))
    .join("");
  while (r < s.length) {
    hm[s[r]] = (hm[s[r]] || 0) + 1;
    mFreq = Math.max(hm[s[r]], mFreq);
    pNum = (hm[s[pNum]] || 0) == mFreq ? pNum : s[r];
    while (r - l + 1 - mFreq > k && l <= r) {
      hm[s[l]]--;
      mFreq--;
      Object.entries(hm).forEach(([key, value]) => {
        if (value >= mFreq) {
          mFreq = value;
          pNum = key;
        }
      });
      l++;
    }
    sum = Math.max(r - l + 1, sum);
    r++;
  }
  return sum;
}

console.log(
  characterReplacement(
    "KRSCDCSONAJNHLBMDQGIFCPEKPOHQIHLTDIQGEKLRLCQNBOHNDQGHJPNDQPERNFSSSRDEQLFPCCCARFMDLHADJADAGNNSBNCJQOF",
    4
  )
);

function minArrivalsToDiscard(arrivals, w, m) {
  let l = 0,
    r = 0,
    hm = {},
    dm = {},
    dl = 0,
    dis = 0,
    len = 0;

  while (r < arrivals.length) {
    if (r - l + 1 > w + dl) {
      if (hm[arrivals[l]]) {
        hm[arrivals[l]]--;
      }
      if (dm[l]) {
        dl--;
        dm[l] = 0;
      }
      l++;
    }
    hm[arrivals[r]] = (hm[arrivals[r]] || 0) + 1;
    if (hm[arrivals[r]] > m) {
      dis++;
      dl++;
      dm[r] = 1;
      hm[arrivals[r]]--;
    }
    r++;
  }

  return dis;
}

// console.log(
//   minArrivalsToDiscard(
//     [
//       7, 3, 9, 9, 7, 3, 5, 9, 7, 2, 6, 10, 9, 7, 9, 1, 3, 6, 2, 4, 6, 2, 6, 8,
//       4, 8, 2, 7, 5, 6,
//     ],
//     10,
//     1
//   )
// );
console.log(minArrivalsToDiscard([10, 4, 3, 6, 4, 5, 6, 1, 4], 7, 1));

console.log("a".charCodeAt(), "z".charCodeAt());

function firstUniqChar(s) {
  let chars = new Array(26).fill(28),
    i = 0;
  while (i < s.length) {
    let n = s[i].charCodeAt() - "a".charCodeAt();
    if (chars[n] == 28) {
      chars[n] = i;
    } else {
      chars[n] = 29;
    }
    i++;
  }
  let ans = 29;
  chars.forEach((n) => {
    ans = Math.min(n, ans);
  });
  return ans == 28 || ans == 29 ? -1 : ans;
}
console.log(firstUniqChar("leetcode"));

// function lengthOfLongestSubstring(s: string): number {
//   let max = 0,
//     hm = {},
//     l = 0,
//     r = 0;
//   while (r < s.length) {
//     console.log(hm, l, r, s);

//     if (hm[s[r]] !== undefined) {
//       l = hm[s[r]];
//       l++;
//     }
//     console.log(hm, l, r, s);
//     hm[s[r]] = r;
//     max = Math.max(max, r - l + 1);
//     r++;
//     console.log(hm, l, r, s);
//   }
//   return max;
// }

function isValid(s) {
  let o = 0,
    oC = 0,
    oB = 0,
    l = 0,
    st = [];
  while (l < s.length) {
    if (s[l] == "(" || s[l] == "{" || s[l] == "[") {
      st.push(s[l]);
    } else {
      if (st.length == 0) return false;
      if (s[l] == st[st.length - 1]) {
        st.pop();
      }
    }
    l++;
  }
  return st.length == 0 ? true : false;
}

console.log(isValid("()"));

function findKthLargest(nums, k) {
  let l = 0,
    r = nums.length - 1,
    p = r;
  while (true) {
    p = r;

    while (l < r) {
      if (nums[l] > nums[l + 1]) {
        [nums[l], nums[l + 1]] = [nums[l + 1], nums[l]];
        l++;
      } else {
        [nums[r], nums[l + 1]] = [nums[l + 1], nums[r]];
        r--;
      }
    }
    if (l == nums.length - k) {
      console.log("Done");
      return nums[l];
    } else if (l > nums.length - k) {
      (l = 0), (r = l - 1);
    } else {
      (l = l + 1), (r = p);
    }
  }
}

console.log(findKthLargest([7, 6, 5, 4, 3, 2, 1], 2));


