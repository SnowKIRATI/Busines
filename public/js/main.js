let elements = [
  { image: "img/akaza.png", nom: "Akaza", categorie: "Give it a story", prix: 200 },
  { image: "img/brother-sister.png", nom: "Brother / Sister", categorie: "NFT", prix: 200 },
  { image: "img/parade.png", nom: "GiveItaName", categorie: "NFT", prix: 200 },
  { image: "img/shinobu.png", nom: "GiveItaName", categorie: "NFT", prix: 200 },
  { image: "img/tanjiro.png", nom: "GiveItaName", categorie: "NFT", prix: 300 },
  { image: "img/tsuyuri.png", nom: "GiveItaName", categorie: "NFT", prix: 300 },
  { image: "img/uzui.png", nom: "GiveItaName", categorie: "NFT", prix: 300 },
  { image: "img/yukata-pop.png", nom: "GiveItaName", categorie: "NFT", prix: 300 },
  { image: "img/tokito-pop.png", nom: "GiveItaName", categorie: "NFT", prix: 100 },
  { image: "img/hikkake-pop.png", nom: "GiveItaName", categorie: "NFT", prix: 100 },
];
let zone2 = document.querySelector("#zone2");

let listeManga = document.querySelector("#listeManga");


elements.forEach(function (manga, i) {
  let bouton = document.createElement("div");
  bouton.className = "btn";
  bouton.innerHTML = `<img src="${manga.image}">`;
  bouton.onclick = function (e) {
    grandCarre.innerHTML = `<img src="${manga.image}">`;
    Name.innerHTML = `${manga.nom}`;
    Story.innerHTML = `${manga.categorie}`;
  };
  listeManga.appendChild(bouton);
});

