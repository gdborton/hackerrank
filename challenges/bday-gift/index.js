var solver = {
    solve: function (inputString) {
        var balls = solver.parse(inputString);
        var ballIndex = 0;
        var result = 0;
        for (ballIndex = 0; ballIndex < balls.length; ballIndex++) {
            result = result + +balls[ballIndex];
        }
        result = result / 2;
        if (result % 1 === 0) {
            console.log(result + '.0');
        }else {
            console.log(result);
        }
    },
    parse: function (inputString) {
        return inputString.split('\n').slice(1);
    }
};

module.exports = solver;