var https = require('https');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {

https.get(options, function (response) {

response.setEncoding('utf8');
var bufferedStrings = ""
  response.on("data", function(chunk) {
  bufferedStrings += chunk;
  console.log(chunk)
});
  callback(bufferedStrings)
});



}
function printHTML (html) {
 console.log(html);
};

getHTML(requestOptions, printHTML)

module.exports = {

  getHTML: getHTML

};