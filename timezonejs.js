date = new Date();
localTime = date.getTime();
localOffset = date.getTimezoneOffset() * 60000;
utc = localTime + localOffset;

offset = 5.5;  
utc = utc + (3600000*offset);
nd = new Date();
document.writeln("Bombay time is " + nd.toLocaleString() + "<br>");