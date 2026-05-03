document.getElementById("forma-gumb").addEventListener("click", function () {
    var ime = document.getElementById("ime").value;
    var email = document.getElementById("email").value;
    var poruka = document.getElementById("poruka").value;

    if (!ime) {
        alert("Upiši ime i prezime.");
        return;
    }
    if (!email) {
        alert("Upiši email adresu.");
        return;
    }
    if (poruka.length < 20) {
        alert("Poruka mora imati najmanje 32 znaka.");
        return;
    }
});
