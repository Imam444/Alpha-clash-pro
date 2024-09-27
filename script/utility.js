function hideElementById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('hidden');

}


function showElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')

}

function getARandomAlphabet (){
    const alphabetString ='a b c d e f g h i j k l m n p q r t s u v w x y z';
    const alphabets = alphabetString.split(' ');
   
    

    const randomNumber = Math.random() * 25;
    const index =Math.round(randomNumber)
    
    const alphabet =alphabets[index];
    
    console.log(index, alphabet);
    return alphabet
}