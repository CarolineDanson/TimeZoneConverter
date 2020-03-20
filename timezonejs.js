let result;

let mt;

d = new Date();

// convert to msec since Jan 1 1970
localTime = d.getTime();

var lokaltid = new Date();
lokaltid.setHours(lokaltid.getHours());

// obtain local UTC offset and convert to msec
localOffset = d.getTimezoneOffset() * 60000;
document.getElementById("mt").innerHTML = lokaltid;



function GetSelectedValue() {
    //var e = document.getElementById("timezone1");
    var b = document.getElementById("timezone2");
    //var result2 = e.options[e.selectedIndex].value;
    var result3 = b.options[b.selectedIndex].value;
    //var sum = result2 + result3;



    /*var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();

    var lokaltid = new Date();
    lokaltid.setHours(lokaltid.getHours());

    var d2 = lokaltid.setHours(lokaltid.getHours() - Date.parse(result3));
    //d2.setHours(d2.getHours() - result3);*/

    // create Date object for current location
    d = new Date();
    //Express this local time as the number of milliseconds since Jan. 1, 1970, by invoking the Date()object's getTime() method:

    // convert to msec since Jan 1 1970
    localTime = d.getTime();

    // obtain local UTC offset and convert to msec
    localOffset = d.getTimezoneOffset() * 60000;

    // obtain UTC time in msec
    utc = localTime + localOffset;

    // obtain and add destination's UTC time offset
    // for example, Bombay
    // which is UTC + 5.5 hours
    //offset = result3;
    bombay = utc + (3600000 * (result3));

    // convert msec value to date string
    nd = new Date(bombay);
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

    //document.getElementById("result").innerHTML = result2;
}


function calcTimeZones() {

    /*// create Date object for current location
     let d = new Date();
 
     // convert to msec
     // add local time zone offset
     // get UTC time in msec
     utc1 = d.getTime() + (d.getTimezoneOffset() * 60000);
     utc2 = d.getTime() + (d.getTimezoneOffset() * 60000);
     let td = (utc1 / 3600000) - (utc2 / 3600000);
     // create new Date object for different city
     // using supplied offset
     let nd = new Date((utc1 + (3600000 * offset) - (utc2 + (3600000 * offset))));
 
     // return time as a string
     return document.getElementById("result").innerText = "The time difference between" + city1 + " & " + city2 + " is " +(td).toFixed(2);*/
}


function calcTimeZones(city, offset) {

    /*// create Date object for current location
    let d = new Date();

    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    let utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    let nd = new Date(utc + (3600000 * offset));

    // return time as a string
    return document.getElementById("result").innerText = "The local time in " + city + " is " + nd.toLocaleString();*/
}

