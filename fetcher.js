// Take in 2 command line arguments
// 1. URL
// 2. a local file path

// ASYNC OPERATIONS
// 1. You need to make an http request and wait for the response
// 2. After the http request is complete, take data and write it to a file in your local filesystem



const fs = require('fs');
const request = require('request');

const URL = process.argv[2];
const path = process.argv[3];


request(URL, (error, response, body) => {
  if (error) {
    console.log('error', error);
  }
  fs.writeFile(path, body, (error) => {
    if (error) {
      console.log('error', error);
    } else {
      const bytes = body.length;
      console.log(`Downloaded and saved ${bytes} bytes to ${path}`);
    }
  });
});

