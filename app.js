

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
        console.log(`${x}, ${y} is on the Y axis!`)
    } else if (x != 0 && y == 0) {
        console.log(`${x}, ${y} is on the X axis!`)
    } else if (x == 0 && y == 0) {
        console.log(`${x}, ${y} is on the Origin!`)
    }
}
whichQuadrant(0, 0);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangleCheck(a, b, c) {
    if (a + b <= c || b + c <= a || a + c <= b) {
        console.log(`${a}, ${b}, ${c} is an Invalid Triangle`);
    } else if (a == b && b != c || a == c && c != b || b == c && b != a) {       
        console.log(`${a}, ${b}, ${c} is an Isosceles Triangle`);
    } else if (a == b && a == c) {
        console.log(`${a}, ${b}, ${c} is an Equilateral Triangle`);        
    } else if (a != b || a != c || b != c) {
        console.log(`${a}, ${b}, ${c} is a Scalene Triangle`);        
    }
}
triangleCheck(1, 2, 2)
triangleCheck(5, 5, 5)
triangleCheck(3, 4, 5)
triangleCheck(1, 8, 2)


// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataPlanStatus(planLimit, day, usage) {
    let daysRemaining = 30 - day;
    let averageDailyUse = planLimit / 30;  
    let exceededUse = usage / day;
    let overallExceededUse = (exceededUse.toFixed(2) * 30) - planLimit;
    let usageGoal = (planLimit - usage) / daysRemaining;
    if (exceededUse - averageDailyUse > 0) {
        console.log(`${day} days used, ${daysRemaining} days remaining \n
        Average daily use: ${averageDailyUse.toFixed(3)}/Day \n
        You are EXCEEDING your average daily use ${exceededUse.toFixed(2)} GB/day, \n
        continuing this high usage, you'll exceed your data plan by ${overallExceededUse.toFixed(1)} GB. \n
        To stay below your data plan, use no more than ${usageGoal.toFixed(2)} GB/day.`); 

    } else if (exceededUse - averageDailyUse < 0) {
        console.log(`${day} days used, ${daysRemaining} days remaining \n
        Average daily use: ${averageDailyUse.toFixed(3)}/Day \n
        You are UNDER your average daily use ${exceededUse.toFixed(2)} GB/day, \n
        continuing this usage, you'll be under your data plan by ${Math.abs(overallExceededUse.toFixed(1))} GB. `); 
    }
    else {
        console.log(`Your average daily use is ${averageDailyUse.toFixed(2)}, at this rate you will be at your \n
        monthly usage by the end of the month.`);
    }
}
dataPlanStatus(100, 15, 56)

