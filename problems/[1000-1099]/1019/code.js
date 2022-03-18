var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var durationInSeconds = Number(input)

function getFormattedTime(duration) {
    var hours = Math.floor(duration / 3600);
    duration = duration % 3600;
    
    var minutes = Math.floor(duration / 60);
    duration = duration % 60;
    
    var seconds = Math.floor(duration);
    
    return `${hours}:${minutes}:${seconds}`
}

process.stdout.write(`${getFormattedTime(durationInSeconds)}\n`)