function handleKeyboardKeyUpEvent(event){
    const playerPress = event.key;
    console.log('player Press', playerPress)

    const currentAlphabetElement =document.getElementById('current-alphabet');
    const currentAlphabet =currentAlphabetElement.innerText
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPress, expectedAlphabet)

    if(playerPress === expectedAlphabet){
        console.log('you get a point')
        // update score
        const currentScoreElement = document.getElementById('current-score')
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore)

        const newSore=currentScore +1;

        currentScoreElement.innerText=newSore

        
        // start a new round
        removeBackgroundById(expectedAlphabet)
        continueGame();
    }
    else{
        const currentLifeElement =document.getElementById('current-life')
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText)
        console.log('you missed. you lost a life')

        const newLife = currentLife - 1;
        currentLifeElement.innerText= newLife;
        
        if( newLife === 0){
         gameOver();
        }
    }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent)


function continueGame (){
    const alphabet =getARandomAlphabet();
    // console.log('your random alphabet',alphabet)

    const currentAlphabetElement =document.getElementById('current-alphabet')
    currentAlphabetElement.innerText =alphabet;

    setBackgroundColorById(alphabet);

}

function play(){
   hideElementById('home');
   hideElementById('final-score');
   showElementById('play-ground');

 // reset score and life
 setTextElementValueById( 'current-life',5);
 setTextElementValueById('current-score')

   continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score')
}