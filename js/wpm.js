// realtime 
textArea.addEventListener('input',()=>{
    let wpmText = document.querySelector('.wpm');
    let wordArray = textArea.value.split(" ");
    wpmText.innerHTML = wordArray.length * 4 
})