let raceNumber = Math.floor(Math.random() * 1000);

registeredEarly = true  
runnerAge = 13

if (registeredEarly && runnerAge > 18) {
    raceNumber += 1000;
}
if (registeredEarly && runnerAge > 18) {
    console.log(`Your race number will be ${raceNumber} and you will run at 9:30 AM.`);
} else if (!registeredEarly && runnerAge > 18) {
    console.log(`Your race number will be ${raceNumber} and you will run at 11:00 AM.`);
} else if (runnerAge < 18) {
    console.log(`Your race number will be ${raceNumber} and you will run at 12:30 PM.`);
}
