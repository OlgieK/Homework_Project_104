// random value generated
var y = Math.floor(Math.random() * 10 + 1);
  
// counting the number of guesses
var number_of_guesses = 0;
// made for correct Guess
function submit()
{
    var x = document.getElementById("guessField").value;
    console.log(x);
    if(x == y)
    {
       alert("Congratulations, You have guessed the number in " + number_of_guesses + " guesses!");
       number_of_guesses = 1;
    }
    else if(x > y)
    {
        number_of_guesses++;
        guesses_left = 3 - number_of_guesses;
        alert("Oops, try a smaller number. You have " + guesses_left + " left.");
    }
    else
    {
        number_of_guesses++;
        guesses_left = 3 - number_of_guesses;
        alert("Oops, try a bigger number. You have " + guesses_left + " left.")
    }

    if(number_of_guesses == 3)
    {
        alert("Oops, sorry. You have run out of guesses. The number was " + y + " .");
    }
}
  
// function for number guessed by user    
function playAgain()
{
    y = Math.floor(Math.random() * 10 + 1);
} 
