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
