//Establish letters that can be picked
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Establish word bank
var wordList = ["yavin","endor","mustafar","kamino","coruscant","hoth","tatooine","alderaan","bespin","naboo","dagobah","jakuu","geonosis","kashyyyk","corellia","mon calamari","ryloth","polis massa","dathomir","mygeeto","utapau"];

//Establish variables
var wins = 0;
var losses = 0;
var guessesLeft = 12;
var guesses = [];
var userGuess = null;
var wordAnswer = wordList[Math.floor(Math.random() * wordList.length)];

//I actually don't know what this is doing. Clipped from an online example.
var html = "<p><h1>";


//----------------------
// FUNCTIONS
//----------------------

function turnWordIntoAray() {
    for (var i = 0, j = 0; i < wordAnswer.length; i++) {
        arrayFromWord[j] = wordAnswer.charAt(i);
        j++
        if (wordAnswer.charAt(i) != " ") {
            arrayFromWord[j] = false;
        } 
        else {
            arrayFromWord[j] = true;
        }
        j++;
    }
}

// function for debugging via console logging used during coding
function consoleLogs() {
	console.log("wins: " + wins + "\n" + "losses: " + losses + "\n");
	console.log("guessesLeft: " + guessesLeft + "\n");
	console.log("guessesSoFar: " + guessesSoFar + "\n");
	console.log("wordToBeGuessed: " + wordToBeGuessed + "\n");
	console.log("arrayFromWord: " + arrayFromWord + "\n");
	console.log("--------------------------------");
}

//Endgame function

function resetGame() {
    guessesLeft = 12;
    guesses = [];
    wordAnswer = wordList[Math.floor(Math.random() * wordList.length)];
    arrayFromWord = [];
    turnWordIntoArray();
    //displays game instructions
    var htmlInstructions="<p><h3>Press any key to begin guessing</p></h3>";
	document.querySelector("#instructions").innerHTML = htmlInstructions;
    var htmlGameInitial = "<p><h1>";
    //sets word to be guesses onscreen as dashes 
    for (var i = 0; i < wordToBeGuessed.length; i++) {
		if (wordToBeGuessed.charAt(i) == " ") {
			htmlGameInitial += "&nbsp;&nbsp;";
		} else {
			htmlGameInitial += "_&nbsp;";
		}
    }
    // displays game stats
    htmlGameInitial += "</h1></p>"
	document.querySelector("#game").innerHTML = htmlGameInitial;
	var htmlStats = "<p><h3>" + "Wins: " + wins + " Losses: " + losses + " Guesses Left : " + guessesLeft + "</h3></p>";
	document.querySelector("#stats").innerHTML = htmlStats;
}

//function to display progress

function gameProgress() {
    for (i = 0, j = 0; i < (arrayFromWord.length / 2); i++) {
        if (arrayFromWord[j+1] = true) {
            html += arrayFromWord[j];
        }
        else  {
            html += " ";
        }
        html += "&nbsp;"; 
        j = j+2;
    }
    html += "</h1></p>"
    document.querySelector("#game").innerHTML = html;
    htmlStats = "<p><h3>Wins: " + wins + " Losses: " + losses + " Guesses Left : " + guessesLeft + "</h3></p>";
    document.querySelector("#stats").innerHTML = htmlStats;
    
    htmlGuesses = "<p><h3>"
    for (i = 0; i < guesses.length; i++) {
        htmlGuesses += guesses[i] + "&nbsp;";
    }
    htmlGuesses += "</h3></p>";
    document.querySelector("#guesses").innerHTML = htmlGuesses;
}