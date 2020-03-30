var comenzar = document.getElementById("comenzar");
var cuestionario = document.getElementById("cuestionario");
var pregunta = document.getElementById("pregunta");
var preguntaImagen = document.getElementById("preguntaImagen");
var datito = document.getElementById("datito");
var respuestaImagen = document.getElementById("respuestaImagen");
var respuestaFinal = document.getElementById("respuestaFinal");

//Variables para las opciones de respuesta 
var opcionA = document.getElementById("a");
var opcionB = document.getElementById("b");
var opcionC = document.getElementById("c");
var opcionD = document.getElementById("d");
var opcionE = document.getElementById("e");
var opcionF = document.getElementById("f");

//variables para calificar
var acierto = document.getElementById("acierto");
var puntuacion = document.getElementById("puntuacion");

//variables de sonido
var win = document.getElementById("win");
var fail = document.getElementById("fail");
var winner = document.getElementById("winner");
var loser = document.getElementById("loser");
var neutral = document.getElementById("neutral");

// Quemar las preguntas en el objeto preguntas
var correctas = [
    
    {
        imagenOpcion: "img/cuestionario/bien.gif" //0
    },
    {
        imagenOpcion: "img/cuestionario/bien1.gif"//1
    },
    {
        imagenOpcion: "img/cuestionario/bien2.gif"//1
    },
    {
        imagenOpcion: "img/cuestionario/bien3.gif"//1
    },
    {
        imagenOpcion: "img/cuestionario/bien4.gif"//1
    },
    {
        imagenOpcion: "img/cuestionario/bien5.gif"//1
    },
    {
        imagenOpcion: "img/cuestionario/bien6.gif"//1
    },
    {
        imagenOpcion: "img/cuestionario/bien7.gif"//1
    },
    {
        imagenOpcion: "img/cuestionario/bien8.gif"//1
    },
    {
        imagenOpcion: "img/cuestionario/bien9.gif"//1
    },
    {
        imagenOpcion: "img/cuestionario/bien10.gif"//1
    }
   
]
var imagenes = [

    {
        imagenOpcion: "img/cuestionario/primera.png"
    },
    {
        imagenOpcion: "img/cuestionario/segunda.jpg"
    },
    {
        imagenOpcion: "img/cuestionario/tercera.jpg"
    },
    {
        imagenOpcion: "img/cuestionario/cuarta.jpg"
    },
    {
        imagenOpcion: "img/cuestionario/quinta.jpg"
    },
    {
        imagenOpcion: "img/cuestionario/sexta.png"
    },
    {
        imagenOpcion: "img/cuestionario/septima.png"
    },
    {
        imagenOpcion: "img/cuestionario/octava.jpg"
    },
    {
        imagenOpcion: "img/cuestionario/novena.jpg"
    },
    {
        imagenOpcion: "img/cuestionario/decima.png"
    },
    {
        imagenOpcion: "img/cuestionario/onceava.jpg"
    },
    {
        imagenOpcion: "img/cuestionario/doceava.jpg"
    },
    {
        imagenOpcion: "img/cuestionario/treceava.gif"
    }

]
var preguntas = [
    {
        pregunta : "El basurero que se muestra en la imagen ¿a qué tipo de basura pertenece?",
        preguntaImagen: "img/cuestionario/ninguno.png",
        opcionA : "Radioactivo",
        opcionB : "Inorgánico",
        opcionC : "Plastico",
        opcionD : "Orgánico",
        opcionE : "Papel",
        opcionF : "Ninguno",
        correcta : "f"
    },
    {
        pregunta : "¿A qué contenedor pertenece la basura de la imagen?",
        preguntaImagen: "img/cuestionario/manzana.png",
        opcionA : "Orgánico",
        opcionB : "Radioactivo",
        opcionC : "Inorgánico",
        opcionD : "Papel",
        opcionE : "Plastico",
        opcionF : "Vidrio",
        correcta : "a"
    },
    {
        pregunta : "¿A qué contenedor pertenece la basura de la imagen?",
        preguntaImagen : "img/cuestionario/vaso.png",
        opcionA : "Orgánico",
        opcionB : "Inorgánico",
        opcionC : "Vidrio",
        opcionD : "Radioactivo",
        opcionE : "Papel",
        opcionF : "Plastico",
        correcta : "f"
    },
    {
        pregunta :  "El basurero que se muestra en la imagen ¿a qué tipo de basura pertenece?",
        preguntaImagen : "img/cuestionario/plastico.png",
        opcionA : "Inorgánico",
        opcionB : "Orgánico",
        opcionC : "Vidrio",
        opcionD : "Plastico",
        opcionE : "Papel",
        opcionF : "Ninguno",
        correcta : "d"
    },
    {
        pregunta : "¿A qué contenedor pertenece la basura de la imagen?",
        preguntaImagen : "img/cuestionario/plato.png",
        opcionA : "Papel",
        opcionB : "Plastico",
        opcionC : "Vidrio",
        opcionD : "Radioactivo",
        opcionE : "Orgánico",
        opcionF : "Inorgánico",
        correcta : "c"
    },
    {
        pregunta : "¿A qué contenedor pertenece la basura de la imagen?",
        preguntaImagen : "img/cuestionario/huevos.png",
        opcionA : "Orgánico",
        opcionB : "Inorgánico",
        opcionC : "Papel",
        opcionD : "Vidrio",
        opcionE : "Radioactivo",
        opcionF : "Plastico",
        correcta : "a"
    }
    ,{
        pregunta :  "El basurero que se muestra en la imagen ¿a qué tipo de basura pertenece?",
        preguntaImagen : "img/cuestionario/vidrio.png",
        opcionA : "Inorgánico",
        opcionB : "Plastico",
        opcionC : "Orgánico",
        opcionD : "Papel",
        opcionE : "Vidrio",
        opcionF : "Ninguno",
        correcta : "e"
    },
    {
        pregunta : "¿A qué contenedor pertenece la basura de la imagen?",
        preguntaImagen : "img/cuestionario/botella.png",
        opcionA : "Plastico",
        opcionB : "Vidrio",
        opcionC : "Inorgánico",
        opcionD : "Radioactivo",
        opcionE : "Orgánico",
        opcionF : "Papel",
        correcta : "a"
    },
    {
        pregunta : "¿A qué contenedor pertenece la basura de la imagen?",
        preguntaImagen : "img/cuestionario/papelito.png",
        opcionA : "Radioactivo",
        opcionB : "Papel",
        opcionC : "Vidrio",
        opcionD : "Plastico",
        opcionE : "Orgánico",
        opcionF : "Inorgánico",
        correcta : "b"
    },
    {
        pregunta :  "El basurero que se muestra en la imagen ¿a qué tipo de basura pertenece?",
        preguntaImagen : "img/cuestionario/papel.png",
        opcionA : "Orgánico",
        opcionB : "Plastico",
        opcionC : "Radiactivo",
        opcionD : "Papel",
        opcionE : "Inorgánico",
        opcionF : "Vidrio",
        correcta : "d"
    },
    {
        pregunta : "¿A qué contenedor pertenece la basura de la imagen?",
        preguntaImagen : "img/cuestionario/avion.png",
        opcionA : "Inorgánico",
        opcionB : "Papel",
        opcionC : "Plastico",
        opcionD : "Orgánico",
        opcionE : "Radioactivo",
        opcionF : "Vidrio",
        correcta : "b"
    },
    {
        pregunta : "¿A qué contenedor pertenece la basura de la imagen?",
        preguntaImagen : "img/cuestionario/copa.png",
        opcionA : "Radioactivo",
        opcionB : "Inorgánico",
        opcionC : "Orgánico",
        opcionD : "Vidrio",
        opcionE : "Papel",
        opcionF : "Plastico",
        correcta : "d"
    },
    {
        pregunta :  "El basurero que se muestra en la imagen ¿a qué tipo de basura pertenece?",
        preguntaImagen : "img/cuestionario/organico.png",
        opcionA : "Inorgánico",
        opcionB : "Vidrio",
        opcionC : "Plastico",
        opcionD : "Radiactivo",
        opcionE : "Orgánico",
        opcionF : "Papel",
        correcta : "e"
    }
    
];
var calificacion = [
    
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
    },
]
// Variables para el control de las preguntas y respuestas
//Guardo en una variable
var ultimaPregunta = preguntas.length - 1;
var preguntaActual = 0;
var puntaje = 0;
var intentosC = 0;


//Evento que se dispara al darle click 
comenzar.addEventListener("click",empezarCuestionario);
// Comenzar juego

function empezarCuestionario()
{
    comenzar.style.display = "none";
    mostrarPreguntaRespuestas();
    cuestionario.style.display = "block";
    mostrarAciertos();
}

// Funcion que me permite mostrar las preguntas y respuestas y tambien la imagen

function mostrarPreguntaRespuestas()
{
    //Empiezar en cero luego aumenta la pregunta actual para recorrer todas las preguntas 
    let preguntita = preguntas[preguntaActual];
    
    pregunta.innerHTML = "<p>"+ preguntita.pregunta +"</p>";
    preguntaImagen.innerHTML = "<img src="+ preguntita.preguntaImagen +">";
    opcionA.innerHTML = preguntita.opcionA;
    opcionB.innerHTML = preguntita.opcionB;
    opcionC.innerHTML = preguntita.opcionC;
    opcionD.innerHTML = preguntita.opcionD;
    opcionE.innerHTML = preguntita.opcionE;
    opcionF.innerHTML = preguntita.opcionF;
}


// render progress
function mostrarAciertos()
{
    for(let i = 0; i <= ultimaPregunta; i++)
    {
        acierto.innerHTML += "<div class='prog' id="+ i +"></div>";
    }
}

function verificarRespuesta(respuesta)
{
    let imagen = imagenes[0];
    let randomica ;
    randomica = Math.floor(Math.random()*((correctas.length) -0) + 0);
    //console.log(randomica);
    let correcto = correctas[randomica]; 
     
    if( respuesta == preguntas[preguntaActual].correcta)
    {
        win.play();
        // si esto ocurre la pregunta es correcta
        puntaje++;
        intentosC++;
        //Muestra un gif aleatorio feliz
        respuestaCorrecta();
        respuestaImagen.innerHTML = "<img src="+ correcto.imagenOpcion +">";
        datito.style.display="block";
        verificarfin();
    }
    else
    { 
        //Caso contrario la respuesta es incorrecta y cambia el color del acierto a rojo
        intentosC++;
        respuestaIncorrecta();
        datito.style.display="block";
        imagen = imagenes[preguntaActual];
        fail.play();
        switch(preguntaActual)
        {
            case 0:
                {
                    respuestaImagen.innerHTML = "<img src="+ imagen.imagenOpcion +">";
                    document.getElementById('mensaje').innerHTML="Los contenedores de basura tiene colores como VERDE, AZUL, AMARILLO, MARRON y ROJO.";
                    break;
                }
            case 1:
                {
                    respuestaImagen.innerHTML = "<img src="+ imagen.imagenOpcion +">";
                    document.getElementById('mensaje').innerHTML="Recuerda si abandonas una manzana en el campo no tendra efectos adversos en el ambiente, finalmente se descomponera en la tierra.";
                    break;
                }
            case 2:
                {
                    respuestaImagen.innerHTML = "<img src="+ imagen.imagenOpcion +">";
                    document.getElementById('mensaje').innerHTML="Solo te recuerdo que los vasos plasticos tardan hasta !150 AÑOS en degradarse!.";
                    break;
                }
            case 3:
                {
                    respuestaImagen.innerHTML = "<img src="+ imagen.imagenOpcion +">";
                    document.getElementById('mensaje').innerHTML="Los contenedores con color amarillo guardan basura plastica.";
                    break;
                }
            case 4:
                {
                    respuestaImagen.innerHTML = "<img src="+ imagen.imagenOpcion +">";
                    document.getElementById('mensaje').innerHTML="Con un simple golpe se rompen, sí, pero los pequeños trocitos permanecen en la naturaleza unos 4.000 años.";
                    break;
                }
            case 5:
                {
                    respuestaImagen.innerHTML = "<img src="+ imagen.imagenOpcion +">";
                    document.getElementById('mensaje').innerHTML="Las cascaras de huevos junto con hojas secas y otros materiales orgánicos conforman un compost para mejorar la tierra en cultivos.";
                    break;
                }
            case 6:
                {
                    respuestaImagen.innerHTML = "<img src="+ imagen.imagenOpcion +">";
                    document.getElementById('mensaje').innerHTML="Los contenedores con color verde guardan residuos de vidrios.";
                    break;
                }
            case 7:
                {
                    respuestaImagen.innerHTML = "<img src="+ imagen.imagenOpcion +">";
                    document.getElementById('mensaje').innerHTML="Solo te recuerdo que las botellas plasticas tardan !Más de un siglo en degradarse!.";
                    break;
                }
            case 7:
                {
                    respuestaImagen.innerHTML = "<img src="+ imagen.imagenOpcion +">";
                    document.getElementById('mensaje').innerHTML="EL papel es basicamente celulosa y su tiempo descomposición es bajo.";
                    break;
                }
            case 8:
                {
                    respuestaImagen.innerHTML = "<img src="+ imagen.imagenOpcion +">";
                    document.getElementById('mensaje').innerHTML="Si un papel supera el 30% de suciedad ya no es reciclable por esta razon se debe evitar emplear demasiados tintes.";
                    break;
                }
            case 9:
                {
                    respuestaImagen.innerHTML = "<img src="+ imagen.imagenOpcion +">";
                    document.getElementById('mensaje').innerHTML="Los contenedores con color azul o celeste guardan residuos de papel.";
                    break;
                }
            case 10:
                {
                    respuestaImagen.innerHTML = "<img src="+ imagen.imagenOpcion +">";
                    document.getElementById('mensaje').innerHTML="Los avioncitos de papel estan hechos de.... !!SI PAPEL!!";
                    break;
                }
            case 11:
                {
                    respuestaImagen.innerHTML = "<img src="+ imagen.imagenOpcion +">";
                    document.getElementById('mensaje').innerHTML="No olvides que para los microorganismos del suelo es dificil realizar la descomposición del vidrio";
                    break;
                }
            case 12:
                {
                    respuestaImagen.innerHTML = "<img src="+ imagen.imagenOpcion +">";
                    document.getElementById('mensaje').innerHTML="En los contenedores de color marrón o color café se almacena basura organica que tarda entre 1 semana hasta 6 meses en degradarse";
                    break;
                }
            default:
            {
                console.log("pues nada");
                
            }

        }
        verificarfin();
        
    }


    //Si la pregunta actual su numero aun es menor al numero de la ultima pregunta vuelvo a mostrar
    //las preguntas y respuestas pero aumentado el numero de pregunta actual para que aparezca la siguiente
    if(preguntaActual < ultimaPregunta)
    {
        preguntaActual++;
        mostrarPreguntaRespuestas();
    }
    //Caso contrario ya se mostraron todas las preguntas entonces se llama a funcion que comprueba la calificacion en base
    // a los aciertos y los desaciertos
    else
    {
       
    }
}

// Respuesta correcta
function respuestaCorrecta()
{
    //Si es correcta cambio el stylo del circulo a verde
    document.getElementById(preguntaActual).style.backgroundColor = "#0f0";
    //Se quita el contenido en caso que la anterior pregunta hubiese sido contestado erroneamente
    //document.getElementById('mensaje').style.display="none";
    document.getElementById('mensaje').style.backgroundColor = "#0f0";
    document.getElementById('mensaje').innerHTML="CORRECTO";

}

// Respuesta incorrecta
function respuestaIncorrecta()
{
    //Si es incorrecta cambio el stylo del circulo a rojo
    document.getElementById(preguntaActual).style.backgroundColor = "#f00";
    document.getElementById('mensaje').style.backgroundColor = "#f00";
}
function verificarfin()
{
    //console.log("entre");
    if(intentosC==13)
    {   
        document.getElementById("todo").style.display="none";
        document.getElementById("datito").style.display="none";
        document.getElementById("final").style.display="block";
        document.getElementById('mensaje').style.display="none";
        switch(puntaje)
        {
            case 13:
                {
                    winner.play();
                    let imagen = calificacion[0];
                    respuestaFinal.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTextoFinal').innerHTML="Excelente eres el mejor reciclador";
                    console.log("Lo hiciste excelente");
                    break;
                }
            case 12:
                {
                    winner.play();
                    let imagen = calificacion[0];
                    respuestaFinal.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTextoFinal').innerHTML="Buen trabajo casi perfecto";
                    console.log("Lo hiciste excelente");
                    break;
                }
            case 11:
                {
                    winner.play();
                    let imagen = calificacion[1];
                    respuestaFinal.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTextoFinal').innerHTML="Un intento mas y lograras acertar en todo";
                    console.log("Lo hiciste excelente");
                    break;
                }
            case 10:
                {
                    winner.play();
                    let imagen = calificacion[1];
                    respuestaFinal.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTextoFinal').innerHTML="Un novato en el reciclaje";
                    console.log("Lo hiciste excelente");
                    break;
                }
            case 9:
                {
                    winner.play();
                    let imagen = calificacion[2];
                    respuestaFinal.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTextoFinal').innerHTML="¿Es esta tu primera vez reciclado? !Nada mal¡";
                    console.log("Lo hiciste excelente");
                    break;
                }
            case 8:
                {
                    winner.play();
                    let imagen = calificacion[2];
                    respuestaFinal.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTextoFinal').innerHTML="Vamos se que puedes hacerlo mucho mejor";
                    console.log("Lo hiciste excelente");
                    break;
                }
            case 7:
                {
                    loser.play();
                    let imagen = calificacion[3];
                    respuestaFinal.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTextoFinal').innerHTML="Intentalo nuevamente seguro no estabas concentrado";
                    console.log("Lo hiciste excelente");
                    break;
                }
            case 6:
                {
                    loser.play();
                    let imagen = calificacion[3];
                    respuestaFinal.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTextoFinal').innerHTML="Deberias volver a jugar los niveles de reciclaje antes de evaluarte";
                    console.log("Lo hiciste excelente");
                    break;
                }
            default:
                {
                    loser.play();
                    let imagen = calificacion[4];
                    respuestaFinal.innerHTML = "<img src="+ imagen.imagenOpcion +">"; 
                    document.getElementById('rellenarTextoFinal').innerHTML="Revisar la informacion de la pagina seria util antes de evaluarte";
                    console.log("Lo hiciste excelente");
                    break;
                }
            
        }
    }
    else
    {

    }
}
function ocultarCues()
{
    document.getElementById('mensajeInicio3').style.display="none";
    document.getElementById('juego3').style.display="block";
}



















