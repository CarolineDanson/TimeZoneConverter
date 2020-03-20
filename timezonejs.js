/*//Objekt med nuvarande tid
let date = new Date();
//Lokaltid sedan Jan.1 1970
let localTime = date.getTime();
//Tidszon konverterat till millisekunder
let localOffset = date.getTimezoneOffset() * 60000;
//Få nuvarande UTC tid.
let utc = localTime + localOffset;

//UTC variabeln
let offset;
//Lägger till destinationens tidzon till utc i millisekunder.
let utc = utc + (3600000 * offset);
//Konverterar UTC i millisec till något läsbart
let nd = new Date();
document.writeln("Bombay time is " + nd.toLocaleString() + "<br>");*/

let city1 = document.getElementById("timezone").value;
let utc1 = document.getElementById("city1").value;

let city2 = document.getElementById("city2").value;
let utc2 = document.getElementById("utc2").value;

let result;


/*function GetSelectedText(){
    var e = document.getElementById("timezone1");
    var result = e.options[e.selectedIndex].text;
    
    document.getElementById("result").innerHTML = result;
}*/

function GetSelectedValue(){
    var e = document.getElementById("timezone1");
    var b = document.getElementById("timezone2");
    var result2 = e.options[e.selectedIndex].value;
    var result3 = b.options[e.selectedIndex].value;
    var sum = result2 + result3;
    
    document.getElementById("result").innerHTML = result2;
}


function calcTimeZones() {

   /* // create Date object for current location
    let d = new Date();

    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    utc1 = d.getTime() + (d.getTimezoneOffset() * 60000);
    utc2 = d.getTime() + (d.getTimezoneOffset() * 60000);
    let td = (utc1 / 3600000) - (utc2 / 3600000);
    // create new Date object for different city
    // using supplied offset
    //let nd = new Date((utc1 + (3600000 * offset) - (utc2 + (3600000 * offset)));

    // return time as a string
    return document.getElementById("result").innerText = "The time difference between" + city1 + " & " + city2 + " is " +(td).toFixed(2);*/
}


/*function calcTimeZones(city, offset) {

        // create Date object for current location
        let d = new Date();

        // convert to msec
        // add local time zone offset
        // get UTC time in msec
        let utc = d.getTime() + (d.getTimezoneOffset() * 60000);

        // create new Date object for different city
        // using supplied offset
        let nd = new Date(utc + (3600000 * offset));

        // return time as a string
        return document.getElementById("result").innerText = "The local time in " + city + " is " + nd.toLocaleString();
}*/

