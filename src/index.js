var express = require('express');
var apiMocker = require('connect-api-mocker');
const setupMoker = require('./SetupMocker');


var app = express();

// const setupMocker = setupMocker();

// for(let i = 0; i < array.length; i++){
//     app.use(array[i].replace('mocks',''), apiMocker(array[i]));
// }

setupMoker().then(res => {
    for (let i = 0; i < res.length; i++) {
        app.use(res[i].replace('/mocks',''),apiMocker(res[i]) );
        console.log('EndPoint :'+res[i].replace('/mocks','')+' Address: '+ res[i]);
    }
});


app.listen(8080);