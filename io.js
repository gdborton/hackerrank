process.stdin.resume();
process.stdin.setEncoding('ascii');
var raw = "";
process.stdin.on('data', function (data) {
    raw = raw + data;
});

process.stdin.on('end', function (){
    solver.solve(raw);
});