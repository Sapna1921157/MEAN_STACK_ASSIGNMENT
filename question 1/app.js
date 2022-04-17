// Express supports routing with either app.route(path).get(callback) or
// app.get('path', callback)

const express = require('express');
const app = express();

// With the approcah of app.get('path', callback) we can only define
// a single route with a single HTTP verb. Example code is shown below
app.get('/', (req, res) => {
    res.send('hiii i am sapna');
});
app.post('/', (req, res) => {
    res.send('Data posted successfully')
});

// The same code can be written in a easier way with the help of express
app.route('/').get((req, res) => {
    res.send('hiii i am sapna');
}).post((req, res) => {
    res.send('Data posted successfully');
});

// We can also chain multiple middleware functions
var hasName = function (req, res, next) {
    if (req.param('name')) {
        next();
    }
    else {
        res.send('What is your name?');
    }
};
var sayHello = function (req, res, next) {
    res.send('Hello' + req.param('name'));
};
app.get('/', hasName, sayHello);


app.listen(8000, () => {
    console.log('Server listening on port 8000...');
})