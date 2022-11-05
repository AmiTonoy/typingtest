let wordCounter  = document.querySelector('.words');
textArea.addEventListener('input',()=>{
let wordArray = textArea.value.split(" ");
(wordArray.length <10) ? wordCounter.innerHTML= `0${wordArray.length -1}` : wordCounter.innerHTML = wordArray.length -1;
});