//  function play(){
//    //step-1: hide the home screen.to hide the screen add the class hidden to the home section .
//    const homeSection  = document.getElementById('home-screen');
//    homeSection.classList.add('hidden')
// //    console.log(homeSection.classList);
//    //show the playGround
//    const playGround =document.getElementById('Play-Ground');
//    playGround.classList.remove('hidden');
//  }

//key board button press/////
function handleKeyboardButtonPress(){
  console.log('button pressed');
}
document.addEventListener('keyup', handleKeyboardButtonPress);




function play(){
  hideElementById('home-screen');
  showElementById('Play-Ground');
  const random = getARandomAlphabet();
  document.getElementById('current-alphabet').innerText = random
}

//get or create an alphabet array.....
function getARandomAlphabet(){
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = alphabetString.split('');
  // console.log(alphabets);F

//get a random index between 0 to 25
const randomNumber = Math.random()*25;
const index = Math.round(randomNumber);
const alphabet = alphabets[index];
// console.log(index, alphabet);
return alphabet;
}

//continue game................
function continueGame(){
  //step-1: generate a random alphabet
  const alphabet = getARandomAlphabet();
console.log(alphabet);
  


//set random generate alphabet to show screen
const currentAlphabetElement = document.getElementById('current-alphabet');
currentAlphabetElement.innerText = alphabet;

//set background color
setBackgroundColorBYId(alphabet);

}


function addBackgroundColorById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('bg-orange-400');
}
