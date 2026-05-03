document.getElementById("forma-gumb").addEventListener("click", function () {
    var ime = document.getElementById("ime").value;
    var naslov = document.getElementById("naslov").value;
    var poruka = document.getElementById("poruka").value;

    if (!ime) {
        alert("Upiši ime i prezime.");
        return;
    }
    if (!naslov) {
        alert("Upiši naslov poruke.");
        return;
    }
    if (poruka.length < 20) {
        alert("Poruka mora imati najmanje 32 znaka.");
        return;
    }
});
