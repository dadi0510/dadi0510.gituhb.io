document.getElementById("forma-gumb").addEventListener("click", function () {
    var ime = document.getElementById("ime").value.trim();
    var email = document.getElementById("email").value.trim();
    var poruka = document.getElementById("poruka").value.trim();

    var emailProvjera = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (ime === "") {
        alert("Upiši ime i prezime.");
        return;
    }

    if (email === "") {
        alert("Upiši email adresu.");
        return;
    }

    if (!emailProvjera.test(email)) {
        alert("Upiši ispravnu email adresu.");
        return;
    }

    if (poruka === "") {
        alert("Upiši poruku.");
        return;
    }

    if (poruka.length < 32) {
        alert("Poruka mora imati najmanje 32 znaka.");
        return;
    }

    alert("Poruka je uspješno poslana.");
});