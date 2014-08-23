/**
 * https://www.hackerrank.com/challenges/utopian-tree
 */

var solver = {
    solve: function (input) {
        var cycles = solver.parse(input);
        for (var cycleIndex = 0; cycleIndex < cycles.length; cycleIndex++) {
            var cycleLength = cycles[cycleIndex];
            var height = 1;
            for (var iterator = 0; iterator < cycleLength; iterator++) {
                if (iterator % 2) {
                    height = height + 1;
                } else {
                    height = height * 2;
                }
            }
            console.log(height);
        }
    },
    parse: function (input) {
        return input.split('\n').slice(1);
    }
};

module.exports = solver;