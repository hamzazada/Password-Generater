const characters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={}[],|:;<>.?/"];
let passwordLength = 15;
let input = document.getElementById('inp');

function randomCharacter() {
    let random = Math.floor(Math.random() * characters.length);
    return characters[random];
}

function generatePassword() {
    let randomPass = "";
    for (let i = 0; i < passwordLength; i++) {
        randomPass += randomCharacter();
    }
    input.value = randomPass;
}


