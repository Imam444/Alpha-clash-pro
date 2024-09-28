

function continueGame (){
    const alphabet =getARandomAlphabet();
    console.log('your random alphabet',alphabet)

    const currentAlphabetElement =document.getElementById('current-alphabet')
    currentAlphabetElement.innerText =alphabet;

    setBackgroundColorByID(alphabet);

}

function play(){
   hideElementById('home')
   showElementById('play-ground')
   continueGame()
}

