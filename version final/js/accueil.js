//affichage nouvelle partie
document.querySelector("#np").addEventListener("click",showjeu)
function showjeu(){
    reset();
    document.querySelector("#accueil").style.display="none"
    document.querySelector("#niveauSupp").style.display="none"
    document.querySelector("#jeu").style.display="block"
    //document.querySelector("#niveau2").style.display="none"
}

//affichage derniere partie
document.querySelector("#rp").addEventListener("click",showpartie)
function showpartie(){
    document.querySelector("#accueil").style.display="none"
    document.querySelector("#niveauSupp").style.display="none"
    document.querySelector("#jeu").style.display="block"
    document.querySelector("#reprendre").style.display="none"
    //document.querySelector("#niveau2").style.display="none"
}

//affichage écran pour ajouter un niveau
document.querySelector("#an").addEventListener("click",showadd)
function showadd(){
    document.querySelector("#accueil").style.display="none"
    document.querySelector("#niveauSupp").style.display="block"
    document.querySelector("#jeu").style.display="none"
    //document.querySelector("#niveau2").style.display="none"
}