// const express = require('express');
// const app = express();



// abc


let res = {
  abc: "1",
  send: function (body) {
    // Modify the body here before sending
    // this
    if (typeof body === 'string') {
      body = body.toUpperCase(); // Example: Convert string body to uppercase
    } else if (typeof body === 'object') {
      body.modified = true; // Example: Add a property to an object body
    }
    
    originalSend.call(this, body); // Call the original res.send with the modified body
    // originalSendFn(body);
  }
}

// nvaldjvsdl
res.send("abc")
let originalSendFn =  function(body) {
    // 
    console.log(this.abc, body);
    
  };
originalSendFn.call(res, "abc")
// originalSendFn = (body) => {
//   // 
//   console.log(body)
// }

// res.send = modify;

// res.send("abc");

function modify(body) {
  // Modify the body here before sending
  if (typeof body === 'string') {
    body = body.toUpperCase(); // Example: Convert string body to uppercase
  } else if (typeof body === 'object') {
    body.modified = true; // Example: Add a property to an object body
  }
  
  // originalSend.call(this, body); // Call the original res.send with the modified body
  originalSendFn(body);
};

// // modify.call(res, )


// // Middleware to modify the response body
// app.use((req, res, next) => {
//   const originalSend = res.send; // Store the original res.send function

//   res.send = function (body) {
//     // Modify the body here before sending
//     if (typeof body === 'string') {
//       body = body.toUpperCase(); // Example: Convert string body to uppercase
//     } else if (typeof body === 'object') {
//       body.modified = true; // Example: Add a property to an object body
//     }
    
//     // originalSend.call(this, body); // Call the original res.send with the modified body
//     originalSend(body);
//   };

//   next(); // Pass control to the next middleware or route handler
// });

// // Example route
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.get('/json', (req, res) => {
//   res.json({ message: 'This is a JSON response.' });
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });