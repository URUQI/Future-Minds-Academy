function shfaqImazhin(stina) {
    var imazhi = document.getElementById("imazhi");
    var titulli = document.createElement("h1");
    var linkuImazhit = '';

    // Vendosni adresat e imazheve për secilën stinë
    if (stina === 'vjeshta') {
        linkuImazhit = 'img/vjeshta.jpg';
    } else if (stina === 'dimri') {
        linkuImazhit = 'img/dimri.jpg';
    } else if (stina === 'pranvera') {
        linkuImazhit = 'img/pranvera.jpg';
    } else if (stina === 'vera') {
        linkuImazhit = 'img/vera.jpg';
    } else {
        linkuImazhit = 'default.jpg'; // nëse stina nuk gjendet, shfaqni një imazh default
    }

    // Fshini çdo titull ekzistues dhe imazh në div-in e imazhit
    imazhi.innerHTML = '';

    titulli.textContent = stina.charAt(0).toUpperCase() + stina.slice(1);


    // Shtoni titullin dhe imazhin në div-in e imazhit
    imazhi.appendChild(titulli);

    var img = document.createElement("img");
    img.src = linkuImazhit;
    img.alt = stina;
    imazhi.appendChild(img);

    // Fshi klasën active nga të gjitha lidhjet që nuk janë aktive
    var stinat = document.querySelectorAll("#stinat a");
    stinat.forEach(function (element) {
        if (element.innerHTML.toLowerCase() !== stina) {
            element.classList.remove("active");

        }
    });

    // Shto ose hiq klasën active tek stina e zgjedhur
    var stinaAktive = document.querySelector("#stinat a[href='#'][onclick=\"shfaqImazhin('" + stina + "')\"]");
    stinaAktive.classList.toggle("active");
}