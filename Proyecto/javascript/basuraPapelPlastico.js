//Variables Calificacion
var intentos4=0;
var aciertos4=0;

var imagenResultado4 =  document.getElementById("imagenResultado4");

//Variables para basura de papel
var periodicoPapel4 = document.querySelector(".periodicoPapel4");
var revistasPapel4 = document.querySelector(".revistasPapel4");
var sobrePapel4 = document.querySelector(".sobrePapel4");
var sobrecorreoPapel4 = document.querySelector(".sobrecorreoPapel4");
var tripticoPapel4 = document.querySelector(".tripticoPapel4");

//Varibales para basura de plastico
var botellaPlastico4 = document.querySelector(".botellaPlastico4");
var vasoPlastico4 = document.querySelector(".vasoPlastico4");
var peinePlastico4 = document.querySelector(".peinePlastico4");
var tapaPlastico4 = document.querySelector(".tapaPlastico4");
var sorbetePlastico4 = document.querySelector(".sorbetePlastico4");


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

//Variable para basurero de papel
var basureroB4 = document.querySelector(".paperBlue4");
basureroB4.number=2;
basureroB4.addEventListener('dragover',dragOver);
basureroB4.addEventListener('dragenter',dragEnter);
basureroB4.addEventListener('dragleave', dragLeave);

basureroB4.addEventListener('drop',dragDropB4);


//Listeners de la basura papel
periodicoPapel4.number=4;
revistasPapel4.number=5;
sobrePapel4.number=7;
sobrecorreoPapel4.number=8;
tripticoPapel4.number=9;


periodicoPapel4.addEventListener('dragstart',dragStart);
periodicoPapel4.addEventListener('dragend',dragEnd);
revistasPapel4.addEventListener('dragstart',dragStart);
revistasPapel4.addEventListener('dragend',dragEnd);
sobrePapel4.addEventListener('dragstart',dragStart);
sobrePapel4.addEventListener('dragend',dragEnd);
sobrecorreoPapel4.addEventListener('dragstart',dragStart);
sobrecorreoPapel4.addEventListener('dragend',dragEnd);
tripticoPapel4.addEventListener('dragstart',dragStart);
tripticoPapel4.addEventListener('dragend',dragEnd);

//Variable para basurero de plastico

var basureroY4 = document.querySelector(".plasticYellow4");
basureroY4.number=3;
basureroY4.addEventListener('dragover',dragOver);
basureroY4.addEventListener('dragenter',dragEnter);
basureroY4.addEventListener('dragleave', dragLeave);
basureroY4.addEventListener('drop',dragDropY4);


//Listeners de la basura plastico
botellaPlastico4.number=10;
vasoPlastico4.number=11;
peinePlastico4.number=12;
tapaPlastico4.number=13;
sorbetePlastico4.number=14;


botellaPlastico4.addEventListener('dragstart',dragStart);
botellaPlastico4.addEventListener('dragend',dragEnd);
vasoPlastico4.addEventListener('dragstart',dragStart);
vasoPlastico4.addEventListener('dragend',dragEnd);
peinePlastico4.addEventListener('dragstart',dragStart);
peinePlastico4.addEventListener('dragend',dragEnd);
tapaPlastico4.addEventListener('dragstart',dragStart);
tapaPlastico4.addEventListener('dragend',dragEnd);
sorbetePlastico4.addEventListener('dragstart',dragStart);
sorbetePlastico4.addEventListener('dragend',dragEnd);


function dragStart()
{
    switch (this.number)
    {
        //Casos para basura de vidrio
        case 4:
            {
                draggedItem = periodicoPapel4;
                draggedItem.number=4;
                setTimeout(()=>(this.className ='invisible4'),0) ;
                console.log("Start");
                break;
            }
        case 5:
            {
                draggedItem = revistasPapel4;
                draggedItem.number=5;
                setTimeout(()=>(this.className ='invisible4'),0) ;
                console.log("Start");
                break;
            }       
        case 7:
            {
                draggedItem = sobrePapel4;
                draggedItem.number=7;
                setTimeout(()=>(this.className ='invisible4'),0) ;
                console.log("Start");
                break;
            }
        case 8:
            {
                draggedItem = sobrecorreoPapel4;
                draggedItem.number=8;
                setTimeout(()=>(this.className ='invisible4'),0) ;
                console.log("Start");
                break;
            }
        case 9:
            {
                draggedItem = tripticoPapel4;
                draggedItem.number=9;
                setTimeout(()=>(this.className ='invisible4'),0) ;
                console.log("Start");
                break;
            }
        case 10:
            {
                draggedItem = botellaPlastico4;
                draggedItem.number=10;
                setTimeout(()=>(this.className ='invisible4'),0) ;
                console.log("Start");
                break;
            }
        case 11:
            {
                draggedItem = vasoPlastico4;
                draggedItem.number=11;
                setTimeout(()=>(this.className ='invisible4'),0) ;
                console.log("Start");
                break;
            }    
        case 12:
            {
                draggedItem = peinePlastico4;
                draggedItem.number=12;
                setTimeout(()=>(this.className ='invisible4'),0) ;
                console.log("Start");
                break;
            }
        case 13:
            {
                draggedItem = tapaPlastico4;
                draggedItem.number=13;
                setTimeout(()=>(this.className ='invisible4'),0) ;
                console.log("Start");
                break;
            }
        case 14:
            {
                draggedItem = sorbetePlastico4;
                draggedItem.number=14;
                setTimeout(()=>(this.className ='invisible4'),0) ;
                console.log("Start");
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
        //Efecto de retorno para papel
        case 4:
        {
            this.className = 'periodicoPapel4';
            break;
        }
        case 5:
        {
            this.className = 'revistasPapel4';
            break;
        }
        case 7:
        {
            this.className = 'sobrePapel4';
            break;
        }
        case 8:
        {
            this.className = 'sobrecorreoPapel4';
            break;
        }
        case 9:
        {
            this.className = 'tripticoPapel4';
            break;
        }
        case 10:
        {
            this.className = 'botellaPlastico4';
            break;
        }
        case 11:
        {
            this.className = 'vasoPlastico4';
            break;
        }
        case 12:
        {
            this.className = 'peinePlastico4';
            break;
        }
        case 13:
        {
            this.className = 'tapaPlastico4';
            break;
        }
        case 14:
        {
            this.className = 'sorbetePlastico4';
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
    this.className +=' hovered4';
}
function dragEnter(e)   
{   
    e.preventDefault();
    this.className +=' hovered4';
    pop.play();
}
function dragLeave()
{
    switch(this.number)
    {

        case 2:
        {
            this.className = 'paperBlue4';
            break;
        }
        case 3:
        {
            this.className = 'plasticYellow4';
            break;
        }
        default:
        {
            console.log("nada");
        }
    }
 
}


function dragDropB4()
{
    if(draggedItem.number==4||draggedItem.number==5 ||draggedItem.number==7||draggedItem.number==8||draggedItem.number==9)
    {
        this.className = 'paperBlue4';
        this.append(draggedItem);
        draggedItem.number=0;
        draggedItem=null;
        intentos4+=1;
        aciertos4+=1;
        win.play();
        verificacion4(aciertos4);
    }
    else
    {
        this.className = 'paperBlue4';
        draggedItem=null;
        intentos4+=1;
        fail.play();
    }
}
function dragDropY4()
{
    if(draggedItem.number==10||draggedItem.number==11 ||draggedItem.number==12||draggedItem.number==13||draggedItem.number==14)
    {
        this.className = 'plasticYellow4';
        this.append(draggedItem);
        draggedItem.number=0;
        draggedItem=null;
        intentos4+=1;
        aciertos4+=1;
        win.play();
        verificacion4(aciertos4);
    }
    else
    {
        this.className = 'plasticYellow4';
        draggedItem=null;
        intentos4+=1;
        fail.play();
    }
}
function verificacion4(aciertos4) 
{

    if(aciertos4==10)
    {
        document.getElementById('juego4').style.display="none";
        document.getElementById('mensajePuntaje4').style.display="block";
        console.log(intentos4);
        switch(intentos4)
        {
            case (10):
                { 
                    winner.play();
                    let imagen = imagenesC[0];
                    imagenResultado4.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto4').innerHTML="Excelente eres el mejor reciclador";
                    console.log("Lo hiciste excelente");
                    break;
                }
            case (11):
                {
                    winner.play();
                    let imagen = imagenesC[1];
                    imagenResultado4.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto4').innerHTML='Buen trabajo casi perfecto';
                    console.log("Lo hiciste muy bien");
                    break;  
                }
            case (12):
                {
                    neutral.play();
                    let imagen = imagenesC[2];
                    imagenResultado4.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto4').innerHTML='Un novato en el reciclaje';
                    console.log("Lo hiciste bien");
                    break;
                }
            case (13):
                {
                    neutral.play();
                    let imagen = imagenesC[3];
                    imagenResultado4.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto4').innerHTML='Vamos se que puedes hacerlo mucho mejor';
                    console.log("Bien");
                    break;
                }
            default:
                {
                    loser.play();
                    let imagen = imagenesC[4];
                    imagenResultado4.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTexto4').innerHTML='Deberias volver a jugar los otros niveles';
                    console.log("Puedes mejorarlo");
                    break;
                }
        }
    }
}
function ocultar4()
{
    document.getElementById('mensajeInicio4').style.display="none";
    document.getElementById('juego4').style.display="block";
}