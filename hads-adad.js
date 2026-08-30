const guessInput = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const message = document.getElementById("message");
const newGameButton = document.getElementById("newGameButton");



let randomNumber = Math.floor(Math.random() * 100) + 1;



function checkGuess(){

    const userGuess = Number(guessInput.value);

    if (guessInput.value === ""){
        message.textContent = "لطفا یک عدد وارد کنید";
        return;
    }

    if (userGuess < randomNumber){
        message.textContent = "عدد مورد نظر بزرگ تر است";
    }

    else if (userGuess > randomNumber){
        message.textContent = "عدد مورد نظر کوچک تر است";
    }

    else {
        message.textContent = "آفرین درست حدس زدی";
        newGameButton.style.display = "block";
        checkButton.disabled = true;
    }
}



checkButton.addEventListener("click", checkGuess);



newGameButton.addEventListener("click", function(){

    randomNumber = Math.floor(Math.random() * 100) + 1;

    guessInput.value = "";

    message.textContent = "";

    checkButton.disabled = false;

    newGameButton.style.display = "none";
});