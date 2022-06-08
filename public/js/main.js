import { exo1, exo2, exo3, exo4, exo5, exo6 } from "./functions.js";

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

let divParent = document.createElement("div");
divParent.classList.add("container", "p-5", "bg-secondary");
divParent.id = "parent";

nav.appendChild(listeBouton);
main.append(titre, nav, divParent);
body.appendChild(main);

let divParentSelector = document.querySelector("#parent");


for (let i = 0; i < listeBouton.children.length; i++) {
    let e = listeBouton.children[i];
    e.addEventListener("click", function () {
        switch (i) {
            case 0:
                exo1(divParentSelector)
                break;
            case 1:
                exo2(divParentSelector)
                break;
            case 2:
                exo3(divParentSelector)                
                break;
            case 3:
                exo4(divParentSelector)
                break;
            case 4:
                exo5(divParentSelector)
                break;
            case 5:
                exo6(divParentSelector);
                break;
        }
    })
}

