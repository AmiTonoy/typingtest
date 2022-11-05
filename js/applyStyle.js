let characterIndex = 0;
function initTyping(){
    const characters = automaticText.querySelectorAll('span');
    let typedCharacter = textArea.value.split('')[characterIndex]
    if(characters[characterIndex].innerText === typedCharacter){
        console.log('working')
        characters[characterIndex].classList.add('correct')
    }else{
        // console.log('else')
        characters[characterIndex].classList.add('wrong')
    }
    characterIndex++
    console.log(characterIndex)
    // if(typedCharacter == null){
    //     characterIndex--;
    //     characters[characterIndex].classList.remove('correct','incorrect')
    // }else{
    // }
}










textArea.addEventListener('input',initTyping);
