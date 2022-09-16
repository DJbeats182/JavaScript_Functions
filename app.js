

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) { 
    if(count <0 ) {
        for (let i = count; i <= 0; i++) { 
            if (i % 2 == 0){
                continue;
            } else {
                console.log(i);
            }
        }
    }   
    for (let i = 0; i <= count; i++) { 
        if (i % 2 == 0){
            continue;
        } else {
            console.log(i);
        }
    }
}
printOdds(3);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(age = 18, name = "Jack") {
    let aboveSixteen = `You can drive ${name}!`;
    let belowSixteen = `Sorry ${name}, but you need to wait until you're 16.`;
    if (age>= 16) {
        console.log(aboveSixteen); 
    } else {
        console.log(belowSixteen);
    }
}
checkAge(23, "James");

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x, y) {
    if(x > 0 && y > 0) {
        console.log(`${x}, ${y} is in Quadrant 1!`)
    }  else if (x < 0 && y > 0) {
        console.log(`${x}, ${y} is in Quadrant 2!`)
    } else if (x < 0 && y < 0) {
        console.log(`${x}, ${y} is in Quadrant 3!`)
    } else if (x > 0 && y < 0) {
        console.log(`${x}, ${y} is in Quadrant 4!`)
    } else if (x == 0 && y != 0) {
        console.log(`${x}, ${y} is on the X axis!`)
    } else if (x != 0 && y == 0) {
        console.log(`${x}, ${y} is on the Y axis!`)
    } else if (x == 0 && y == 0) {
        console.log(`${x}, ${y} is on the Origin!`)
    }
}
whichQuadrant(0, 0);
//console.log(`${x}, ${y}`)

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangleCheck(a, b, c) {
    if (a + b <= c || b + c <= a) {
        console.log("Invalid Triangle");
    } else if (a == b && b != c || a == c && c != b) {
        console.log("Isosceles Triangle");
    } else if (a == b && a == c) {
        console.log("Equilateral Triangle");
    } else if (a != b || a != c || b != c) {
        console.log("Scalene Triangle");
    }
}
triangleCheck(1, 2, 8)

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataPlanStatus(planLimit, day, usage) {
    let daysRemaining = 30 - day;
    let averageDailyUse = planLimit / 30;  
    let exceededUse = usage / day;
    let overallExceededUse = (exceededUse * 30) - planLimit;
    let usageGoal = (planLimit - usage) / daysRemaining;
    if (exceededUse - averageDailyUse > 0) {
        console.log(`${day} days used, ${daysRemaining} days remaining \n
        Average daily use: ${averageDailyUse}/Day \n
        You are EXCEEDING your average daily use ${exceededUse} GB/day, \n
        continuing this high usage, you'll exceed your data plan by ${overallExceededUse} GB. \n
        To stay below your data plan, use no more than ${usageGoal} GB/day.`); 
    } else {
        console.log("Good Job! At this rate you won't exceed your monthly usage.")
    }
}
dataPlanStatus(95, 12, 38)
