const prompt = require("prompt-sync")();

// Beispiel-Blacklist für unerwünschte Wörter
var badCharacters = ["<", ">", "script"];

// Benutzereingabe
var userInput = prompt("Geben Sie einen Text ein:");

// Überprüfen, ob die Eingabe in der Blacklist enthalten ist
if (containsBadCharacters(userInput)) {
    console.log("Die Eingabe enthält unerwünschte Wörter. Bitte überprüfen Sie Ihren Text.");
} else {
    console.log("Die Eingabe ist in Ordnung.");
}

// Funktion, um zu überprüfen, ob die Eingabe unerwünschte Wörter enthält
function containsBadCharacters(input) {
    for (var i = 0; i < badCharacters.length; i++) {
        if (input.includes(badCharacters[i])) {
            return true;
        }
    }
    return false;
}

    