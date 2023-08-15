
function calculateHint(secretDigit, guessDigit){

    let correctPos = 0;
    let commonDigits = 0;

    for (let i = 0 ; i < secretDigit.length; i++ ){

        if(secretDigit[i] == guessDigit[i]){
            correctPos++;
        }       
        else if (secretDigit.includes(guessDigit[i])){
            commonDigits++; 
        }
    }

    return `${correctPos}-${commonDigits}`;
}




const args = process.argv.slice(2);
const secretCode = args[0];
const numberOfGuesses = parseInt(args[1]);
const guesses = args.slice(2);

for (let i = 0; i < numberOfGuesses; i++){
    const hint = calculateHint(secretCode, guesses[i]);
    process.stdout.write(hint);

    if (i < numberOfGuesses - 1) {
        process.stdout.write(" ");
    }
}

process.stdout.write("\n");

