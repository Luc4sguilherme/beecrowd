for (var i = 0; i <= 2; i += 0.2) {
    for (var j = 1 + i; j <= 3 + i; j += 1) {
        process.stdout.write(`I=${i.toLocaleString('en-IN')} J=${j.toLocaleString('en-IN')}\n`);
     }
 }