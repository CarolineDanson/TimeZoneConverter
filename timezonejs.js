let result;
let mt;

d = new Date();
localTime = d.getTime();

var lokaltid = new Date();
lokaltid.setHours(lokaltid.getHours());

localOffset = d.getTimezoneOffset() * 60000;
document.getElementById("mt").innerHTML = lokaltid;

function GetSelectedValue() {
    var b = document.getElementById("timezone2");
    var result3 = b.options[b.selectedIndex].value;

    // create Date object for current location
    d = new Date();

    // convert to msec since Jan 1 1970
    localTime = d.getTime();

    // obtain local UTC offset and convert to msec
    localOffset = d.getTimezoneOffset() * 60000;

    // obtain UTC time in msec
    utc = localTime + localOffset;

    timez = utc + (3600000 * (result3));

    // convert msec value to date string
    nd = new Date(timez);
    //document.writeln("Bombay time is " + nd.toLocaleString() + "<br>");

    // create Date object for current location
    d = new Date();
   
    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
   
    // create new Date object for different city
    // using supplied offset
    nd = new Date(utc + (3600000*(result3)));
   
    // return time as a string
    //return "The local time in " + city + " is " + nd.toLocaleString();

    document.getElementById("result").innerHTML = nd.toLocaleString();

}


