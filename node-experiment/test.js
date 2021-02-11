var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + '/index.html', '<h1>Hello Mr WOrld!</h1>', function (error) {
  if (error) {
    return console.log(error);
  } else {
    return console.log('congrats!');
  }
});

var photoUrl = 'https://www.pspca.org/sites/default/files/styles/pspca_banner/public/2017-07/34719489134_2eb736aab8_o.jpg?h=2edb335a&itok=YkhiwaEL';
https.get(photoUrl, function (response) {
  response.pipe(fs.createWriteStream(__dirname+'/mydog.jpg'));
})
