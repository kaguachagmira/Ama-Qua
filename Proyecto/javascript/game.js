//Variables Calificacion
var intentos=0;
var aciertos=0;
//Variable para las imagenes
var imagenResultado =  document.getElementById("imagenResultado");
// Variables para basura de plastico
var botellaPlastico = document.querySelector(".botellaPlastico");
var vasoPlastico = document.querySelector(".vasoPlastico");
var peinePlastico = document.querySelector(".peinePlastico");
//Variables para basura de vidrio
var botellaVidrio = document.querySelector(".botellaVidrio");
var copaVidrio = document.querySelector(".copaVidrio");
var platoVidrio = document.querySelector(".platoVidrio");
//Variables para basura organica
var platanoOrganico = document.querySelector(".platanoOrganico");
var manzanaOrganico = document.querySelector(".manzanaOrganico");
var polloOrganico = document.querySelector(".polloOrganico");
//Varaibles para basura de papel
var papelPapel = document.querySelector(".papelPapel");
var cajaPapel = document.querySelector(".cajaPapel");
var avionPapel = document.querySelector(".avionPapel");
//Variable que me permite copiar informacion
var draggedItem = null;
//Variable para el audio
var win = document.getElementById("win");
var fail = document.getElementById("fail");
var pop = document.getElementById("pop");

//Imagenes de puntuacion
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
//Variable para basurero de organicos 
var basureroM = document.querySelector(".plasticMarron");
basureroM.number=1;

basureroM.addEventListener('dragover',dragOver);
basureroM.addEventListener('dragenter',dragEnter);
basureroM.addEventListener('dragleave', dragLeave);
basureroM.addEventListener('drop',dragDropM);
//Variable para basurero de vidrio
var basureroG = document.querySelector(".plasticGreen");
basureroG.number=2;
basureroG.addEventListener('dragover',dragOver);
basureroG.addEventListener('dragenter',dragEnter);
basureroG.addEventListener('dragleave', dragLeave);
basureroG.addEventListener('drop',dragDropG);
//Variables para basurero de organicos
var basureroY = document.querySelector(".plasticYellow");
basureroY.number=3;
basureroY.addEventListener('dragover',dragOver);
basureroY.addEventListener('dragenter',dragEnter);
basureroY.addEventListener('dragleave', dragLeave);
basureroY.addEventListener('drop',dragDrop)

//Variables para basurero de papel
var basureroB = document.querySelector(".plasticBlue");
basureroB.number=4;
basureroB.addEventListener('dragover',dragOver);
basureroB.addEventListener('dragenter',dragEnter);
basureroB.addEventListener('dragleave',dragLeave);
basureroB.addEventListener('drop',dragDropB); 

//Listeners de la basura plastica
botellaPlastico.number=1;
vasoPlastico.number=2;
peinePlastico.number=3;
botellaPlastico.addEventListener('dragstart',dragStart);
botellaPlastico.addEventListener('dragend',dragEnd);
vasoPlastico.addEventListener('dragstart',dragStart);
vasoPlastico.addEventListener('dragend',dragEnd);
peinePlastico.addEventListener('dragstart',dragStart);
peinePlastico.addEventListener('dragend',dragEnd);
//Listeners de la basura vidrio
botellaVidrio.number=4;
copaVidrio.number=5;
platoVidrio.number=6;
botellaVidrio.addEventListener('dragstart',dragStart);
botellaVidrio.addEventListener('dragend',dragEnd);
copaVidrio.addEventListener('dragstart',dragStart);
copaVidrio.addEventListener('dragend',dragEnd);
platoVidrio.addEventListener('dragstart',dragStart);
platoVidrio.addEventListener('dragend',dragEnd);
//Listeners de la basura organica
platanoOrganico.number=7;
manzanaOrganico.number=8;
polloOrganico.number=9;
platanoOrganico.addEventListener('dragstart',dragStart);
platanoOrganico.addEventListener('dragend',dragEnd);
manzanaOrganico.addEventListener('dragstart',dragStart);
manzanaOrganico.addEventListener('dragend',dragEnd);
polloOrganico.addEventListener('dragstart',dragStart);
polloOrganico.addEventListener('dragend',dragEnd);

//Listeners de la basura de papel
papelPapel.number=10;
cajaPapel.number=11;
avionPapel.number=12;
papelPapel.addEventListener('dragstart',dragStart);
papelPapel.addEventListener('dragend',dragEnd);
cajaPapel.addEventListener('dragstart',dragStart);
cajaPapel.addEventListener('dragend',dragEnd);
avionPapel.addEventListener('dragstart',dragStart);
avionPapel.addEventListener('dragend',dragEnd);


function dragStart()
{
    switch (this.number)
    {
        case 1:
            {
                draggedItem = botellaPlastico;
                draggedItem.number=1;
                setTimeout(()=>(this.className ='invisible'),0) ;
                console.log("Start");
                break;
            }
        case 2:
            {
                draggedItem = vasoPlastico;
                draggedItem.number=2;
                setTimeout(()=>(this.className ='invisible'),0) ;
                console.log("Start");
                break;
            }
        case 3:
            {
                draggedItem = peinePlastico;
                draggedItem.number=3;
                setTimeout(()=>(this.className ='invisible'),0) ;
                console.log("Start");
                break;
            }
        //Casos para basura de vidrio
        case 4:
            {
                draggedItem = botellaVidrio;
                draggedItem.number=4;
                setTimeout(()=>(this.className ='invisible'),0) ;
                console.log("Start");
                break;
            }
        case 5:
            {
                draggedItem = copaVidrio;
                draggedItem.number=5;
                setTimeout(()=>(this.className ='invisible'),0) ;
                console.log("Start");
                break;
            }
        case 6:
            {
                draggedItem = platoVidrio;
                draggedItem.number=6;
                setTimeout(()=>(this.className ='invisible'),0) ;
                console.log("Start");
                break;
            }
        //Casos para basura organica
        case 7:
            {
                draggedItem = platanoOrganico;
                draggedItem.number=7;
                setTimeout(()=>(this.className ='invisible'),0) ;
                console.log("Start");
                break;
            }
        case 8:
            {
                draggedItem = manzanaOrganico;
                draggedItem.number=8;
                setTimeout(()=>(this.className ='invisible'),0) ;
                console.log("Start");
                break;
            }
        case 9:
            {
                draggedItem = polloOrganico;
                draggedItem.number=9;
                setTimeout(()=>(this.className ='invisible'),0) ;
                console.log("Start");
                break;
            }
        case 10:
            {
                draggedItem = papelPapel;
                draggedItem.number=10;
                setTimeout(()=>(this.className ='invisible'),0) ;
                console.log("Empezo a arastrasrse");
                break;
            }
        case 11:
            {
                draggedItem = cajaPapel;
                draggedItem.number=11;
                setTimeout(()=>(this.className ='invisible'),0) ;
                console.log("Empezo a arastrasrse");
                break;
            }
        case 12:
            {
                draggedItem = avionPapel;
                draggedItem.number=12;
                setTimeout(()=>(this.className ='invisible'),0) ;
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
        //Efecto de retorno para plasticos
        case 1:
        {
            //draggedItemR.style.display = 'block';
            this.className = 'botellaPlastico';
            console.log("End");
            break;
        }
        case 2:
        {
            //draggedItemR.style.display = 'block';
            this.className = 'vasoPlastico';
            break;
        }
        case 3:
        {
            this.className = 'peinePlastico';
            break;
        }
        //Efecto de retorno para vidrio
        case 4:
        {
            //draggedItemG.style.display = 'block';
            this.className = 'botellaVidrio';
            break;
        }
        case 5:
        {
            this.className = 'copaVidrio';
            break;
        }
        case 6:
        {
            this.className = 'platoVidrio';
            break;
        }
        //Efectos de  retorno para organico
        case 7:
        {
            //draggedItemG.style.display = 'block';
            this.className = 'platanoOrganico';
            break;
        }
        case 8:
        {
            this.className = 'manzanaOrganico';
            break;
        }
        case 9:
        {
            this.className = 'polloOrganico';
            break;
        }
        //Efecto de retorno para papeles
        case 10:
        {
            this.className = 'papelPapel';
            break;
        }
        case 11:
        {
            this.className = 'cajaPapel';
            break;
        }
        case 12:
        {
            this.className = 'avionPapel';
            break;
        }
        default:
        {
            console.log("Default");
        }
    }
    
}
//PARA PLASTICO
function dragOver(e)
{
    e.preventDefault();
    this.className +=' hovered';
}
function dragEnter(e)   
{   
    e.preventDefault();
    this.className +=' hovered';
    pop.play();
}
function dragLeave()
{
    switch(this.number)
    {
        case 1:
        {
            this.className = 'plasticMarron';
            break;
        }
        case 2:
        {
            this.className = 'plasticGreen';
            break;
        }
        case 3:
        {
            this.className = 'plasticYellow';
            break;
        }
        case 4:
        {
            this.className = 'plasticBlue';
            break;
        }
        default:
        {
            console.log("nada");
        }
    }
 
}
//PARA PLASTICO
function dragDrop ()
{

    if(draggedItem.number==1 || draggedItem.number==2||draggedItem.number==3)
    {
        this.className = 'plasticYellow';
        this.append(draggedItem);
        draggedItem.number=0;
        draggedItem=null;
        intentos+=1;
        aciertos+=1;
        win.play();
        verificacion(aciertos);
    }
    else
    {
        this.className = 'plasticYellow';
        draggedItem=null;
        intentos+=1;
        fail.play();
    }

}
//PARA VIDRIO
function dragDropG()
{
    if(draggedItem.number==4||draggedItem.number==5||draggedItem.number==6)
    {
        this.className = 'plasticGreen';
        this.append(draggedItem);
        draggedItem.number=0;
        draggedItem=null;
        intentos+=1;
        aciertos+=1;
        win.play();
        verificacion(aciertos);
    }
    else
    {
        this.className = 'plasticGreen';
        draggedItem=null;
        intentos+=1;
        fail.play();
    }
}
//PARA ORGANICO
function dragDropM()
{
    if(draggedItem.number==7 || draggedItem.number==8 || draggedItem.number==9)
    {
        this.className = 'plasticMarron';
        this.append(draggedItem);
        win.play();
        intentos+=1;
        aciertos+=1;
        verificacion(aciertos);
        draggedItem.number=0;
        draggedItem=null;
    }
    else
    {
        this.className = 'plasticMarron';
        draggedItem=null;
        intentos+=1;
        fail.play();
    }

}
//PARA PAPEL
function dragDropB()
{
    if(draggedItem.number==10 ||draggedItem.number==11||draggedItem.number==12)
    {
        this.className = 'plasticBlue';
        this.append(draggedItem);
        win.play();
        draggedItem.number=0;
        draggedItem=null;
        intentos+=1;
        aciertos+=1;
        verificacion(aciertos);
    }
    else
    {
        this.className = 'plasticBlue';
        draggedItem=null;
        intentos+=1;
        fail.play();
    }
}
function verificacion(aciertos) 
{
    if(aciertos==12)
    {
        document.getElementById('juego5').style.display="none";
        document.getElementById('mensajePuntaje').style.display="block";
        console.log(intentos);
        switch(intentos)
        {
            case (12):
                { 
                    winner.play();
                    let imagen = imagenesC[0];
                    imagenResultado.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto').innerHTML="Excelente eres el mejor reciclador";
                    console.log("Lo hiciste excelente");
                    break;
                }
            case (13):
                { 
                    winner.play();
                    let imagen = imagenesC[0];
                    imagenResultado.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto').innerHTML="Excelente eres el mejor reciclador";
                    console.log("Lo hiciste excelente");
                    break;
                }
            case (14):
                {
                    winner.play();
                    let imagen = imxagenesC[1];
                    imagenResultado.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto').innerHTML='Buen trabajo casi perfecto';
                    console.log("Lo hiciste muy bien");
                    break;
                }
            case (15):
                {
                    winner.play();
                    let imagen = imagenesC[1];
                    imagenResultado.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto').innerHTML='Buen trabajo casi perfecto';
                    console.log("Lo hiciste muy bien");
                    break;
                }
            case (16):
                {
                    neutral.play();
                    let imagen = imagenesC[2];
                    imagenResultado.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto').innerHTML='Un novato en el reciclaje';
                    console.log("Lo hiciste bien");
                    break;
                }
            case (17):
                {
                    neutral.play();
                    let imagen = imagenesC[2];
                    imagenResultado.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto').innerHTML='Un novato en el reciclaje';
                    console.log("Lo hiciste bien");
                    break;
                }
            case (18):
                {
                    neutral.play();
                    let imagen = imagenesC[3];
                    imagenResultado.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto').innerHTML='Vamos se que puedes hacerlo mucho mejor';
                    console.log("Bien");
                    break;
                }
            case (19):
                {
                    neutral.play();
                    let imagen = imagenesC[3];
                    imagenResultado.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto').innerHTML='Vamos se que puedes hacerlo mucho mejor';
                    console.log("Bien");
                    break;
                }
            default:
                {
                    loser.play(); 
                    let imagen = imagenesC[4];
                    imagenResultado.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto').innerHTML='Deberias volver a jugar los otros niveles';
                    console.log("Puedes mejorarlo");
                    break;
                }
        }
    }   
}
function ocultar5()
{
    document.getElementById('mensajeInicio').style.display="none";
    document.getElementById('juego5').style.display="block";
}
