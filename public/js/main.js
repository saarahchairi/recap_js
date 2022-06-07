let body = document.querySelector("body");

let main = document.createElement("main");
main.setAttribute("class", "container");

let titre = document.createElement("h1");
titre.innerHTML = "Javascript DOM";
titre.style.color = "white";
titre.classList.add("bg-primary", "text-center", "my-5");

let nav = document.createElement("nav");

let listeBouton = document.createElement("ul");

let puceBouton1 = document.createElement("li");
puceBouton1.innerText = "Exercice 1";

let puceBouton2 = document.createElement("li");
puceBouton2.innerText = "Exercice 2";

let puceBouton3 = document.createElement("li");
puceBouton3.innerText = "Exercice 3";

let puceBouton4 = document.createElement("li");
puceBouton4.innerText = "Exercice 4";

let puceBouton5 = document.createElement("li");
puceBouton5.innerText = "Exercice 5";

let puceBouton6 = document.createElement("li");
puceBouton6.innerText = "Exercice 6";

listeBouton.append(puceBouton1, puceBouton2, puceBouton3, puceBouton4, puceBouton5, puceBouton6);

let div = document.createElement("div");
div.classList.add("container", "p-5", "bg-secondary");

nav.appendChild(listeBouton);
main.append(titre, nav, div);
body.append(main);

puceBouton1.addEventListener("click", function () {
    let titre2 = document.createElement("h2");
    titre2.innerText = "le titre modifié";
    titre2.classList.add("bg-dark", "text-danger");
    
    div.appendChild(titre2);
});

puceBouton2.addEventListener("click", function () {
    let p = document.createElement("p");
    p.innerText = "Mettre un écouteur d'événement sur les boutons nav et changer le panel en conséquence";
    div.appendChild(p);
});

puceBouton3.addEventListener("click", function () {
    let welcome = document.createElement("h2");
    welcome.innerText = "welcome"

    let input = document.createElement("input");

    let go = document.createElement("button");
    go.innerText = "go";

    div.append(welcome, input, go);

    go.addEventListener("click", function () {
        let utilisateur = input.value
        welcome.innerText = `welcome ${utilisateur}`;
    });
});

puceBouton5.addEventListener("click", function () {
    let titre3 = document.createElement("h2");
    titre3.innerText = "Générer des éléments du DOM";

    let p = document.createElement("p");
    p.innerText= "Cliquer sur le bouton ci-dessous pour générer des oeufs.";

    let bouton = document.createElement("button");
    bouton.innerText = "Ajouter un oeuf";
    bouton.classList.add("btn", "btn-success", "text-light");

    let br = document.createElement("br");

    div.append(titre3, p, bouton, br);

    bouton.addEventListener("click", function () {
        let image = document.createElement("img");
        image.src = "public/images/egg.gif";

        div.appendChild(image);
    })
});

