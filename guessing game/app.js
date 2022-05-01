let guessResults = document.querySelector('#results')
const guessCountArea = document.querySelector('#guesses')
const fTryArea = document.querySelector('#firstTry')
const correctArea = document.querySelector('#correct')
const totGuessesArea = document.querySelector('#total')
const luckArea = document.querySelector('#luck')
let guessCount = 0
let fTry = 0
let numRight = 0


let totGuesses = 0

document.querySelector('#rButton').addEventListener('click', ()=>{
    location.reload()
})

document.querySelectorAll('.box').forEach(item =>{
    item.addEventListener('click', e =>{
        let randNum = Math.floor(Math.random() * 6) + 1
        const userChoice = parseInt(e.target.textContent) 
        
        totGuesses++
        totGuessesArea.innerHTML = `Total guesses: ${totGuesses}`
        

        if(userChoice === randNum && guessCount === 0){
            guessResults.innerHTML = `You guessed: ${userChoice}.<br>
             The number was ${randNum}.<br>
              It took you ${guessCount + 1} try.<br>
              You Win!`, guessResults.style.color='green', guessCount = 0, fTry++, 
              fTryArea.innerHTML = `Number of first tries: ${fTry}`, numRight++
        } 
        
        else if(userChoice === randNum){
            guessResults.innerHTML = `You guessed: ${userChoice}.<br>
             The number was ${randNum}.<br>
              It took you ${guessCount + 1} tries.<br>
              You Win!`, guessResults.style.color='green', guessCount = 0, numRight++
        } 
        
        else{
            guessResults.innerHTML = `You guessed: ${userChoice}<br>
             The number was ${randNum}<br>
              You Lose!`, guessResults.style.color='red', guessCount++
        }
        
        guessCountArea.innerHTML = `Current guesses: ${guessCount}` 
        correctArea.innerHTML = `Correct guesses: ${numRight}`
        const guessPercent =  (numRight / totGuesses) *100
        luckArea.innerHTML = `Percentage of correct guesses: ${Math.round(100*guessPercent) / 100}%`

})
})
