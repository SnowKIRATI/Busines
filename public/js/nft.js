// MISE EN PLACE (création et liaisons des fichiers HTML / CSS / JS)

// STRUCTURE DE LA PAGE (création de #zone1 et #zone2)

// RECUPERATION DES ZONES
let zone1 = document.querySelector("#zone1");
let zone2 = document.querySelector("#zone2");

// TABLEAU D'OBJETS
let elements = [
  { image: "img/akaza.png", nom: "Manga", categorie: "NFT", prix: 200 },
  { image: "img/brother-sister.png", nom: "Animal 2", categorie: "Animaux", prix: 200 },
  { image: "img/parade.png", nom: "Animal 3", categorie: "Animaux", prix: 200 },
  { image: "img/shinobu.png", nom: "Animal 4", categorie: "Animaux", prix: 200 },
  { image: "img/tanjiro.png", nom: "Personne 1", categorie: "Personnes", prix: 300 },
  { image: "img/tsuyuri.png", nom: "Personne 2", categorie: "Personnes", prix: 300 },
  { image: "img/uzui.png", nom: "Personne 3", categorie: "Personnes", prix: 300 },
  { image: "img/yukata-pop.png", nom: "Personne 4", categorie: "Personnes", prix: 300 },
  { image: "img/tokito-pop.png", nom: "Paysage 1", categorie: "Paysages", prix: 100 },
  { image: "img/hikkake-pop.png", nom: "Paysage 2", categorie: "Paysages", prix: 100 },
  // {image:"img/",nom:"Paysage 3",categorie:"Paysages",prix:100},
  // {image:"img/",nom:"Paysage 4",categorie:"Paysages",prix:100},
];

let elementsFiltres = elements;

// fonction qui prépare un tableau filtrés à partir de la catégorie
// demandée et le parcourt pour afficher ses éléments comme galerie
function maj(categorieDemandee = "") {
  // on prépare le tableau d'éléments filtrés à partir de
  // la catégorie demandée et du tableau général elements
  if (categorieDemandee == "") elementsFiltres = elements;
  else {
    elementsFiltres = elements.filter(function (element) {
      return element.categorie == categorieDemandee;
    });
  }

  // on vide ensuite la zone 2
  zone2.innerHTML = "";

  // et on parcourt le tableaufiltré pour générer les vignettes
  elementsFiltres.forEach((element, i) => {
    // GENERATION DES VIGNETTES EN ZONE 2
    let vignette = document.createElement("figure");
    vignette.className = "vignette";
    vignette.id = "v" + i;
    vignette.innerHTML = `
            <img src="${element.image}" alt="${element.nom}" width="200">
            <figcaption>${element.nom}</figcaption>
        `;
    zone2.appendChild(vignette);

    // EVENEMENT SURVOL
    vignette.onmouseover = function (e) {
      e.currentTarget.classList.add("on");
    };

    // EVENEMENT SORTIE
    vignette.onmouseout = function (e) {
      e.currentTarget.classList.remove("on");
    };

    // EVENEMENT CLIC
    vignette.onclick = function (e) {
      afficherImage(i);
    };
  });
}

// affiche la grande image et ses infos associées à partir d'un numéro d'élément
function afficherImage(i) {
  zone1.innerHTML = `
        <img src='${elementsFiltres[i].image}'>
        <ul>
            <li>Nom<br><strong>${elementsFiltres[i].nom}</strong></li>
            <li>Catégorie<br><strong>${elementsFiltres[i].categorie}</strong></li>
            <li>Prix<br><strong>${elementsFiltres[i].prix} €</strong></li>
        </ul>
    `;
}

// CHARGEMENT DE L'IMAGE LIEE A LA 1ERE VIGNETTE
afficherImage(0);

// CHARGEMENT DE LA GALERIE COMPLETE PAR DEFAUT
maj();

// ANIMATION

// AMELIORATION DE L'AFFICHAGE
