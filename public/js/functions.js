export { exo1, exo2, exo3, exo4, exo5, exo6 }

import { divCalculatrice, divReponse, calcul, inputCalcule, divChiffre, btnUn, btnDeux, btnTrois, btnQuatre, btnCinq, btnSix, btnSept, btnHuit, btnNeuf, btnEfface, btnZero, btnEgale, divOperateur, btnPlus, btnMoins, btnFois, btnDiviser } from "./styleCalculatrice.js";

let titre2 = document.createElement("h2");

let p = document.createElement("p");

let welcome = document.createElement("h2");
let input = document.createElement("input");
let go = document.createElement("button");

let Titre3 = document.createElement("h2");
let div2 = document.createElement("div");
let carreUn = document.createElement("div");
let carreDeux = document.createElement("div");
let carreRougeUn = document.createElement("div");
let carreRougeDeux = document.createElement("div");
let div3 = document.createElement("div");
let boutonChange = document.createElement("button");
let boutonNombre = document.createElement("button");

let titre4 = document.createElement("h2");
let p2 = document.createElement("p");

let bouton = document.createElement("button");
let br = document.createElement("br");

let titre5 = document.createElement("h2");
let titre6 = document.createElement("h3");
let divCalculeFacile = document.createElement("div");
divCalculeFacile.style.display = "flex";
let inputCalculeUn = document.createElement("input");
let inputCalculeDeux = document.createElement("input");
let select = document.createElement("select");
let plus = document.createElement("option");
let moins = document.createElement("option");
let fois = document.createElement("option");
let diviser = document.createElement("option");
let egal = document.createElement("button");
let reponse = document.createElement("p");
reponse.style.margin = "0px"

let titre7 = document.createElement("h3");
divReponse.append(calcul, inputCalcule);
divChiffre.append(btnUn, btnDeux, btnTrois, btnQuatre, btnCinq, btnSix, btnSept, btnHuit, btnNeuf, btnEfface, btnZero, btnEgale);
divOperateur.append(btnPlus, btnMoins, btnFois, btnDiviser);
divCalculatrice.append(divReponse, divChiffre, divOperateur);

function exo1(divParent) {
    console.log(divParent.childNodes);
    if (divParent.childNodes[0]) {
        divParent.removeChild(divParent.childNodes[0]);
    }
    let divEnfant = document.createElement("div");
    divEnfant.id = "enfant"

    titre2.innerText = "le titre modifié";
    titre2.classList.add("bg-dark", "text-danger");
    divEnfant.appendChild(titre2)
    divParent.appendChild(divEnfant)
}

function exo2(divParent) {
    console.log(divParent.childNodes);
    if (divParent.childNodes[0]) {
        divParent.removeChild(divParent.childNodes[0]);
    }
     
    p.innerText = "Mettre un écouteur d'événement sur les boutons nav et changer le panel en conséquence";

    divEnfant.appendChild(p);
    divParent.appendChild(divEnfant);
}

function exo3(divParent) {
    console.log(divParent.childNodes);
    if (divParent.childNodes[0]) {
        divParent.removeChild(divParent.childNodes[0]);
    }
    let divEnfant = document.createElement("div");
    divEnfant.id = "enfant"

    welcome.innerText = "welcome"
    go.innerText = "go";

    divEnfant.append(welcome, input, go);
    divParent.appendChild(divEnfant);

    go.addEventListener("click", function () {
        let utilisateur = input.value
        welcome.innerText = `welcome ${utilisateur}`;
    });
}

function exo4(divParent) {
    console.log(divParent.childNodes);
    if (divParent.childNodes[0]) {
        divParent.removeChild(divParent.childNodes[0]);
    }
    let divEnfant = document.createElement("div");
    divEnfant.id = "enfant"

    Titre3.innerText = "Déplacer les éléments";

    div2.classList.add("container", "d-flex", "justify-content-between");

    carreUn.setAttribute('class', 'carre');

    carreDeux.setAttribute('class', 'carre');

    carreRougeUn.setAttribute('class', 'carre2');

    carreRougeDeux.setAttribute('class', 'carre2');
    carreRougeDeux.style.display = "none";

    carreUn.appendChild(carreRougeUn);
    carreDeux.appendChild(carreRougeDeux);

    div2.append(carreUn, carreDeux);
    divEnfant.append(Titre3, div2);

    div3.classList.add("d-grid", "justify-content-center", "p-5")

    boutonChange.innerText = "change place";
    boutonChange.classList.add("btn", "btn-warning", "text-light", "my-2")

    boutonNombre.classList.add("btn", "btn-success", "text-light", "my-2")

    let i = 0
    boutonNombre.innerText = `nombre de click ${i}`;

    div3.append(boutonChange, boutonNombre);
    divEnfant.appendChild(div3);
    divParent.appendChild(divEnfant);

    boutonChange.addEventListener("click", function () {
        i++;
        boutonNombre.innerText = `nombre de click ${i}`;

        if(carreRougeDeux.style.display == "none"){
            carreRougeUn.style.display = "none";
            carreRougeDeux.style.display = "block";
        } else{
            carreRougeDeux.style.display = "none";
            carreRougeUn.style.display = "block";
        }
    });
}

function exo5(divParent) {
    console.log(divParent.childNodes);
    if (divParent.childNodes[0]) {
        divParent.removeChild(divParent.childNodes[0]);
    }
    let divEnfant = document.createElement("div");
    divEnfant.id = "enfant"

    titre4.innerText = "Générer des éléments du DOM";

    p2.innerText= "Cliquer sur le bouton ci-dessous pour générer des oeufs.";

    bouton.innerText = "Ajouter un oeuf";
    bouton.classList.add("btn", "btn-success", "text-light");

    divEnfant.append(titre4, p2, bouton, br);
    divParent.appendChild(divEnfant);

    bouton.addEventListener("click", function () {
        let image = document.createElement("img");
        image.src = "public/images/egg.gif";

        divEnfant.appendChild(image);
        divParent.appendChild(divEnfant);
    });
}

function exo6(divParent) {
    console.log(divParent.childNodes);
    if (divParent.childNodes[0]) {
        divParent.removeChild(divParent.childNodes[0]);
    }
    let divEnfant = document.createElement("div");
    divEnfant.id = "enfant"

    titre5.innerText = "Création calculatrice";
    titre6.innerText = "Niveau 1";
    plus.innerText = "+";
    moins.innerText = "-";
    fois.innerText = "*";
    diviser.innerText = "/";
    select.append(plus, moins, fois, diviser);
    egal.innerText = "=";
    divCalculeFacile.append(inputCalculeUn, select, inputCalculeDeux, egal);
    divEnfant.append(titre5, titre6, divCalculeFacile);
    divParent.appendChild(divEnfant);
    //calculatrice niveau 1
    egal.addEventListener("click", function () {
        switch (select.value) {
            case "+":
                reponse.innerHTML = +inputCalculeUn.value + +inputCalculeDeux.value
                divCalculeFacile.appendChild(reponse);
                break;
            case "-":
                reponse.innerText = +inputCalculeUn.value - +inputCalculeDeux.value
                divCalculeFacile.appendChild(reponse);
                break;
            case "*":
                reponse.innerText = +inputCalculeUn.value * +inputCalculeDeux.value
                divCalculeFacile.appendChild(reponse);
                break;
            case "/":
                reponse.innerText = +inputCalculeUn.value / +inputCalculeDeux.value
                divCalculeFacile.appendChild(reponse);
                break;
        }
    })
    //calculatrice niveau 2
    titre7.innerText = "Niveau 2";
    divEnfant.appendChild(divCalculatrice);
}

