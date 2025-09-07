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
