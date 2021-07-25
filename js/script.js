const words = ["кот", "собака", "автобус", "макака"]
const word = words[Math.floor(Math.random() * words.length)] ;

const ansverArray = []
for (let i = 0; i < word.length; i++) {
    ansverArray[i] = "_"
}

let remainingLetters = word.length;
console.log(remainingLetters);

while (remainingLetters > 0) {
    alert(ansverArray.join(" "))
    let guess = prompt("Угадайте букву!");
    guess = guess.toLowerCase();

    if (guess === null) {
        break;
    } else if (guess.length > 1) {
        alert("Прошу Вас ввести одну букву");
    } else {
        for (let i = 0; i < word.length; i++){
            if (word[i] === guess) {
                ansverArray[i] = guess;
                remainingLetters -= 1;
            }
        }
    }
}

alert("Было загадано слово "  + word)