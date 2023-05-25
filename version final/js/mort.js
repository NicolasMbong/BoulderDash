//affichage nouvelle partie
document.querySelector("#respawn").addEventListener("click",showrecommencer)
function showrecommencer(){
    document.querySelector("#jeu").style.display="block"
    document.querySelector("#mort").style.display="none"
}   

//affichage écran principal
document.querySelector("#resume").addEventListener("click",showaccueil)
function showaccueil(){
    document.querySelector("#mort").style.display="none"
    document.querySelector("#accueil").style.display="flex"
    reset();
}   

//reset les coordonnées au point de départ et les variables à 0 lors de la création d'une nouvelle partie
document.querySelector("#respawn").addEventListener("click",reset);
function reset(){
    x=4;
    y=3;
    Dgot=0;
    moves=0;
    Dmax=11;
    Dleft=Dmax;
    chargerFichier();
    document.querySelector("#Dleft").innerHTML=Dleft;
    document.querySelector("#Dgot").innerHTML=Dgot;
    document.querySelector("#moves").innerHTML=moves;
}


