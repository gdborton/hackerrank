
/**
 * https://www.hackerrank.com/challenges/service-lane
 */

var solver = {
    solve: function (input) {
        var object = solver.parse(input);
        object.segments.forEach(function (segment) {
            var smallest = 3;
            for (var widthIterator = segment.entry; widthIterator <= segment.exit; widthIterator++) {
                if (object.widths[widthIterator] < smallest) {
                    smallest = object.widths[widthIterator];
                }
            }
            console.log(smallest);
        });
    },
    parse: function (input) {
        var lines = input.split('\n').slice(1);
        var returnObject = {
            widths: lines[0].split(' '),
            segments: []
        };
        var lines = lines.slice(1);
        for (var lineIterator = 0; lineIterator < lines.length; lineIterator++) {
            var pieces = lines[lineIterator].split(' ');
            returnObject.segments.push({
                entry: +pieces[0],
                exit: +pieces[1]
            });
        }

        returnObject.widths.forEach(function (width, index) {
            returnObject.widths[index] = +width;
        });

        return returnObject;
    }
};

module.exports = solver;