//Variables Calificacion
var intentos6=0;
var aciertos6=0;
//Variable para las imagenes
var imagenResultado6 =  document.getElementById("imagenResultado6");
// Variables para basura de plastico
var botellaPlastico6 = document.querySelector(".botellaPlastico6");
var vasoPlastico6 = document.querySelector(".vasoPlastico6");
var peinePlastico6 = document.querySelector(".peinePlastico6");
//Variables para basura de vidrio
var botellaVidrio6 = document.querySelector(".botellaVidrio6");
var copaVidrio6 = document.querySelector(".copaVidrio6");
var platoVidrio6 = document.querySelector(".platoVidrio6");

//Varaibles para basura de papel
var papelPapel6 = document.querySelector(".papelPapel6");
var cajaPapel6 = document.querySelector(".cajaPapel6");
var avionPapel6 = document.querySelector(".avionPapel6");
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

//Variable para basurero de vidrio
var basureroG6 = document.querySelector(".plasticGreen6");
basureroG6.number=2;
basureroG6.addEventListener('dragover',dragOver);
basureroG6.addEventListener('dragenter',dragEnter);
basureroG6.addEventListener('dragleave', dragLeave);
basureroG6.addEventListener('drop',dragDropG6);
//Variables para basurero de organicos
var basureroY6 = document.querySelector(".plasticYellow6");
basureroY6.number=3;
basureroY6.addEventListener('dragover',dragOver);
basureroY6.addEventListener('dragenter',dragEnter);
basureroY6.addEventListener('dragleave', dragLeave);
basureroY6.addEventListener('drop',dragDropY6)

//Variables para basurero de papel
var basureroB6 = document.querySelector(".plasticBlue6");
basureroB6.number=4;
basureroB6.addEventListener('dragover',dragOver);
basureroB6.addEventListener('dragenter',dragEnter);
basureroB6.addEventListener('dragleave',dragLeave);
basureroB6.addEventListener('drop',dragDropB6); 

//Listeners de la basura plastica
botellaPlastico6.number=1;
vasoPlastico6.number=2;
peinePlastico6.number=3;
botellaPlastico6.addEventListener('dragstart',dragStart);
botellaPlastico6.addEventListener('dragend',dragEnd);
vasoPlastico6.addEventListener('dragstart',dragStart);
vasoPlastico6.addEventListener('dragend',dragEnd);
peinePlastico6.addEventListener('dragstart',dragStart);
peinePlastico6.addEventListener('dragend',dragEnd);
//Listeners de la basura vidrio
botellaVidrio6.number=4;
copaVidrio6.number=5;
platoVidrio6.number=6;
botellaVidrio6.addEventListener('dragstart',dragStart);
botellaVidrio6.addEventListener('dragend',dragEnd);
copaVidrio6.addEventListener('dragstart',dragStart);
copaVidrio6.addEventListener('dragend',dragEnd);
platoVidrio6.addEventListener('dragstart',dragStart);
platoVidrio6.addEventListener('dragend',dragEnd);

//Listeners de la basura de papel
papelPapel6.number=10;
cajaPapel6.number=11;
avionPapel6.number=12;
papelPapel6.addEventListener('dragstart',dragStart);
papelPapel6.addEventListener('dragend',dragEnd);
cajaPapel6.addEventListener('dragstart',dragStart);
cajaPapel6.addEventListener('dragend',dragEnd);
avionPapel6.addEventListener('dragstart',dragStart);
avionPapel6.addEventListener('dragend',dragEnd);


function dragStart()
{
    switch (this.number)
    {
        case 1:
            {
                draggedItem = botellaPlastico6;
                draggedItem.number=1;
                setTimeout(()=>(this.className ='invisible6'),0) ;
                console.log("Start");
                break;
            }
        case 2:
            {
                draggedItem = vasoPlastico6;
                draggedItem.number=2;
                setTimeout(()=>(this.className ='invisible6'),0) ;
                console.log("Start");
                break;
            }
        case 3:
            {
                draggedItem = peinePlastico6;
                draggedItem.number=3;
                setTimeout(()=>(this.className ='invisible6'),0) ;
                console.log("Start");
                break;
            }
        //Casos para basura de vidrio
        case 4:
            {
                draggedItem = botellaVidrio6;
                draggedItem.number=4;
                setTimeout(()=>(this.className ='invisible6'),0) ;
                console.log("Start");
                break;
            }
        case 5:
            {
                draggedItem = copaVidrio6;
                draggedItem.number=5;
                setTimeout(()=>(this.className ='invisible6'),0) ;
                console.log("Start");
                break;
            }
        case 6:
            {
                draggedItem = platoVidrio6;
                draggedItem.number=6;
                setTimeout(()=>(this.className ='invisible6'),0) ;
                console.log("Start");
                break;
            }
        case 10:
            {
                draggedItem = papelPapel6;
                draggedItem.number=10;
                setTimeout(()=>(this.className ='invisible6'),0) ;
                console.log("Empezo a arastrasrse");
                break;
            }
        case 11:
            {
                draggedItem = cajaPapel6;
                draggedItem.number=11;
                setTimeout(()=>(this.className ='invisible6'),0) ;
                console.log("Empezo a arastrasrse");
                break;
            }
        case 12:
            {
                draggedItem = avionPapel6;
                draggedItem.number=12;
                setTimeout(()=>(this.className ='invisible6'),0) ;
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
            this.className = 'botellaPlastico6';
            console.log("End");
            break;
        }
        case 2:
        {
            //draggedItemR.style.display = 'block';
            this.className = 'vasoPlastico6';
            break;
        }
        case 3:
        {
            this.className = 'peinePlastico6';
            break;
        }
        //Efecto de retorno para vidrio
        case 4:
        {
            //draggedItemG.style.display = 'block';
            this.className = 'botellaVidrio6';
            break;
        }
        case 5:
        {
            this.className = 'copaVidrio6';
            break;
        }
        case 6:
        {
            this.className = 'platoVidrio6';
            break;
        }
        //Efecto de retorno para papeles
        case 10:
        {
            this.className = 'papelPapel6';
            break;
        }
        case 11:
        {
            this.className = 'cajaPapel6';
            break;
        }
        case 12:
        {
            this.className = 'avionPapel6';
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
    this.className +=' hovered6';
}
function dragEnter(e)   
{   
    e.preventDefault();
    this.className +=' hovered6';
    pop.play();
}
function dragLeave()
{
    switch(this.number)
    {
        case 2:
        {
            this.className = 'plasticGreen6';
            break;
        }
        case 3:
        {
            this.className = 'plasticYellow6';
            break;
        }
        case 4:
        {
            this.className = 'plasticBlue6';
            break;
        }
        default:
        {
            console.log("nada");
        }
    }
 
}
//PARA PLASTICO
function dragDropY6 ()
{

    if(draggedItem.number==1 || draggedItem.number==2||draggedItem.number==3)
    {
        this.className = 'plasticYellow6';
        this.append(draggedItem);
        draggedItem.number=0;
        draggedItem=null;
        intentos6+=1;
        aciertos6+=1;
        win.play();
        verificacion6(aciertos6);
    }
    else
    {
        this.className = 'plasticYellow6';
        draggedItem=null;
        intentos6+=1;
        fail.play();
    }

}
//PARA VIDRIO
function dragDropG6()
{
    if(draggedItem.number==4||draggedItem.number==5||draggedItem.number==6)
    {
        this.className = 'plasticGreen6';
        this.append(draggedItem);
        draggedItem.number=0;
        draggedItem=null;
        intentos6+=1;
        aciertos6+=1;
        win.play();
        verificacion6(aciertos6);
    }
    else
    {
        this.className = 'plasticGreen6';
        draggedItem=null;
        intentos6+=1;
        fail.play();
    }
}
//PARA PAPEL
function dragDropB6()
{
    if(draggedItem.number==10 ||draggedItem.number==11||draggedItem.number==12)
    {
        this.className = 'plasticBlue6';
        this.append(draggedItem);
        win.play();
        draggedItem.number=0;
        draggedItem=null;
        intentos6+=1;
        aciertos6+=1;
        verificacion6(aciertos6);
    }
    else
    {
        this.className = 'plasticBlue6';
        draggedItem=null;
        intentos6+=1;
        fail.play();
    }
}
function verificacion6(aciertos6) 
{
    if(aciertos6==9)
    {
        document.getElementById('juego6').style.display="none";
        document.getElementById('mensajePuntaje6').style.display="block";
        console.log(intentos6);
        switch(intentos6)
        {
            case (9):
                { 
                    winner.play();
                    let imagen = imagenesC[0];
                    imagenResultado6.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto6').innerHTML="Excelente eres el mejor reciclador";
                    console.log("Lo hiciste excelente");
                    break;
                }
            case (10):
                { 
                    winner.play();
                    let imagen = imagenesC[1];
                    imagenResultado6.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto6').innerHTML='Buen trabajo casi perfecto';
                    console.log("Lo hiciste muy bien");
                    break;
                }
            case (11):
                {
                    neutral.play();
                    let imagen = imagenesC[2];
                    imagenResultado6.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto6').innerHTML='Un novato en el reciclaje';
                    console.log("Lo hiciste bien");
                    break;
                }
            case (12):
                {
                    neutral.play();
                    let imagen = imagenesC[3];
                    imagenResultado6.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto6').innerHTML='Vamos se que puedes hacerlo mucho mejor';
                    console.log("Bien");
                    break;
                }
            default:
                {
                    loser.play(); 
                    let imagen = imagenesC[4];
                    imagenResultado6.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto6').innerHTML='Deberias volver a jugar los otros niveles';
                    console.log("Puedes mejorarlo");
                    break;
                }
        }
    }
}
function ocultar6()
{
    document.getElementById('mensajeInicio6').style.display="none";
    document.getElementById('juego6').style.display="block";
}
