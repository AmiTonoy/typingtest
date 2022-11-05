let wordList = [
    'hello hi bye bye',
    'i love you toli',
    'Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.',
    'What we have once enjoyed we can never lose. All that we love deeply becomes a part of us.',
    'Of all forms of caution, caution in love is perhaps the most fatal to true happiness.',
    
]

//random index
let randomIndex = Math.floor(Math.random()*wordList.length);

// console.log(randomIndex);
// console.log(wordList[randomIndex]);
let automaticText = document.querySelector(".automatic")
const letterArray = wordList[randomIndex].split('');
letterArray.forEach((item)=>{
    automaticText.innerHTML += `<span>${item}</span>`
})
