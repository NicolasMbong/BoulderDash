let x=4;
let y=3;
let Dgot=0;
let moves=0;
let Dmax=11;
let Dleft=Dmax;
//affichage des compteurs 
document.querySelector("#Dleft").innerHTML=Dleft;
document.querySelector("#Dgot").innerHTML=Dgot;
document.querySelector("#moves").innerHTML=moves;

//vérifie si une touche à été utilisé
document.addEventListener('keydown',logKey); 



function logKey(event) {    //gère les déplacements et les interactions 
    //console.log(x);
    let test = 0; //variables de test afin d'éviter que le joueur réalise 2 actions d'un coup
    switch(event.code)
    {
        
        case "KeyW" :   //déplacement vers le haut
            if (document.querySelector("#grille").children[x-1].children[y].classList.contains('terre') || document.querySelector("#grille").children[x-1].children[y].classList.contains('vide'))
            //vérifie si le bloque au dessus est vide ou contient de la terre
            {
                if(test==0)
                {
                    document.querySelector("#grille").children[x-1].children[y].className = "joueur";//remplace le bloc ciblé par le joueur
                    document.querySelector("#grille").children[x].children[y].className = "vide";//remplace le bloc d'origine par du vide
                    
                    x-=1; //change les coordonnées du joueur  
                    test++; //indique que le joueur a déja réalisé un déplacement
                    moves++; //augmente le compteur de déplacement
                }
            }
            
            if(document.querySelector("#grille").children[x-1].children[y].classList.contains('diamant'))
            //vérifie si le bloque ciblé contient un diamant
                {
                    if(test==0)
                    {
                    document.querySelector("#grille").children[x-1].children[y].className = "joueur";
                    document.querySelector("#grille").children[x].children[y].className = "vide"; 
                    //déplace le joueur sur le bloc indiqué
                    getDiamant();//voir fonction
                    

                    if (document.querySelector("#grille").children[x-1].children[y].classList.contains('rocher'))
                    //vérifie si le bloque au dessus du joueur est un rocher
                    {
                        fallingStone(x,y);//voir fonction
                    }
                    x-=1;//modifie les coordonnées du joueur
                    test++; //indique que le joueur a déja réalisé un déplacement
                    moves++; //augmente le compteur de déplacement
                    }
                }
            break;


        case "KeyA" :   //déplacement vers la gauche
            if (document.querySelector("#grille").children[x].children[y-1].classList.contains('terre') || document.querySelector("#grille").children[x].children[y-1].classList.contains('vide'))
            //vérifie si le bloque à gauche est vide ou contient de la terre 
            {
                if(test==0)
                {
                    document.querySelector("#grille").children[x].children[y-1].className = "joueur";//remplace le bloc ciblé par le joueur
                    document.querySelector("#grille").children[x].children[y].className = "vide";//remplace le bloc d'origine par du vide
                    

                    if (document.querySelector("#grille").children[x-1].children[y].classList.contains('rocher'))
                    //vérifie si le bloque au dessus du joueur est un rocher
                    {
                        fallingStone(x,y); //voir fonction 
                    }
                    y-=1; //change les coordonnées du joueur
                    test++; //indique que le joueur a déja réalisé un déplacement
                    moves++; //augmente le compteur de déplacement
                }
            }                

                if(document.querySelector("#grille").children[x].children[y-1].classList.contains('rocher') && document.querySelector("#grille").children[x].children[y-2].classList.contains('vide'))
                //vérifie si le bloque ciblé est un rocher et si il y a du vide derrière le rocher 
                {
                    if(test==0)
                    {
                        document.querySelector("#grille").children[x].children[y-1].className = "joueur";
                        document.querySelector("#grille").children[x].children[y-2].className = "rocher";
                        document.querySelector("#grille").children[x].children[y].className = "vide";
                        //déplace le joueur et le rocher dans la direction ciblée
                        fallingStone(x+1,y-2); //voir fonction
                        

                        if (document.querySelector("#grille").children[x-1].children[y].classList.contains('rocher'))
                        //vérifie si le bloque au dessus du joueur est un rocher
                        {
                        fallingStone(x,y);//voir fonction
                        }
                        y-=1;   //change les coordonnées du joueur
                        test++; //indique que le joueur a déja réalisé un déplacement
                        moves++; //augmente le compteur de déplacement
                    }
                }

                if(document.querySelector("#grille").children[x].children[y-1].classList.contains('diamant'))
                //vérifie si le bloque ciblé contient un diamant
                {
                    if(test==0)
                    {
                    document.querySelector("#grille").children[x].children[y-1].className = "joueur";
                    document.querySelector("#grille").children[x].children[y].className = "vide";
                    //déplace le joueur sur le bloc indiqué
                    getDiamant();//voir fonction
                    

                    if (document.querySelector("#grille").children[x-1].children[y].classList.contains('rocher'))
                    //vérifie si le bloque au dessus du joueur est un rocher
                    {
                        fallingStone(x,y);//voir fonction
                    }
                    y-=1;   //change les coordonnées du joueur
                    test++; //indique que le joueur a déja réalisé un déplacement
                    moves++; //augmente le compteur de déplacement
                    }
                }
            

            break;


        case "KeyS" :   //déplacement vers le bas
            if (document.querySelector("#grille").children[x+1].children[y].classList.contains('terre') || document.querySelector("#grille").children[x+1].children[y].classList.contains('vide'))
            //vérifie si le bloque en dessous est vide ou contient de la terre
            {
                if(test==0)
                {
                document.querySelector("#grille").children[x+1].children[y].className = "joueur";
                document.querySelector("#grille").children[x].children[y].className = "vide";
                //déplace le joueur sur le bloc indiqué
                
                if (document.querySelector("#grille").children[x-1].children[y].classList.contains('rocher'))
                //vérifie si le bloque au dessus du joueur est un rocher
                {
                    //setTimeout(()=>fallingStone(x,y) ,1000 );
                    fallingStone(x,y); //voir fonction
                }
                x+=1;   //change les coordonnées du joueur
                test++; //indique que le joueur a déja réalisé un déplacement
                moves++; //augmente le compteur de déplacement
                }
            }
            
            if(document.querySelector("#grille").children[x+1].children[y].classList.contains('diamant'))
            //vérifie si le bloque ciblé contient un diamant
                {
                    if(test==0)
                    {
                    document.querySelector("#grille").children[x+1].children[y].className = "joueur";
                    document.querySelector("#grille").children[x].children[y].className = "vide";
                    //déplace le joueur sur le bloc indiqué
                    getDiamant();//voir fonction
                    

                    if (document.querySelector("#grille").children[x-1].children[y].classList.contains('rocher'))
                    //vérifie si le bloque au dessus du joueur est un rocher
                    {
                        fallingStone(x,y);//voir fonction
                    }
                    x+=1; //change les coordonnées du joueur
                    test++; //indique que le joueur a déja réalisé un déplacement
                    moves++; //augmente le compteur de déplacement
                    }
                }
            
                   
            
            break;


        case "KeyD" :   //déplacement vers la droite
                if (document.querySelector("#grille").children[x].children[y+1].classList.contains('terre') || document.querySelector("#grille").children[x].children[y+1].classList.contains('vide'))
                //vérifie si le bloque à droite est vide ou contient de la terre
                {
                    if(test==0)
                    {
                    document.querySelector("#grille").children[x].children[y+1].className = "joueur";
                    document.querySelector("#grille").children[x].children[y].className = "vide";
                    //déplace le joueur sur le bloc indiqué
                    

                    if (document.querySelector("#grille").children[x-1].children[y].classList.contains('rocher'))
                    //vérifie si le bloque au dessus du joueur est un rocher
                    {
                        fallingStone(x,y);//voir fonction
                    }

                    y+=1;   //change les coordonnées du joueur
                    test++; //indique que le joueur a déja réalisé un déplacement
                    moves++; //augmente le compteur de déplacement

                    }
                }                

                if(document.querySelector("#grille").children[x].children[y+1].classList.contains('rocher') && document.querySelector("#grille").children[x].children[y+2].classList.contains('vide'))
                //vérifie si le bloque ciblé est un rocher et si il y a du vide derrière le rocher
                {
                    if(test==0)
                    {
                        document.querySelector("#grille").children[x].children[y+1].className = "joueur";
                        document.querySelector("#grille").children[x].children[y+2].className = "rocher";
                        document.querySelector("#grille").children[x].children[y].className = "vide";
                        //déplace le joueur et le rocher dans la direction ciblée
                        fallingStone(x+1,y+2);//voir fonction
                        

                        if (document.querySelector("#grille").children[x-1].children[y].classList.contains('rocher'))
                        //vérifie si le bloque au dessus du joueur est un rocher
                        {
                            fallingStone(x,y);//voir fonction
                        }

                        y+=1;   //change les coordonnées du joueur
                        test++; //indique que le joueur a déja réalisé un déplacement
                        moves++; //augmente le compteur de déplacement

                    }
                }


                if(document.querySelector("#grille").children[x].children[y+1].classList.contains('diamant'))
                //vérifie si le bloque ciblé contient un diamant
                {
                    if(test==0)
                    {
                    document.querySelector("#grille").children[x].children[y+1].className = "joueur";
                    document.querySelector("#grille").children[x].children[y].className = "vide";
                    //déplace le joueur sur le bloc indiqué
                    getDiamant();//voir fonction
                    

                    if (document.querySelector("#grille").children[x-1].children[y].classList.contains('rocher'))
                    //vérifie si le bloque au dessus du joueur est un rocher
                    {
                        fallingStone(x,y);//voir fonction
                    }
                    y+=1;   //change les coordonnées du joueur
                    test++; //indique que le joueur a déja réalisé un déplacement
                    moves++; //augmente le compteur de déplacement
                    }
                }

            
            break;
    }   
    document.querySelector("#moves").innerHTML=moves;
    //permets de mettre a jour le compteur de déplacement
}

//gére la chute de rocher/gravier
function fallingStone(x,y){
    let a = x;
    let b = x;
    let n=0;
    //console.log(n)
    //console.log(x);
    while(document.querySelector("#grille").children[a].children[y].classList.contains('vide'))//||document.querySelector("#grille").children[a].children[y].classList.contains('joueur'))
    //le rocher va continuer de tomber tant qu'il y'aura du vide en dessous de lui
    {           
        document.querySelector("#grille").children[a-1].children[y].className = "vide";
        document.querySelector("#grille").children[a].children[y].className = "rocher";
        //déplace le rocher vers le bas
        a++;
        n++;
        //console.log(n);
        
    }

    if(document.querySelector("#grille").children[a].children[y].classList.contains('joueur')&& n >= 1)
    //vérifie si le rocher tombe sur un joueur
    {
        //console.log("t'es mort");
        var son = new Audio('./son/death_sound.mp3'); //joue le son de mort de minecraft
        son.play();
        //joue le son de mort de minecraft
        unshow();   //voir fonction
        reset();    //voir fonction
        //console.log(x,y);
    }

    if(document.querySelector("#grille").children[b-2].children[y].classList.contains('rocher'))
    //permet de faire tomber les rochers situés au dessus du premier rocher
    {
        fallingStone(b-1,y); 
    }
}
/*
function update(x,y){
    if (document.querySelector("#grille").children[x-1].children[y].classList.contains('rocher'))
    {
        fallingStone(x,y);
    }

}
*/
/*
function findPlayer(){
    console.log("findplayer");
    for(let i=0;i<16;i++)
    {
        let ligne = document.querySelector("#grille").children[i];
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
*/

function getDiamant(){
    //gére les diamants (D pour Diamant)
    Dgot++; 
    Dleft--; 
    var audio = new Audio('./son/xp.mp3');
    var audio2 = new Audio('./son/item.mp3');
    audio.play();
    audio2.play();
    //joue les sons associés
    document.querySelector("#Dgot").innerHTML=Dgot;
    document.querySelector("#Dleft").innerHTML=Dleft;
    //mets a jour les compteurs de diamant
    if(Dgot==Dmax)
    //vérifie la condition de victoire
    {
        console.log("t'as gagné!")
        showaccueil();
        reset();
        //affiche l'accueil
        //chargerNiveau2();

        document.querySelector("#jeu").style.display="none"
        //cache l'ecran de jeu
        //document.querySelector("#niveau2").style.display="block"

    }

}

function unshow(){
    //affiche l'écran de mort
    document.querySelector("#jeu").style.display="none"
    document.querySelector("#accueil").style.display="none"
    document.querySelector("#mort").style.display="flex"
}