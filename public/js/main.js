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
nav.appendChild(listeBouton);
main.append(titre, nav);
body.append(main);

puceBouton1.addEventListener("click", function () {
    let div = document.createElement("div");
    div.classList.add("container", "py-5", "bg-secondary");

    let titre2 = document.createElement("h2");
    titre2.innerText = "le titre modifié";
    titre2.classList.add("bg-dark", "text-danger");
    
    div.append(titre2);
    body.appendChild(div);

});

puceBouton2.addEventListener("click", function () {
    
});

