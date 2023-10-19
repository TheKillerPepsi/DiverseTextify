function GenderIT() {

    const nongendered = ["Gerätewart", "Abteilungsleiter", "Unbekannter"];
    const gendered = ["Geräteaufsicht", "Abteilungsleitung", "unbekannte Person" ];


        //read the input field
    let input = document.getElementById('input_field').value;
    // convert to a string
    String(input);
    //convert string into array
    const stringArray = input.split(" ");
    stringArray.forEach(e=>{ //für jedes einzelne Element e in meinem Array

        x = 0

        while ( x < nongendered.length){  //tue dies, solange x nicht kleiner ist als die Länge
           if (e == nongendered[x]) { //Wenn e
                const indexStringArray = stringArray.indexOf(e);
                stringArray[indexStringArray] = gendered[x];
                
                };
            x++
        };
    
    });
        
    //convert array back to string
    const finalString = stringArray.join(" ");
    console.log(finalString);
    document.getElementById('try').innerHTML=finalString;



}
