var lines = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n'),
    numberOfTestCase = lines.shift(),
    i = 0,
    event, 
    hours, 
    minutes, 
    stateDoor;
    
for (; i < numberOfTestCase; i++) {
  event = lines[i].split(" ");
  hours = `0${event[0]}`.slice(-2);
  minutes = `0${event[1]}`.slice(-2);
  stateDoor = event[2] === '1' ? "abriu" : "fechou";

  process.stdout.write(`${hours}:${minutes} - A porta ${stateDoor}!\n`);
}
