for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    process.stdout.write("*");
  }
  console.log();
}

for (let i = 0; i < 5; i++) {
  for (let j = i; j < 5; j++) {
    process.stdout.write("*");
  }
  console.log();
}

for (let i = 0; i < 5; i++) {
  for (let j = i + 1; j < 5; j++) {
    process.stdout.write(" ");
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    process.stdout.write("*");
  }
  for (let j = i + 1; j < 5; j++) {
    process.stdout.write(" ");
  }
  console.log();
}

for (let i = 0; i < 5; i++) {
  for (let j = 5 - i; j < 5; j++) {
    process.stdout.write(" ");
  }
  for (let j = 0; j < 2 * (5 - 1 - i) + 1; j++) {
    process.stdout.write("*");
  }
  for (let j = 5 - i; j < 5; j++) {
    process.stdout.write(" ");
  }
  console.log();
}

let n = 5;

for (let i = 0; i < n * 2; i++) {
  let stars = i >= n ? n * 2 - i - 1 : i + 1;
  for (let j = 0; j < stars; j++) {
    process.stdout.write("*");
  }
  // for (let j = 0; j < 2 * (5 - 1 - i) + 1; j++) {
  //   process.stdout.write("*");
  // }
  // for (let j = 5 - i; j < 5; j++) {
  //   process.stdout.write(" ");
  // }
  console.log();
}
console.log("Yes");

for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    process.stdout.write("*");
  }
  for (let j = 0; j < 2 * i; j++) {
    process.stdout.write(" ");
  }
  for (let j = i; j < n; j++) {
    process.stdout.write("*");
  }
  console.log();
}

for (let i = 0; i < n; i++) {
  for (let j = n - i - 1; j < n; j++) {
    process.stdout.write("*");
  }
  for (let j = 0; j < 2 * (n - 1 - i); j++) {
    process.stdout.write(" ");
  }
  for (let j = n - i - 1; j < n; j++) {
    process.stdout.write("*");
  }
  console.log();
}

for (let i = 0; i < n * 2; i++) {
  let stars = i >= n ? n * 2 - i - 1 : i + 1;

  for (let j = 0; j < stars; j++) {
    process.stdout.write("*");
  }
  let spaces = i >= n ? (i + 1 - n) * 2 : 2 * (n - 1 - i);
  for (let j = 0; j < spaces; j++) {
    process.stdout.write(" ");
  }
  for (let j = 0; j < stars; j++) {
    process.stdout.write("*");
  }
  console.log();
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i + 1; j++) {
    process.stdout.write(`${j + 1}`);
  }
  console.log();
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i + 1; j++) {
    process.stdout.write(`${i + 1}`);
  }
  console.log();
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i; j++) {
    process.stdout.write(`${j + 1}`);
  }
  console.log();
}

for (let i = 0; i < n; i++) {
  let d = i % 2 == 0 ? 1 : 0;
  for (let j = 0; j < i + 1; j++) {
    process.stdout.write(`${d}`);
    d = d == 0 ? 1 : 0;
  }
  console.log();
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i + 1; j++) {
    process.stdout.write(`${j + 1}`);
  }
  for (let j = 0; j < 2 * (n - i - 1); j++) {
    process.stdout.write(` `);
  }
  for (let j = 0; j < i + 1; j++) {
    process.stdout.write(`${i + 1 - j}`);
  }
  console.log();
}

let m = 1;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i + 1; j++) {
    process.stdout.write(`${m} `);
    m++;
  }
  console.log();
}

let cx = 4,
  cy = 5;

let v = 0;

for (let i = 0; i < cx; i++) {
  v = +!v;
  let u = v;
  for (let j = 0; j < cx; j++) {
    process.stdout.write(`${u} `);
    u = +!u;
  }

  console.log();
}
for (let i = 0; i < cx; i++) {
  for (let j = 0; j < cx; j++) {
    process.stdout.write(
      `${i == 0 || j == 0 || i == cx - 1 || j == cx - 1 ? "*" : " "} `
    );
    // for (let k = 0; k < cx; k++) {
    //   process.stdout.write(
    //     `${i == k || j == k || i == cx - k - 1 || j == cx - k - 1 ? k : ""}`
    //   );
    // }
  }

  console.log();
}

let t = 3;

for (let i = 0; i < 2 * t - 1; i++) {
  for (let j = 0; j < 2 * t - 1; j++) {
    process.stdout.write(`${t - Math.min(i, j, t * 2 - 2 - i, t * 2 - 2 - j)}`);
  }
  console.log();
}
let num = 5;

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

for (let i = 0; i < num; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
for (let i = 0; i < num; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(`${j + 1}`);
  }
  console.log();
}

for (let i = 0; i < num; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(`${i + 1}`);
  }
  console.log();
}

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num - i; j++) {
    process.stdout.write(`* `);
  }
  console.log();
}

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num - i; j++) {
    process.stdout.write(`${j + 1}`);
  }
  console.log();
}
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num - i; j++) {
    process.stdout.write(" ");
  }

  for (let j = 0; j < 2 * i + 1; j++) {
    process.stdout.write("*");
  }
  console.log();
}

for (let i = 0; i < num; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(" ");
  }

  for (let j = 0; j < 2 * (num - i - 1) + 1; j++) {
    process.stdout.write("*");
  }
  console.log();
}

for (let i = 0; i < 2 * num - 1; i++) {
  if (i < num) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
  } else {
    for (let j = 0; j < 2 * num - i - 1; j++) {
      process.stdout.write("*");
    }
  }
  console.log();
}

let rev = 1;

for (let i = 0; i < num; i++) {
  let rev = i % 2 == 0 ? 1 : 0;
  for (let j = 0; j <= i; j++) {
    process.stdout.write(`${rev}`);
    rev = rev == 1 ? 0 : 1;
  }
  console.log();
}

for (let i = 0; i < 2 * num - 1; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(`${j + 1}`);
  }
  console.log();
}

for (let i = 0; i < num; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(`${j + 1}`);
  }
  for (let j = 0; j < 2 * (num - (i + 1)); j++) {
    process.stdout.write(" ");
  }
  for (let j = 0; j <= i; j++) {
    process.stdout.write(`${i - j + 1}`);
  }
  console.log();
}

let values = 1;
for (let i = 0; i < num; i++) {
  for (let j = 0; j < i + 1; j++) {
    process.stdout.write(`${values} `);
    values += 1;
  }
  console.log();
}

function even(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      sum |= nums[i];
    }
  }
  return sum;
}

console.log(even([1, 2, 3, 4, 5, 6]));
console.log(even([7, 9, 11]));
console.log(even([1, 8, 16]));

function maxTotalValue(nums, k) {
  let minV = Math.min(...nums),
    maxV = Math.max(...nums);
  return k * (maxV - minV);
}

console.log(maxTotalValue([1, 3, 2], 2));
console.log(maxTotalValue([4, 2, 5, 1], 3));

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num - i - 1; j++) {
    process.stdout.write(" ");
  }
  for (let j = 0; j < i + 1; j++) {
    process.stdout.write(`${String.fromCharCode(j + 97)}`);
  }
  for (let j = i; j > 0; j--) {
    process.stdout.write(`${String.fromCharCode(j + 96)}`);
  }

  console.log();
}

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    if (i == 0 || j == 0 || i == num - 1 || j == num - 1) {
      process.stdout.write(`* `);
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
}

num = 6;
for (let i = 0; i < 2 * num - 1; i++) {
  for (let j = 0; j < 2 * num - 1; j++) {
    process.stdout.write(
      `${
        num -
        Math.min(Math.min(i, j), Math.min(2 * num - 2 - i, 2 * num - 2 - j))
      }`
    );
  }
  console.log();
}
let arr = [10, 34, 32, 42, 4234, 232];
console.log(arr.slice(2));
console.log(String(55).length);
