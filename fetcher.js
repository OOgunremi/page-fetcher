
const args = process.argv.slice(2);
const request = require('request');
const fs = require('fs');


request(args[0], function (error, response, body) {
  if (error) {
    console.log(`File doesn't exist.`);
  } else {
    fs.writeFile(args[1], body, () => {
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