function hideElementById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('hidden');

}


function showElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')

}
function getTexElementValueById(elementId){
    const element =document.getElementById(elementId)
    const elementValueText = element.innerText;
    const value =parseInt(elementValueText)
    return value;
}


function setTextElementValueById(elementId, value){
    const element =document.getElementById(elementId)
    element.innerText = value;
    return value;
 
}

function getElementTextById(elementId){
    const element =document.getElementById(elementId)
    const text =element.innerText
    return text;

}

function setBackgroundColorById(elementId){
    const element =document.getElementById(elementId)
    element.classList.add('bg-orange-400');

}


function removeBackgroundById(elementId){
    const element= document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
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