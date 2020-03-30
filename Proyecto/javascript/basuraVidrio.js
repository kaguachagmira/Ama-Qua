//Variables Calificacion
var intentos1=0;
var aciertos1=0;

var imagenResultado1 =  document.getElementById("imagenResultado1");

//Variables para basura de vidrio
var botellaVidrio1 = document.querySelector(".botellaVidrio1");
var copaVidrio1 = document.querySelector(".copaVidrio1");
var cervezaVidrio1 = document.querySelector(".cervezaVidrio1");
var cocaVidrio1 = document.querySelector(".cocaVidrio1");
var mermeladaVidrio1 = document.querySelector(".mermeladaVidrio1");
var ronVidrio1 = document.querySelector(".ronVidrio1");
var perfumeVidrio1 = document.querySelector(".perfumeVidrio1");


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
var basureroG1 = document.querySelector(".plasticGreen1");

basureroG1.number=2;

basureroG1.addEventListener('dragover',dragOver);
basureroG1.addEventListener('dragenter',dragEnter);
basureroG1.addEventListener('dragleave', dragLeave);
basureroG1.addEventListener('drop',dragDropG1);


//Listeners de la basura vidrio
botellaVidrio1.number=4;
copaVidrio1.number=5;
cervezaVidrio1.number=7;
cocaVidrio1.number=8;
mermeladaVidrio1.number=9;
ronVidrio1.number=10;
perfumeVidrio1.number=11;


botellaVidrio1.addEventListener('dragstart',dragStart);
botellaVidrio1.addEventListener('dragend',dragEnd);

copaVidrio1.addEventListener('dragstart',dragStart);
copaVidrio1.addEventListener('dragend',dragEnd);

cervezaVidrio1.addEventListener('dragstart',dragStart);
cervezaVidrio1.addEventListener('dragend',dragEnd);

cocaVidrio1.addEventListener('dragstart',dragStart);
cocaVidrio1.addEventListener('dragend',dragEnd);

mermeladaVidrio1.addEventListener('dragstart',dragStart);
mermeladaVidrio1.addEventListener('dragend',dragEnd);
ronVidrio1.addEventListener('dragstart',dragStart);
ronVidrio1.addEventListener('dragend',dragEnd);
perfumeVidrio1.addEventListener('dragstart',dragStart);
perfumeVidrio1.addEventListener('dragend',dragEnd);





function dragStart()
{
    switch (this.number)
    {
        //Casos para basura de vidrio
        case 4:
            {
                draggedItem = botellaVidrio1;
                draggedItem.number=4;
                setTimeout(()=>(this.className ='invisible1'),0) ;
                console.log("Start");
                break;
            }
        case 5:
            {
                draggedItem = copaVidrio1;
                draggedItem.number=5;
                setTimeout(()=>(this.className ='invisible1'),0) ;
                console.log("Start");
                break;
            }       
        case 7:
            {
                draggedItem = cervezaVidrio1;
                draggedItem.number=7;
                setTimeout(()=>(this.className ='invisible1'),0) ;
                console.log("Start");
                break;
            }
        case 8:
            {
                draggedItem = cocaVidrio1;
                draggedItem.number=8;
                setTimeout(()=>(this.className ='invisible1'),0) ;
                console.log("Start");
                break;
            }
        case 9:
            {
                draggedItem = mermeladaVidrio1;
                draggedItem.number=9;
                setTimeout(()=>(this.className ='invisible1'),0) ;
                console.log("Start");
                break;
            }
        case 10:
            {
                draggedItem = ronVidrio1;
                draggedItem.number=10;
                setTimeout(()=>(this.className ='invisible1'),0) ;
                console.log("Empezo a arastrasrse");
                break;
            }
        case 11:
            {
                draggedItem = perfumeVidrio1;
                draggedItem.number=11;
                setTimeout(()=>(this.className ='invisible1'),0) ;
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
        //Efecto de retorno para vidrio
        case 4:
        {
            //draggedItemG.style.display = 'block';
            this.className = 'botellaVidrio1';
            break;
        }
        case 5:
        {
            this.className = 'copaVidrio1';
            break;
        }
        //Efectos de  retorno para organico
        case 7:
        {
            //draggedItemG.style.display = 'block';
            this.className = 'cervezaVidrio1';
            break;
        }
        case 8:
        {
            this.className = 'cocaVidrio1';
            break;
        }
        case 9:
        {
            this.className = 'mermeladaVidrio1';
            break;
        }
        //Efecto de retorno para papeles
        case 10:
        {
            this.className = 'ronVidrio1';
            break;
        }
        case 11:
        {
            this.className = 'perfumeVidrio1';
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
    this.className +=' hovered1';
}
function dragEnter(e)   
{   
    e.preventDefault();
    this.className +=' hovered1';
    pop.play();
}
function dragLeave()
{
    switch(this.number)
    {

        case 2:
        {
            this.className = 'plasticGreen1';
            break;
        }
        default:
        {
            console.log("nada");
        }
    }
 
}

//PARA VIDRIO
function dragDropG1()
{
    if(draggedItem.number==4||draggedItem.number==5 ||draggedItem.number==7||draggedItem.number==8||draggedItem.number==9||draggedItem.number==10||draggedItem.number==11)
    {
        this.className = 'plasticGreen1';
        this.append(draggedItem);
        draggedItem.number=0;
        draggedItem=null;
        intentos1+=1;
        aciertos1+=1;
        win.play();
        verificacion1(aciertos1);
    }
    else
    {
        this.className = 'plasticGreen1';
        draggedItem=null;
        intentos1+=1;
        fail.play();
    }
}

function verificacion1(aciertos1) 
{

    if(aciertos1==7)
    {
        document.getElementById('juego1').style.display="none";
        document.getElementById('mensajePuntaje1').style.display="block";
        switch(intentos1)
        {
            case (7):
                { 
                    winner.play();
                    let imagen = imagenesC[0];
                    imagenResultado1.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto1').innerHTML="Excelente eres el mejor reciclador";
                    console.log("Lo hiciste excelente");
                    break;
                }
            case (8):
                {
                    winner.play();
                    let imagen = imagenesC[1];
                    imagenResultado1.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto1').innerHTML='Buen trabajo casi perfecto';
                    console.log("Lo hiciste muy bien");
                    break;
                }
            case (9):
                {
                    neutral.play();
                    let imagen = imagenesC[2];
                    imagenResultado1.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto1').innerHTML='Un novato en el reciclaje';
                    console.log("Lo hiciste bien");
                    break;
                }
            case (10):
                {
                    neutral.play();
                    let imagen = imagenesC[3];
                    imagenResultado1.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto1').innerHTML='Vamos se que puedes hacerlo mucho mejor';
                    console.log("Bien");
                    break;
                }
            default:
                {
                    loser.play();
                    let imagen = imagenesC[4];
                    imagenResultado1.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto1').innerHTML='Deberias volver a jugar los otros niveles';
                    console.log("Puedes mejorarlo");
                    break;
                }
        }
    }
}
function ocultar1()
{
    document.getElementById('mensajeInicio1').style.display="none";
    document.getElementById('juego1').style.display="block";
}