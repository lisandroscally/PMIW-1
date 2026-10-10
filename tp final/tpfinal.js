// PONER CREDITOS


// Imagenes:
let imgFacultad;
let imgMarcha;
let imgCentro;
let imgPelicula;
let imgCarteles;
let imgAula;
let imgCuarto;
let imgCalle;


// Control
let escenaActual= 1;

// Condicionales para mostrar Botones
let OpcionA;
let OpcionB;
// Posicion de los Botones
let PosA = 100;
let PosB = 500;
let Altura = 350;
// Ancho de los Botones
let Ancho = 200;
let Alto = 75;
// Diccionario
let escenas;

let tuvoClases = false;

// Audio
let musica;
let estaReproduciendo = false;

// Preload
function preload() {
  // Cargo las imagenes
  imgFacultad=loadImage("./data/Facultad.png");
  imgMarcha=loadImage("./data/Marcha.png");
  imgCentro=loadImage("./data/Centro.png");
  imgPelicula=loadImage("./data/Pelicula.png");
  imgCarteles=loadImage("./data/Carteles.png");
  imgAula=loadImage("./data/Aula.png");
  imgCalle=loadImage("./data/Calle.jpeg";
  imgCuarto=loadImage("./data/Cuarto.jpeg");

  // Cargo el audio
  musica = loadSound("./data/audios/musica_fondo.mp3");
}

// Setup
function setup() {
  createCanvas(800, 450);
  escenas = {
  "1":
  {
  "fondo" :
    imgFacultad,
    "texto":
    "clickea para empezar",
    "OpcionA":
    2
  }
  ,
  "2":
  {
  "fondo" :
    imgFacultad,
    "texto":
    "Estas esperando a cursar y te invitan a marchar",
    "OpcionA":
    3,
    "TextoA":
    "Conocer más",
    "OpcionB":
    10,
    "TextoB":
    "Ignorarlo"
  }
  ,
  "3":
  {
  "fondo" :
    imgCentro,
    "texto":
    "Vas al centro de estudiantes a conocer más",
    "OpcionA":
    4,
    "TextoA":
    "Hablar",
  }
  ,
  "4":
  {
  "fondo" :
    imgCentro,
    "texto":
    "Conoces mas info sobre el 16/9",
    "OpcionA":
    5,
    "TextoA":
    "Marchar",
    "OpcionB":
    6,
    "TextoB":
    "Ayudar"
  }
  ,
  "5":
  {
  "fondo" :
    imgMarcha,
    "texto":
    "Vas a marchar",
    "OpcionA":
    1,
    "TextoA":
    "Inicio"
  }
  ,
  "6":
  {
  "fondo" :
    imgCarteles,
    "texto":
    "Ayudas a hacer carteles",
    "OpcionA":
    7,
    "TextoA":
    "Volver a casa"
  }
  ,
  "7":
  {
  "fondo" :
    imgCuarto,
    "texto":
    "Volves a tu casa contento",
    "OpcionA":
    8,
    "TextoA":
    "Invitar a amigos"
  }
  ,
  "8":
  {
  "fondo" :
    imgCuarto,
    "texto":
    "¿Que van a hacer con tus amigos?",
    "OpcionA":
    5,
    "TextoA":
    "Marchar",
    "OpcionB":
    9,
    "TextoB":
    "mirar pelicula"
  }
  ,
  "9":
  {
  "fondo" :
    imgPelicula,
    "texto":
    "Ves una pelicula con tus amigos",
    "OpcionA":
    1,
    "TextoA":
    "Inicio"
  }
  ,
  "10":
  {
  "fondo" :
    imgAula,
    "texto":
    "Se habla de una pelicula",
    "OpcionA":
    7,
    "TextoA":
    "Volver a casa"
  }
  ,
  "11":
  {
  "fondo" :
    imgMarcha,
    "texto":
    "Vas a marchar"
  }
};
}


function draw() {
  // Fondo
  background(200);
  // Cargo Escena
  cargarEscena();
}

function cargarEscena() {
  // Variable para tener la escena actual
  let nodo = escenas[escenaActual];
  // Muestro la imagen
  image(nodo.fondo, 0, 0, width, height);
  // Cargar texto
  push();
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
  stroke(0);
  text(nodo.texto, width/2, height/2);
  pop();
  if (escenaActual != 1 && !tuvoClases) {
    // Me fijo si tiene Opcion A
    if (nodo.OpcionA) {
      OpcionA = true;
      cargarBotonA(nodo);
    } else {
      OpcionA = false;
    }
    // Me fijo si tiene Opcion B
    if (nodo.OpcionB) {
      OpcionB = true;
      cargarBotonB(nodo);
    } else {
      OpcionB = false;
    }
  } 
}

function cargarBotonA(nodo) {
  push();
  textAlign(CENTER, CENTER);
  fill(255);
  rect(PosA, Altura, Ancho, Alto);
  fill(0);
  stroke(0);
  textSize(32);
  text(nodo.TextoA, PosA+Ancho/2, Altura + Alto/2);
  pop();
}

function cargarBotonB(nodo) {
  push();
  textAlign(CENTER, CENTER);
  fill(255);
  rect(PosB, Altura, Ancho, Alto);
  fill(0);
  stroke(0);
  textSize(32);
  text(nodo.TextoB, PosB+Ancho/2, Altura + Alto/2);
  pop();
}


function mousePressed() {
  let nodo = escenas[escenaActual];
  // Pregunto si la posición del Mouse esta en alguno de los botones
  if ((mouseX > PosA && mouseX < PosA+Ancho) && (mouseY > Altura && mouseY < Altura + Alto) && (OpcionA)) {
    if (nodo.OpcionA === 1) {
      escenaActual = 1;
    } else {
      escenaActual = nodo.OpcionA;
    }
  }
  if ((mouseX > PosB && mouseX < PosB+Ancho) && (mouseY > Altura && mouseY < Altura + Alto) && (OpcionB)) {
    escenaActual = nodo.OpcionB;
  }

  if (escenaActual === 1) {
    if (!estaReproduciendo) {
      musica.loop();
      estaReproduciendo = true;
    }
    escenaActual = nodo.OpcionA;
  }
}
