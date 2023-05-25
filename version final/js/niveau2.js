
/*
function afficherGrille2() {
    const grille2 = document.getElementById("grille2");
    grille.innerHTML = '';
    for (let ligne2 of fichier2.split(/\n/)) {
        let ligneHTML2 ='<div class="ligne">';
        for (let i = 0; i < ligne2.length; i++){
            if (ligne2[i] === "M"){
                ligneHTML2 += '<div class="mur"></div>';
            }

            if (ligne2[i] === "T"){
                ligneHTML2 += '<div class="terre"></div>';
            }

            if (ligne2[i] === "R"){
                ligneHTML2 += '<div class="rocher"></div>';
            }

            if (ligne2[i] === "D"){
                ligneHTML2 += '<div class="diamant"></div>';
            }

            if (ligne2[i] === "v"){
                ligneHTML2 += '<div class="vide"></div>';
            }

            if (ligne2[i] === "J"){
                ligneHTML2 += '<div class="joueur"></div>';
            }
            
            else if (ligne2[i] === "0") {
                ligneHTML2 += '<div classe="autre"></div>';
            }
        }
        ligneHTML2 += '</div>'
        grille2.innerHTML += ligneHTML2;
    }
}

function chargerNiveau2() {
    fetch("/niveau/niveau2.txt").then((res)=>res.text()).then((text)=>{
        fichier2=text;
        afficherGrille2();
    })
}
*/