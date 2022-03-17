
const request = require('request');
const fs = require('fs');


request('http://www.google.com', function (error, response, body) {
  if (error) {
    console.log(`File doesn't exist.`);
  } else {
    fs.writeFile('./index.html', body, () => {
      fs.stat('./index.html', (err, stats) => {
        if (err) {
          console.log(`File doesn't exist.`);
        } else {
          console.log('Downloaded and saved ', stats.size, 'to ./index.html.');
        }
      });
    });
  }
});