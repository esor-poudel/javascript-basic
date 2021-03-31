//challenge 1 years in days
function birthInDays() {
    var birth = prompt('what is your birth year?');
    var ageInDays = (2020 - birth) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' ' + 'days old')
    h1.setAttribute('id', 'birthInDays');
    h1.appendChild(textAnswer);
    document.getElementById('result').appendChild(h1);

}

function reset() {
    document.getElementById('birthInDays').remove();
}
//challenge 3 cat generator 
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://placekitten.com/g/200/300";
    div.appendChild(image);
}

//challenge 3 rock, paper, scissors

function rpsGame(yourchoice) {
    // console.log(yourchoice);
    var humanChoice, botChoice;
    humanChoice = yourchoice.id;
    botChoice = numberToChoice(randToRpsInt());
    // console.log('computer choice ' + botChoice);
    results = decideWinner(humanChoice, botChoice);
    // console.log(results);
    var message = yourMessage(results);
    //  console.log(message);
    rpsFront(yourchoice.id, botChoice, message)


}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {
            'scissor': 1,
            'rock': 0.5,
            'paper': 0
        },
        'paper': {
            'scissor': 0,
            'rock': 1,
            'paper': 0.5
        },
        'scissor': {
            'scissor': 0.5,
            'rock': 0,
            'paper': 1
        }
    }
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore]
}

function yourMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {
            'message': 'you lost',
            'color': 'red'
        };
    } else if (yourScore === 0.5) {
        return {
            'message': 'you tied',
            'color': 'yellow'
        };
    } else {
        return {
            'message': 'you win',
            'color': 'green'
        };
    }

}

function rpsFront(humanchoiceimage, botchoiceimage, finalmessage) {
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanchoiceimage] + "'height=150 width=150 style= 'box-shadow: 10px 10px 50px rgb(38, 0, 255)';>"
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    messageDiv.innerHTML = "<h1 style='color: " + finalmessage['color'] + "; font-size:60px; padding=30px; '>" + finalmessage['message'] + "</h1>"
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    botDiv.innerHTML = "<img src='" + imageDatabase[botchoiceimage] + "'height=150 width=150 style= 'box-shadow: 10px 10px 50px rgb(255, 0, 0, 0.7)';>"
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}