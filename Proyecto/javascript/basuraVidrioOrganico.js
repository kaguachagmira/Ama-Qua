//Variables Calificacion
var intentos2=0;
var aciertos2=0;

var imagenResultado2 =  document.getElementById("imagenResultado2");

//Variables para basura de vidrio
var copaVidrio2 = document.querySelector(".copaVidrio2");
var cocaVidrio2 = document.querySelector(".cocaVidrio2");
var mermeladaVidrio2 = document.querySelector(".mermeladaVidrio2");
var ronVidrio2 = document.querySelector(".ronVidrio2");
var perfumeVidrio2 = document.querySelector(".perfumeVidrio2");
//Variables para basura organica
var manzanaOrganico2 = document.querySelector(".manzanaOrganico2");
var polloOrganico2 = document.querySelector(".polloOrganico2");
var pescadoOrganico2 = document.querySelector(".pescadoOrganico2");
var naranjaOrganico2 = document.querySelector(".naranjaOrganico2");
var mandarinaOrganico2 = document.querySelector(".mandarinaOrganico2");



//Variable que me permite copiar informacion
var draggedItem = null;

//Variable para el audio
var win = document.getElementById("win");
var fail = document.getElementById("fail");
var pop = document.getElementById("pop");

var imagenesC = [
    
    {
        imagenOpcion: "img/puntajes/primero.gif" //0
    },
    {
        imagenOpcion: "img/puntajes/segundo.gif"//1
    },
    {
        imagenOpcion: "img/puntajes/tercero.gif"//1
    },
    {
        imagenOpcion: "img/puntajes/cuarto.gif"//1
    },
    {
        imagenOpcion: "img/puntajes/quinto.gif"//1
    }
]
//Variable para basurero de vidrio
var basureroG2 = document.querySelector(".plasticGreen2");
basureroG2.number=2;
basureroG2.addEventListener('dragover',dragOver);
basureroG2.addEventListener('dragenter',dragEnter);
basureroG2.addEventListener('dragleave', dragLeave);
basureroG2.addEventListener('drop',dragDropG2);

//Variable para basurero Organico
var basureroM2 = document.querySelector(".plasticMarron2");
basureroM2.number=3;
basureroM2.addEventListener('dragover',dragOver);
basureroM2.addEventListener('dragenter',dragEnter);
basureroM2.addEventListener('dragleave',dragLeave);
basureroM2.addEventListener('drop',dragDropM2);


//Listeners de la bausra organica
manzanaOrganico2.number=-1;
polloOrganico2.number=1;
pescadoOrganico2.number=2;
naranjaOrganico2.number=3;
mandarinaOrganico2.number=4;

manzanaOrganico2.addEventListener('dragstart',dragStart);
manzanaOrganico2.addEventListener('dragend',dragEnd);
polloOrganico2.addEventListener('dragstart',dragStart);
polloOrganico2.addEventListener('dragend',dragEnd);
pescadoOrganico2.addEventListener('dragstart',dragStart);
pescadoOrganico2.addEventListener('dragend',dragEnd);
naranjaOrganico2.addEventListener('dragstart',dragStart);
naranjaOrganico2.addEventListener('dragend',dragEnd);
mandarinaOrganico2.addEventListener('dragstart',dragStart);
mandarinaOrganico2.addEventListener('dragend',dragEnd);

//Listeners de la basura vidrio
copaVidrio2.number=5;
cocaVidrio2.number=8;
mermeladaVidrio2.number=9;
ronVidrio2.number=10;
perfumeVidrio2.number=11;


copaVidrio2.addEventListener('dragstart',dragStart);
copaVidrio2.addEventListener('dragend',dragEnd);
cocaVidrio2.addEventListener('dragstart',dragStart);
cocaVidrio2.addEventListener('dragend',dragEnd);
mermeladaVidrio2.addEventListener('dragstart',dragStart);
mermeladaVidrio2.addEventListener('dragend',dragEnd);
ronVidrio2.addEventListener('dragstart',dragStart);
ronVidrio2.addEventListener('dragend',dragEnd);
perfumeVidrio2.addEventListener('dragstart',dragStart);
perfumeVidrio2.addEventListener('dragend',dragEnd);





function dragStart()
{
    switch (this.number)
    {
        //Casos para basura de vidrio
        case -1:
            {
                draggedItem = manzanaOrganico2;
                draggedItem.number=-1;
                setTimeout(()=>(this.className ='invisible2'),0) ;
                console.log("Start");
                break;
            }
        case 1:
            {
                draggedItem = polloOrganico2;
                draggedItem.number=1;
                setTimeout(()=>(this.className ='invisible2'),0) ;
                console.log("Start");
                break;
            }
        case 2:
            {
                draggedItem = pescadoOrganico2;
                draggedItem.number=2;
                setTimeout(()=>(this.className ='invisible2'),0) ;
                console.log("Start");
                break;
            }
        case 3:
            {
                draggedItem = naranjaOrganico2;
                draggedItem.number=3;
                setTimeout(()=>(this.className ='invisible2'),0) ;
                console.log("Start");
                break;
            }
        case 4:
            {
                draggedItem = mandarinaOrganico2;
                draggedItem.number=4;
                setTimeout(()=>(this.className ='invisible2'),0) ;
                console.log("Start");
                break;
            }    
        case 5:
            {
                draggedItem = copaVidrio2;
                draggedItem.number=5;
                setTimeout(()=>(this.className ='invisible2'),0) ;
                console.log("Start");
                break;
            }       
        case 8:
            {
                draggedItem = cocaVidrio2;
                draggedItem.number=8;
                setTimeout(()=>(this.className ='invisible2'),0) ;
                console.log("Start");
                break;
            }
        case 9:
            {
                draggedItem = mermeladaVidrio2;
                draggedItem.number=9;
                setTimeout(()=>(this.className ='invisible2'),0) ;
                console.log("Start");
                break;
            }
        case 10:
            {
                draggedItem = ronVidrio2;
                draggedItem.number=10;
                setTimeout(()=>(this.className ='invisible2'),0) ;
                console.log("Empezo a arastrasrse");
                break;
            }
        case 11:
            {
                draggedItem = perfumeVidrio2;
                draggedItem.number=11;
                setTimeout(()=>(this.className ='invisible2'),0) ;
                console.log("Empezo a arastrasrse");
                break;
            }    
        
        default:
            {
                console.log("Default");
            }
    }

}
function dragEnd()
{   
    switch(this.number)
    {
        case -1:
        {
            this.className = 'manzanaOrganico2';
            break;
        }
        case 1:
        {
            this.className = 'polloOrganico2';
            break;
        }
        case 2:
        {
            this.className = 'pescadoOrganico2';
            break;
        }
        case 3:
        {
            this.className = 'naranjaOrganico2';
            break;
        }
        case 4:
        {
            this.className = 'mandarinaOrganico2';
            break;
        }
        case 5:
        {
            this.className = 'copaVidrio2';
            break;
        }
        case 8:
        {
            this.className = 'cocaVidrio2';
            break;
        }
        case 9:
        {
            this.className = 'mermeladaVidrio2';
            break;
        }
        case 10:
        {
            this.className = 'ronVidrio2';
            break;
        }
        case 11:
        {
            this.className = 'perfumeVidrio2';
            break;
        }
        default:
        {
            console.log("Default");
        }
    }
    
}
function dragOver(e)
{
    e.preventDefault();
    this.className +=' hovered2';
}
function dragEnter(e)   
{   
    e.preventDefault();
    this.className +=' hovered2';
    pop.play();
}
function dragLeave()
{
    switch(this.number)
    {
        case 3:
        {
            this.className = 'plasticMarron2';
            break;
        }
        case 2:
        {
            this.className = 'plasticGreen2';
            break;
        }
        default:
        {
            console.log("nada");
        }
    }
 
}

//PARA VIDRIO
function dragDropG2()
{
    if(draggedItem.number==5 ||draggedItem.number==8||draggedItem.number==9||draggedItem.number==10||draggedItem.number==11)
    {

        this.className = 'plasticGreen2';
        this.append(draggedItem);
        draggedItem.number=0;
        draggedItem2=null;
        intentos2+=1;
        aciertos2+=1;
        win.play();
        verificacion2(aciertos2);
    }
    else
    {
        this.className = 'plasticGreen2';
        draggedItem=null;
        intentos2+=1;
        fail.play();
    }
}
//PARA ORGANICO
function dragDropM2()
{
    if(draggedItem.number==-1 ||draggedItem.number==1||draggedItem.number==2||draggedItem.number==3||draggedItem.number==4)
    {
        this.className = 'plasticMarron2';
        this.append(draggedItem);
        draggedItem.number=0;
        draggedItem=null;
        intentos2+=1;
        aciertos2+=1;
        win.play();
        verificacion2(aciertos2);
    }
    else
    {
        this.className = 'plasticMarron2';
        draggedItem=null;
        intentos2+=1;
        fail.play();
    }
}
function verificacion2(aciertos2) 
{
    console.log(aciertos2);
    if(aciertos2==10)
    {
        document.getElementById('juego2').style.display="none";
        document.getElementById('mensajePuntaje2').style.display="block";
        switch(intentos2)
        {
            case (10):
                { 
                    winner.play();
                    let imagen = imagenesC[0];
                    imagenResultado2.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto2').innerHTML="Excelente eres el mejor reciclador";
                    console.log("Lo hiciste excelente");
                    break;
                }
            case (11):
                {
                    winner.play();
                    let imagen = imagenesC[1];
                    imagenResultado2.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto2').innerHTML='Buen trabajo casi perfecto';
                    console.log("Lo hiciste muy bien");
                    break;
                }
            case (12):
                {
                    neutral.play();
                    let imagen = imagenesC[2];
                    imagenResultado2.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto2').innerHTML='Un novato en el reciclaje';
                    console.log("Lo hiciste bien");
                    break;
                }
            case (13):
                {
                    neutral.play();
                    let imagen = imagenesC[3];
                    imagenResultado2.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto2').innerHTML='Vamos se que puedes hacerlo mucho mejor';
                    console.log("Bien");
                    break;
                }
            default:
                {
                    loser.play();
                    let imagen = imagenesC[4];
                    imagenResultado2.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto2').innerHTML='Deberias volver a jugar los otros niveles';
                    console.log("Puedes mejorarlo");
                    break;
                }
        }
    }
}
function ocultar2()
{
    document.getElementById('mensajeInicio2').style.display="none";
    document.getElementById('juego2').style.display="block";
}