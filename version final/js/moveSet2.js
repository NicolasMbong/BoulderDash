/*
let x=2;
let y=3;
let Dgot=0;
let moves=0;
let Dmax=6;
let Dleft=Dmax;

document.querySelector("#Dleft").innerHTML=Dleft;
document.querySelector("#Dgot").innerHTML=Dgot;
document.querySelector("#moves").innerHTML=moves;
document.addEventListener('keydown',logKey); //vérifie si une touche à été utilisé



//setInterval(()=>update(x,y),1000);
function logKey(event) {    //gère les déplacements
    //console.log(x);
    let test = 0;
    switch(event.code)
    {
        
        case "KeyW" :   //déplacement vers le haut
            if (document.querySelector("#grille2").children[x-1].children[y].classList.contains('terre') || document.querySelector("#grille2").children[x-1].children[y].classList.contains('vide'))
            //vérifie si le bloque au dessus est vide ou contient de la terre
            {
                if(test==0)
                {
                    document.querySelector("#grille2").children[x-1].children[y].className = "joueur";//remplace le bloc ciblé par le joueur
                    document.querySelector("#grille2").children[x].children[y].className = "vide";//remplace le bloc d'origine par du vide
                    
                    x-=1; //change les coordonnées du joueur  
                    test++;
                    moves++;
                }
            }
            
            if(document.querySelector("#grille2").children[x-1].children[y].classList.contains('diamant'))
                {
                    if(test==0)
                    {
                    document.querySelector("#grille2").children[x-1].children[y].className = "joueur";
                    document.querySelector("#grille2").children[x].children[y].className = "vide";
                    getDiamant();
                    

                    if (document.querySelector("#grille2").children[x-1].children[y].classList.contains('rocher'))
                    {
                        fallingStone(x,y);
                    }
                    x-=1;
                    test++;
                    moves++;
                    }
                }
            break;


        case "KeyA" :   //déplacement vers la gauche
            if (document.querySelector("#grille2").children[x].children[y-1].classList.contains('terre') || document.querySelector("#grille2").children[x].children[y-1].classList.contains('vide'))
            //vérifie si le bloque à gauche est vide ou contient de la terre 
            {
                if(test==0)
                {
                    document.querySelector("#grille2").children[x].children[y-1].className = "joueur";//remplace le bloc ciblé par le joueur
                    document.querySelector("#grille2").children[x].children[y].className = "vide";//remplace le bloc d'origine par du vide
                    

                    if (document.querySelector("#grille2").children[x-1].children[y].classList.contains('rocher'))
                    //vérifie si le bloque au dessus du joueur est un rocher
                    {
                        fallingStone(x,y); //voir fonction 
                    }
                    y-=1; //change les coordonnées du joueur
                    test++;
                    moves++;
                }
            }                

                if(document.querySelector("#grille2").children[x].children[y-1].classList.contains('rocher') && document.querySelector("#grille2").children[x].children[y-2].classList.contains('vide'))
                //vérifie si le bloque ciblé est un rocher et si il y a du vide derrière le rocher 
                {
                    if(test==0)
                    {
                        document.querySelector("#grille2").children[x].children[y-1].className = "joueur";
                        document.querySelector("#grille2").children[x].children[y-2].className = "rocher";
                        document.querySelector("#grille2").children[x].children[y].className = "vide";
                        //déplace le joueur et le rocher dans la direction ciblée
                        fallingStone(x+1,y-2); //voir fonction
                        

                        if (document.querySelector("#grille2").children[x-1].children[y].classList.contains('rocher'))
                        {
                        fallingStone(x,y);
                        }
                        y-=1;
                        test++;
                        moves++;
                    }
                }

                if(document.querySelector("#grille2").children[x].children[y-1].classList.contains('diamant'))
                {
                    if(test==0)
                    {
                    document.querySelector("#grille2").children[x].children[y-1].className = "joueur";
                    document.querySelector("#grille2").children[x].children[y].className = "vide";
                    getDiamant();
                    

                    if (document.querySelector("#grille2").children[x-1].children[y].classList.contains('rocher'))
                    {
                        fallingStone(x,y);
                    }
                    y-=1;
                    test++;
                    moves++;
                    }
                }
            

            break;


        case "KeyS" :   //déplacement vers le bas
            if (document.querySelector("#grille2").children[x+1].children[y].classList.contains('terre') || document.querySelector("#grille2").children[x+1].children[y].classList.contains('vide'))
            {
                if(test==0)
                {
                document.querySelector("#grille2").children[x+1].children[y].className = "joueur";
                document.querySelector("#grille2").children[x].children[y].className = "vide";
                if (document.querySelector("#grille2").children[x-1].children[y].classList.contains('rocher'))
                {
                    //setTimeout(()=>fallingStone(x,y) ,1000 );
                    fallingStone(x,y);
                }
                x+=1;
                test++;
                moves++;
                }
            }
            
            if(document.querySelector("#grille2").children[x+1].children[y].classList.contains('diamant'))
                {
                    if(test==0)
                    {
                    document.querySelector("#grille2").children[x+1].children[y].className = "joueur";
                    document.querySelector("#grille2").children[x].children[y].className = "vide";
                    getDiamant();
                    

                    if (document.querySelector("#grille2").children[x-1].children[y].classList.contains('rocher'))
                    {
                        fallingStone(x,y);
                    }
                    x+=1;
                    test++;
                    moves++;
                    }
                }
            
                   
            
            break;


        case "KeyD" :   //déplacement vers la droite
                if (document.querySelector("#grille2").children[x].children[y+1].classList.contains('terre') || document.querySelector("#grille2").children[x].children[y+1].classList.contains('vide'))
                //vérifie si le bloque à droite est vide ou contient de la terre
                {
                    if(test==0)
                    {
                    document.querySelector("#grille2").children[x].children[y+1].className = "joueur";
                    document.querySelector("#grille2").children[x].children[y].className = "vide";
                    

                    if (document.querySelector("#grille2").children[x-1].children[y].classList.contains('rocher'))
                    {
                        fallingStone(x,y);
                    }

                    y+=1;
                    test++;
                    moves++;

                    }
                }                

                if(document.querySelector("#grille2").children[x].children[y+1].classList.contains('rocher') && document.querySelector("#grille2").children[x].children[y+2].classList.contains('vide'))
                {
                    if(test==0)
                    {
                        document.querySelector("#grille2").children[x].children[y+1].className = "joueur";
                        document.querySelector("#grille2").children[x].children[y+2].className = "rocher";
                        document.querySelector("#grille2").children[x].children[y].className = "vide";
                        fallingStone(x+1,y+2);
                        

                        if (document.querySelector("#grille2").children[x-1].children[y].classList.contains('rocher'))
                        {
                            fallingStone(x,y);
                        }

                        y+=1;
                        test++;
                        moves++;

                    }
                }


                if(document.querySelector("#grille2").children[x].children[y+1].classList.contains('diamant'))
                {
                    if(test==0)
                    {
                    document.querySelector("#grille2").children[x].children[y+1].className = "joueur";
                    document.querySelector("#grille2").children[x].children[y].className = "vide";
                    getDiamant();
                    

                    if (document.querySelector("#grille2").children[x-1].children[y].classList.contains('rocher'))
                    {
                        fallingStone(x,y);
                    }
                    y+=1;
                    test++;
                    moves++;
                    }
                }

            
            break;
    }   
    document.querySelector("#moves").innerHTML=moves;
}


function fallingStone(x,y){
    let a = x;
    let b = x;
    let n=0;
    //console.log(n)
    //console.log(x);
    while(document.querySelector("#grille2").children[a].children[y].classList.contains('vide'))//||document.querySelector("#grille").children[a].children[y].classList.contains('joueur'))
    {           
        document.querySelector("#grille2").children[a-1].children[y].className = "vide";
        document.querySelector("#grille2").children[a].children[y].className = "rocher";
        a++;
        n++;
        //console.log(n);
        
    }

    if(document.querySelector("#grille2").children[a].children[y].classList.contains('joueur')&& n >= 1)
    {
        //console.log("t'es mort");
        var son = new Audio('./son/death_sound.mp3');
        son.play();
        unshow();
        reset();
        //console.log(x,y);
    }

    if(document.querySelector("#grille2").children[b-2].children[y].classList.contains('rocher'))
    {
        fallingStone(b-1,y);
    }
}




function findPlayer(){
    console.log("findplayer");
    for(let i=0;i<16;i++)
    {
        let ligne = document.querySelector("#grille2").children[i];
        for(let j=0 ; j<32; j++)
        {
            if(ligne[j].classList.contains('joueur'))
            {
                x=i;
                y=j;
                console.log("gsh")
                
            }
        }
    }
}

function getDiamant(){
    Dgot++;
    Dleft--; 
    var audio = new Audio('./son/xp.mp3');
    var audio2 = new Audio('./son/item.mp3');
    audio.play();
    audio2.play();
    document.querySelector("#Dgot").innerHTML=Dgot;
    document.querySelector("#Dleft").innerHTML=Dleft;
    if(Dgot==Dmax)
    {
        console.log("t'as gagné! GG")
        showaccueil();
        //chargerNiveau2();
        document.querySelector("#jeu").style.display="none"
        document.querySelector("#niveau2").style.display="block"

    }

}

function unshow(){
    document.querySelector("#jeu").style.display="none"
    document.querySelector("#accueil").style.display="none"
    document.querySelector("#mort").style.display="flex"
}
*/