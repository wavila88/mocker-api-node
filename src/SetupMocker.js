const getFiles = require('node-recursive-directory');
var path = require('path');
var appDir = path.dirname(require.main.filename);

 const setupMocker = async() => {

        const files = await getFiles('mocks');
        const newArray = [];
        files.forEach(element => {
            const array = element.split('/');
            const arrayToDelete = '/' + array[array.length - 1];

            newArray.push(element.replace(arrayToDelete, '').replace('C:/Proyectos/starting-react/mocking-service', ''));
        });
        return newArray;
    };

   module.exports = setupMocker;
//console.log(  setupMocker().then(res => console.log(res)));
