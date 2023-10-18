const nongendered = ["Gerätewart", "Abteilungsleiter", "Unbekannter"];
const gendered = ["Geräteaufsicht", "Abteilungsleitung", "unbekannte Person" ];
const prompt = require("prompt-sync")();


console.log("Please input your text");
const input = prompt();
//console.log(input);

//convert string into array
const myArray = input.split(" ");
// console.log(myArray);
// console.log(nongendered);
// console.log(gendered);

    myArray.forEach(e=>{

        // nongendered.indexOf(e)
        // console.log(e);
        x = 0

        while ( x < nongendered.length){
            if (e == nongendered[x]) {
                console.log("non gendered word! " + e)
                }
            x++
        }

    
        })
