const nongendered = ["Gerätewart", "Abteilungsleiter", "Unbekannter"];
const gendered = ["Geräteaufsicht", "Abteilungsleitung", "unbekannte Person" ];
const prompt = require("prompt-sync")();


console.log("Please input your text");
const input = prompt();
//console.log(input);

//convert string into array
const stringArray = input.split(" ");
// console.log(myArray);
// console.log(nongendered);
// console.log(gendered);

    stringArray.forEach(e=>{ //für jedes einzelne Element e in meinem Array

        // nongendered.indexOf(e)
        // console.log(e);
        x = 0

        while ( x < nongendered.length){  //tue dies, solange x nicht kleiner ist als die Länge
           if (e == nongendered[x]) { //Wenn e

            console.log("non gendered word! " + e);
            // console.log("Change it to: " + gendered[x]);
            // const ersetzen = stringArray.indexOf(e);
            // console.log("stringArray.indexOf(e): " + ersetzen);
            // console.log("gendered[ersetzen]= " + gendered[ersetzen]);
            // stringArray[ersetzen] = gendered[ersetzen]
            e = gendered[x]
            console.log("---------------------------------------------------------------------------------------------------");
                
                };
            x++
        };
    
        });
        console.log(" New Text: " + stringArray)

