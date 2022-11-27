//Username
let username = "";

const ask = prompt("Enter username? yes/no")
    if (ask == "yes"){
        username = prompt("Username:");
    }
ask == "yes" ? console.log("Hellow " + username) : console.log("Hellow");

//Question
const userQuestion = prompt("Write a question for the magic eight ball:")

console.log(userQuestion);

//Magic Eight Ball
let eightBall = "";
const randomNumber = Math.floor(Math.random() * 8);
switch (randomNumber){
    case 0: 
    eightBall = 'It is certain'
    break;
    case 1: 
    eightBall = 'It is decidedly so'
    break;
    case 2: 
    eightBall = 'Reply hazy try again'
    break;
    case 3: 
    eightBall = 'Cannot predict now'
    break;
    case 4: 
    eightBall = 'Do not count on it'
    break;
    case 5: 
    eightBall = 'My sources say no'
    break;
    case 6: 
    eightBall = 'Outlook not so good'
    break;
    case 7: 
    eightBall = 'Signs point to yes'
    break;
}

console.log(eightBall);
