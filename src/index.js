var express = require('express');
var apiMocker = require('connect-api-mocker');
//import {setupMocker} from '../src/SetupMocker';
 
var app = express();
 
// const setupMocker = setupMocker();

// for(let i = 0; i < array.length; i++){
//     app.use(array[i].replace('mocks',''), apiMocker(array[i]));
// }
 app.use('/api',apiMocker( '/mocks/api'));

 
app.listen(8080);