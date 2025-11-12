const passwordToWrite = document.querySelector(".code");
const btn = document.querySelector(".generate_password");
const passwordStrength = document.querySelector(".feebback_passwordColor");
const feedBack = document.querySelector(".feedback_password");
const symbols = document.getElementById("symbols");
const numbers = document.getElementById("numbers");
const lowerCase = document.getElementById("lowercase");
const upperCase = document.getElementById("uppercase");
const rangeOfPassword = document.getElementById("length");
const lengthOfPasswordSpan = document.querySelector(".length");
const copyButton = document.querySelector(".fa-copy");


// Character sets
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "0123456789";
const symbolCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?/";

// btn.addEventListener("click", ()=>{

// });

rangeOfPassword.addEventListener("input", (e)=>{
    e.preventDefault();
    lengthOfPasswordSpan.innerHTML = rangeOfPassword.value;

})

btn.addEventListener("click", ()=>{

    const length = Number(rangeOfPassword.value);
    const inUpper = upperCase.checked;
    const inLower = lowerCase.checked;
    const inNum = numbers.checked;
    const inSymbol = symbols.checked;

    // array for the feedback 
    const arrOfFeedBack = [inUpper, inNum, inLower, inSymbol];

    if(inUpper || inLower || inNum || inSymbol){
        
        let password = createRandomPassword(length, inUpper, inLower, inNum, inSymbol);
        passwordToWrite.textContent = password;
    }
    else{
        alert("Please checked at least on box");
    }

    feedBackDiv(arrOfFeedBack);


})

copyButton.addEventListener("click", ()=>{
    if(!passwordToWrite.textContent) return;

    navigator.clipboard.writeText(passwordToWrite.textContent).then(()=>{
        showSuccess()
    }).catch((error)=>{
        console.log(`Could not copy ${error}`);
    })
})


function createRandomPassword(length, inUpper, inLower, inNum, inSymbol){
    let allChar = '';

    if(inUpper) allChar += uppercaseLetters;
    if(inLower) allChar += lowercaseLetters;
    if(inNum) allChar += numberCharacters;
    if(inSymbol) allChar += symbolCharacters;

    let password = "";

    for(let i =0 ; i < length; i++){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    return password;
}

function feedBackDiv (arrOfFeedBack){
    // feedback mark
    let numberOfFeedBack = 0;

    arrOfFeedBack.forEach(element => {
        if(element){
            numberOfFeedBack++;
        }
    });

        let divOfFeed = document.querySelector(".feebback_passwordColor");
    if(numberOfFeedBack === 1){
        let divOfFeed = document.querySelector(".feebback_passwordColor");
        divOfFeed.className = ("feebback_passwordColor weak");
        divOfFeed.style.width = "25%";
    }
    else if(numberOfFeedBack === 2){
        divOfFeed.className = ("feebback_passwordColor medium");
        divOfFeed.style.width = "50%";
    }
    else if(numberOfFeedBack === 3){
        divOfFeed.className = ("feebback_passwordColor medium");
        divOfFeed.style.width = "75%";
    }
    else if (numberOfFeedBack === 4){
        divOfFeed.className = ("feebback_passwordColor strong")
        divOfFeed.style.width = "100%";
    }
    else{
        divOfFeed.style.width = "0";
    }
}


function showSuccess(){
    copyButton.classList.remove("far", "fa-copy");
    copyButton.classList.add("fas", "fa-check");
    copyButton.style.color = "#48bb78";

  setTimeout(() => {
    copyButton.classList.remove("fas", "fa-check");
    copyButton.classList.add("far", "fa-copy");
    copyButton.style.color = "";
  }, 1500);
}