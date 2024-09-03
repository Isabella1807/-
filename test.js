const castDiceContainer = document.getElementById("castDiceContainer");
const savedDiceContainer = document.getElementById("savedDices");

const alleMineTerninger = [0, 0, 0, 0, 0, 0];
const gemteTerninger = [];

const rollDice = () => {
    for (let i = 0; i < alleMineTerninger.length; i++) {
        alleMineTerninger[i] = randomDice()
    }

    console.log(alleMineTerninger)
    showDice()
}

const dicePicker = (diceIndex) => {
    gemteTerninger.push(alleMineTerninger[diceIndex])
    alleMineTerninger.splice(diceIndex, 1)
    showDice()
}

const showDice = () => {
    castDiceContainer.innerHTML = ""
    savedDiceContainer.innerHTML = ""
    for (let i = 0; i < gemteTerninger.length; i++) {
        savedDiceContainer.innerHTML += `<div class="dices">${gemteTerninger[i]}</div>`;
    }

    for (let i = 0; i < alleMineTerninger.length; i++) {
        castDiceContainer.innerHTML += `<div class="dices" onclick="dicePicker(${i})">${alleMineTerninger[i]}</div>`;
    }
}

const randomDice = () => {

    const num = Math.floor(Math.random() * 6) + 1
    return num
}

