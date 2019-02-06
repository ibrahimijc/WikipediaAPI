const express = require('express')

const request = require('request')

var app = express()



var port = process.env.PORT ||  1000
app.listen(port);
console.log("listening at "+port);

var Search = 'World War II'
// var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&titles='+Search
var url = 'https://en.wikipedia.org/api/rest_v1/page/summary/'+Search
request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
//       console.log(body) // Print
         var obj = JSON.parse(body)
         
         console.log(obj.extract)
     }
     else 
     {
         console.log("error")
     }
})








// request.post(
   
//   // uri : 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&titles=Imran Khan',
//     'https://en.wikipedia.org/w/api.php',
//    {
//     method : 'POST',
//    format : 'json',
//    action : 'query',
//    prop  : 'extracts',
//    titles : 'Imran Khan'

// },
// function(err,response,body){
    
//     if (err)
//     console.log("error")
//     else
//     //console.log(body)
//     {
//        // var data = JSON.parse(body)
//         console.log(body)
//     }
// }
// )
