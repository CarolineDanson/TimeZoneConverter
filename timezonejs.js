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



function calcTimeZones(city, offset) {

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
        return "The local time in " + city + " is " + nd.toLocaleString()
}

