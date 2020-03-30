//Variables Calificacion
var intentos3=0;
var aciertos3=0;

var imagenResultado3 =  document.getElementById("imagenResultado3");

//Variables para basura de vidrio
var periodicoPapel = document.querySelector(".periodicoPapel");
var revistasPapel = document.querySelector(".revistasPapel");
var sobrePapel = document.querySelector(".sobrePapel");
var sobrecorreoPapel = document.querySelector(".sobrecorreoPapel");
var tripticoPapel = document.querySelector(".tripticoPapel");
var bolsaPapel = document.querySelector(".bolsaPapel");
var envasePapel = document.querySelector(".envasePapel");
var folletoPapel = document.querySelector(".folletoPapel");
var escrituraPapel = document.querySelector(".escrituraPapel");




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
var basureroB3 = document.querySelector(".paperBlue");
basureroB3.number=2;
basureroB3.addEventListener('dragover',dragOver);
basureroB3.addEventListener('dragenter',dragEnter);
basureroB3.addEventListener('dragleave', dragLeave);
basureroB3.addEventListener('drop',dragDropB3);


//Listeners de la basura vidrio
periodicoPapel.number=4;
revistasPapel.number=5;
sobrePapel.number=7;
sobrecorreoPapel.number=8;
tripticoPapel.number=9;
bolsaPapel.number=10;
envasePapel.number=11;
folletoPapel.number=12;
escrituraPapel.number=13;

periodicoPapel.addEventListener('dragstart',dragStart);
periodicoPapel.addEventListener('dragend',dragEnd);
revistasPapel.addEventListener('dragstart',dragStart);
revistasPapel.addEventListener('dragend',dragEnd);
sobrePapel.addEventListener('dragstart',dragStart);
sobrePapel.addEventListener('dragend',dragEnd);
sobrecorreoPapel.addEventListener('dragstart',dragStart);
sobrecorreoPapel.addEventListener('dragend',dragEnd);
tripticoPapel.addEventListener('dragstart',dragStart);
tripticoPapel.addEventListener('dragend',dragEnd);
bolsaPapel.addEventListener('dragstart',dragStart);
bolsaPapel.addEventListener('dragend',dragEnd);
envasePapel.addEventListener('dragstart',dragStart);
envasePapel.addEventListener('dragend',dragEnd);
folletoPapel.addEventListener('dragstart',dragStart);
folletoPapel.addEventListener('dragend',dragEnd);
escrituraPapel.addEventListener('dragstart',dragStart);
escrituraPapel.addEventListener('dragend',dragEnd);





function dragStart()
{
    switch (this.number)
    {
        //Casos para basura de vidrio
        case 4:
            {
                draggedItem = periodicoPapel;
                draggedItem.number=4;
                setTimeout(()=>(this.className ='invisible3'),0) ;
                console.log("Start");
                break;
            }
        case 5:
            {
                draggedItem = revistasPapel;
                draggedItem.number=5;
                setTimeout(()=>(this.className ='invisible3'),0) ;
                console.log("Start");
                break;
            }       
        case 7:
            {
                draggedItem = sobrePapel;
                draggedItem.number=7;
                setTimeout(()=>(this.className ='invisible3'),0) ;
                console.log("Start");
                break;
            }
        case 8:
            {
                draggedItem = sobrecorreoPapel;
                draggedItem.number=8;
                setTimeout(()=>(this.className ='invisible3'),0) ;
                console.log("Start");
                break;
            }
        case 9:
            {
                draggedItem = tripticoPapel;
                draggedItem.number=9;
                setTimeout(()=>(this.className ='invisible3'),0) ;
                console.log("Start");
                break;
            }
        case 10:
            {
                draggedItem = bolsaPapel;
                draggedItem.number=10;
                setTimeout(()=>(this.className ='invisible3'),0) ;
                console.log("Empezo a arastrasrse");
                break;
            }
        case 11:
            {
                draggedItem = envasePapel;
                draggedItem.number=11;
                setTimeout(()=>(this.className ='invisible3'),0) ;
                console.log("Empezo a arastrasrse");
                break;
            }    
        case 12:
            {
                draggedItem = folletoPapel;
                draggedItem.number=12;
                setTimeout(()=>(this.className ='invisible3'),0) ;
                console.log("Empezo a arastrasrse");
                break;
            }
        case 13:
            {
                draggedItem = escrituraPapel;
                draggedItem.number=13;
                setTimeout(()=>(this.className ='invisible3'),0) ;
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
            this.className = 'periodicoPapel';
            break;
        }
        case 5:
        {
            this.className = 'revistasPapel';
            break;
        }
        //Efectos de  retorno para organico
        case 7:
        {
            //draggedItemG.style.display = 'block';
            this.className = 'sobrePapel';
            break;
        }
        case 8:
        {
            this.className = 'sobrecorreoPapel';
            break;
        }
        case 9:
        {
            this.className = 'tripticoPapel';
            break;
        }
        //Efecto de retorno para papeles
        case 10:
        {
            this.className = 'bolsaPapel';
            break;
        }
        case 11:
        {
            this.className = 'envasePapel';
            break;
        }

        case 12:
        {
            this.className = 'folletoPapel';
            break;
        }

        case 13:
        {
            this.className = 'escrituraPapel';
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
    this.className +=' hovered3';
}
function dragEnter(e)   
{   
    e.preventDefault();
    this.className +=' hovered3';
    pop.play();
}
function dragLeave()
{
    switch(this.number)
    {

        case 2:
        {
            this.className = 'paperBlue';
            break;
        }
        default:
        {
            console.log("nada");
        }
    }
 
}


function dragDropB3()
{
    if(draggedItem.number==4||draggedItem.number==5 ||draggedItem.number==7||draggedItem.number==8||draggedItem.number==9||draggedItem.number==10||draggedItem.number==11||draggedItem.number==12||draggedItem.number==13)
    {
        this.className = 'paperBlue';
        this.append(draggedItem);
        draggedItem.number=0;
        draggedItem=null;
        intentos3+=1;
        aciertos3+=1;
        win.play();
        verificacion3(aciertos3);
    }
    else
    {
        this.className = 'paperBlue';
        draggedItem=null;
        intentos3+=1;
        fail.play();
    }
}

function verificacion3(aciertos3) 
{

    if(aciertos3==9)
    {
        document.getElementById('juego3').style.display="none";
        document.getElementById('mensajePuntaje3').style.display="block";
        switch(intentos3)
        {
            case (9):
                { 
                    winner.play();
                    let imagen = imagenesC[0];
                    imagenResultado3.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto3').innerHTML="Excelente eres el mejor reciclador";
                    console.log("Lo hiciste excelente");
                    break;
                }
            case (10):
                {
                    winner.play();
                    let imagen = imagenesC[1];
                    imagenResultado3.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto3').innerHTML='Buen trabajo casi perfecto';
                    console.log("Lo hiciste muy bien");
                    break;
                }
            case (11):
                {
                    neutral.play();
                    let imagen = imagenesC[2];
                    imagenResultado3.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto3').innerHTML='Un novato en el reciclaje';
                    console.log("Lo hiciste bien");
                    break;
                }
            case (12):
                {
                    neutral.play();
                    let imagen = imagenesC[3];
                    imagenResultado3.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto3').innerHTML='Vamos se que puedes hacerlo mucho mejor';
                    console.log("Bien");
                    break;
                }
            default:
                {
                    loser();
                    let imagen = imagenesC[4];
                    imagenResultado3.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto3').innerHTML='Deberias volver a jugar los otros niveles';
                    console.log("Puedes mejorarlo");
                    break;
                }
        }
    }
}
function ocultar3()
{
    document.getElementById('mensajeInicio3').style.display="none";
    document.getElementById('juego3').style.display="block";
}