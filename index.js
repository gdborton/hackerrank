var fs = require('fs');
var challengesFolder = './challenges/';

function solveChallenge (challengeName) {
    var solver = require(challengesFolder + challengeName + '/index.js');
    fs.readdir(challengesFolder + challengeName + '/data', function (err, files) {
        var file = '';
        var fileIndex;
        for (fileIndex = 0; fileIndex < files.length; fileIndex++) {
            file = files[fileIndex];

            var contents = fs.readFileSync('./challenges/' + challengeName + '/data/' + file, { encoding: 'UTF-8' });
            var startTime = new Date();
            solver.solve(contents);
            var endTime = new Date();
            console.log(challengeName, file.split('.')[0] +  ': Took ' + (endTime - startTime) + ' milliseconds.');
        }
    });
}

function solveAll () {
    fs.readdir(challengesFolder, function (err, files) {
        var fileIndex;
        for (fileIndex = 0; fileIndex < files.length; fileIndex++ ) {
            var file = files[fileIndex];
            solveChallenge(file)
        }
    });
}

solveAll();
