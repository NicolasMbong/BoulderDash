//let fichier ="";
//charge la grille au lancement du programme
document.addEventListener("DOMContentLoaded",()=>{
    chargerFichier();
});


//extrait les différents élément du terrain a partir du fichier txt
function afficherGrille() {
    const grille = document.getElementById("grille");
    grille.innerHTML = '';
    for (let ligne of fichier.split(/\n/)) {
        let ligneHTML ='<div class="ligne">';
        for (let i = 0; i < ligne.length; i++){
            if (ligne[i] === "M"){
                ligneHTML += '<div class="mur"></div>';
            }

            if (ligne[i] === "T"){
                ligneHTML += '<div class="terre"></div>';
            }

            if (ligne[i] === "R"){
                ligneHTML += '<div class="rocher"></div>';
            }

            if (ligne[i] === "D"){
                ligneHTML += '<div class="diamant"></div>';
            }

            if (ligne[i] === "V"){
                ligneHTML += '<div class="vide"></div>';
            }

            if (ligne[i] === "J"){
                ligneHTML += '<div class="joueur"></div>';
            }
            
            else if (ligne[i] === "0") {
                ligneHTML += '<div classe="autre"></div>';
            }
        }
        ligneHTML += '</div>'
        grille.innerHTML += ligneHTML;
    }
}
//charge le fichier txt
function chargerFichier() {
    fetch("/niveau/first.txt").then((res)=>res.text()).then((text)=>{
        fichier=text;
        afficherGrille();
    })
}

//affichage du menu principal depuis l'écran de jeu
document.querySelector("#rm").addEventListener("click",menuPrincipal);
function menuPrincipal(){
    document.querySelector("#jeu").style.display="none"
    document.querySelector("#accueil").style.display="flex"
}