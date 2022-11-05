let wordList = [
    'hello bangladesh bangla bangabandhu',
    'i love you toli'
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