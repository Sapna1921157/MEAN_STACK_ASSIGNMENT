var express = require("express")
const path = require('path')
var app = express();

app.set('view engine', 'ejs');



app.get('/', (req, res)=>{
    var data = {name:'Sapna',
    hobbies:['playing football', 'playing chess', 'cycling']}
 
    // The render method takes the name of the HTML
// page to be rendered as input.
// This page should be in views folder in
// the root directory.
// We can pass multiple properties and values
// as an object, here we are passing the only name
    res.render('home' , {data :data});
     
    });



var server = app.listen(4000, function(){
    console.log('listening to port 4000')
});