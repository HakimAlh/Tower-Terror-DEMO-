/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
// const words = [{words: 'Tower', char:5} ,
// {words: 'Terror', char:6}
// ]
const words = ['TOWER' ,'TERROR','FIGHTING']
console.log(words.length)
let chosenWord = ''
let playerTried = ''
let wordCount = ''
// let playerTries 
/*------------------------ Cached Element References ------------------------*/
const letterElement = document.querySelector('.Letters-Rows')
const btnElement = document.querySelectorAll('.Letters')
const choiceElement = document.querySelector('#Choice')
const wordInput = document.querySelector('.Word')
// console.log(wordInput)
// console.log(choiceElement)
/*-------------------------------- Functions --------------------------------*/
const wordRandomizer = () => {
    let index = Math.floor(Math.random() * words.length)
    console.log(index)
    chosenWord = words[index]
    console.log(chosenWord)
    const chars = chosenWord.split('');
    console.log(chars)
    for (i=0; i<chars.length; i++){
        if (chars.length > i++) 
            break;
    wordCount = wordInput.appendChild(document.createElement,"div");
        // chars.forEach(char.length)
        // return chars.length.forEach((count) =>
        //     console.log(count)
        // );
    }
}



const clickedBtn = (event) => {
(event.target.classlist = '.Letters') 
event.target.id
if (clickedBtn != words)

console.log(event.target.id)
 } 

//  for (let i =0; i < 9; i++){
//     if (chosenWord > 10) break;

//  }
//  console.log(i)


// word.words.forEach(word() => {
//     (if word.char === ))
// return  document.createElement('input') {
//     input.textContent = '_'
    
// }
// fn to start the game which is the init (intialization) function
function init(){
    wordRandomizer() //Intitalizes the wordRandomizer Function
    // playerTries()
}

init()
/*----------------------------- Event Listeners -----------------------------*/
letterElement.addEventListener('click', clickedBtn)

/*----------------------------- SCRAPPED CODE -----------------------------*/
// const words = ['Tower','Drawing','Terror','Block']
// const words = [{Word:'Tower' , letter: T: ,'T' }] 
// function letterElement (){
//     if letterElement === 
//     }
// function words(){
    
// }

// function btnFunction () {
//     if (btnElement =
//     return inputBtn.textContent = 'A'
// }
// function btnFunction = () => {
// (btnElement = 'click')
// if (btnElement === word1Element)
// return 


// }

// let words = []

// words = Math.floor(Math.random())
// words.ForEach(word) => {
//     const inputElement = document.createElement('input'); {
// inputElement.textContent = '_'
//     } }



// function playerTries() { //Function for the number of tries the player makes
// if (playerTried != wordRandomizer)
//     document.createElement = 'h1'
//    h1.textContent = "hello"
// console.log(`${clickedBtn}`)
// }
// Set = 0;
// if 5 
// return loss  
// = document.createElement = 'Choices'