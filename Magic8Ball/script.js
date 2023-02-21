console.log("Checking the link...")

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];
// console.log(randomArrayResponse(lifesAnswers))

function oracle() {
    // return arr[Math.floor(Math.random() * arr.length)] 
    // or
var answer = lifesAnswers(Math.ceil(Math.random() * lifesAnswers.length - 1))
    var output1 = document.querySelector(".output")
    console.log(output1)
    output1.innerText = answer
}

