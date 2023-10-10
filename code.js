function GenderIT() {

    const nongendered = ["Gerätewart", "Abteilungsleiter", "Unbekannter"];
    const gendered = ["Geräteaufsicht", "Abteilungsleitung", "unbekannte Person" ];


        //read the input field
    let input = document.getElementById('input_field').value;
    // convert to a string
    String(input);
    //convert string into array
    //es wird bei jedem Leerzeichen gesplittet, die Angabe ist in den Lerzeichen
    const myArray = input.split(" ");
    //document.getElementById("try").innerHTML = myArray[0];

    //mit dem Loop gehe ich durch jedes Wort im Array. in der Console würde jedes Wort ausgeführt werden
    // let i = 0;
    // while (i < myArray.length )
    // {
    //     document.getElementById("try").innerHTML = myArray[i];
    //     i++;
    // }

    let x = 0;
    while (x < myArray.length ) 
    {
        if (myArray[x] == nongendered[x]) {
            document.getElementById("try").innerHTML = "Nongendered Word!" + myArray[x];
        } else {
            document.getElementById("try").innerHTML = "Everything is fine!";
            
        }
        x++;
    }

    


}
