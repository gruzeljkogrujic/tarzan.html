var fotografije = [
    slike1/crni.jpg,
    slike1/crveni.jpg,
    slike1/sivi.jpg,
    slike2/foto1.jpg,
    slike2/foto2.jpg,
];

var slajder = document.getElementById("slajder");
slajder.innerHTML = "<img src=' " + fotografije[0] + " '>";
var brojac = 1;
setInterval(function () {
    slajder.innerHTML = "<img src=' " + fotografije[brojac] + " '>";
    brojac++;
    if (brojac == fotografije.length) brojac = 0;
}, 2000);
