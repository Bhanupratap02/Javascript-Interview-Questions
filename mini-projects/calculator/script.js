const calclInput = document.getElementById("calc-input");
function handleButtonClick(el){
    // console.log(el.innerText)
    if(el.innerText === "="){
        calclInput.value = eval(calclInput.value)
        return;
    } else if(el.innerText === "C") {
       calclInput.value = null
       return;
    }
    calclInput.value += el.innerText;
    console.log(typeof calclInput.value);
    // innerText vs textContent

}