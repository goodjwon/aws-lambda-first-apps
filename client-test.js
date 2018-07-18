
/**  use browser
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://7zjd7lz1vl.execute-api.ap-northeast-2.amazonaws.com/prod/entries');
xhr.onreadystatechange = function(event){
    console.log(event.target.response);
}
xhr.send();
 */


var request = require('request');

request.post('https://7zjd7lz1vl.execute-api.ap-northeast-2.amazonaws.com/prod/entries', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});