// imagenes
let imgFacultad, imgMarcha, imgCentro, imgPelicula, imgCarteles, imgAula, imgCuarto, imgCalle, imgcreditosfondo;
let imgPersonajePeloLargo, imgPersonajeBarba;

// control
let escenaActual = 1;
let tuvoClases = false;

// botones
let OpcionA = false;
let OpcionB = false;
const PosA = 100;
const PosB = 500;
const Altura = 350;
const Ancho = 200;
const Alto = 75;

// diccionario de escenas
let escenas;

// audio
let musica;
let estaReproduciendo = false;

function preload() {
  imgFacultad = loadImage("./data/Facultad.png");
  imgMarcha   = loadImage("./data/Marcha.png");
  imgCentro   = loadImage("./data/Centro.png");
  imgPelicula = loadImage("./data/Pelicula.png");
  imgCarteles = loadImage("./data/Carteles.png");
  imgAula     = loadImage("./data/Aula.png");
  imgCalle    = loadImage("./data/Calle.jpeg");
  imgCuarto   = loadImage("./data/Cuarto.jpeg");
  imgcreditosfondo = loadImage("./data/fondonegro.jpeg");

  // sprites paracreditos
  imgLisandroScally= loadImage("./data/Personajeconpelolargo.jpeg");
  imgManuelVasquez     = loadImage("./data/Personajeconbarba.jpeg");

  musica = loadSound("./data/audios/musica_fondo.mp3");
}

function setup() {
  createCanvas(800, 450);
  escenas = {
    1: {
      fondo: imgFacultad,
      texto: "Clickea para empezar",
      TextoA: "Empezar",
      OpcionA: 2,
      TextoB: "Creditos",
      OpcionB: 11
    },
    2: {
      fondo: imgFacultad,
      texto: "Estas esperando a cursar y te invitan a marchar",
      TextoA: "Conocer mas",
      OpcionA: 3,
      TextoB: "Ignorarlo",
      OpcionB: 10
    },
    3: {
      fondo: imgCentro,
      texto: "Vas al centro de estudiantes a conocer mas",
      TextoA: "Hablar",
      OpcionA: 4
    },
    4: {
      fondo: imgCentro,
      texto: "Conoces mas info sobre el 16/9",
      TextoA: "Marchar",
      OpcionA: 5,
      TextoB: "Ayudar",
      OpcionB: 6
    },
    5: {
      fondo: imgMarcha,
      texto: "Vas a marchar",
      TextoA: "Inicio",
      OpcionA: 1
    },
    6: {
      fondo: imgCarteles,
      texto: "Ayudas a hacer carteles",
      TextoA: "Volver a casa",
      OpcionA: 7
    },
    7: {
      fondo: imgCuarto,
      texto: "Volves a tu casa contento",
      TextoA: "Invitar a amigos",
      OpcionA: 8
    },
    8: {
      fondo: imgCuarto,
      texto: "¿Que van a hacer con tus amigos?",
      TextoA: "Marchar",
      OpcionA: 5,
      TextoB: "Mirar pelicula",
      OpcionB: 9
    },
    9: {
      fondo: imgPelicula,
      texto: "Ves una pelicula con tus amigos",
      TextoA: "Inicio",
      OpcionA: 1
    },
    10: {
      fondo: imgAula,
      texto: "Se habla de una pelicula",
      TextoA: "Volver a casa",
      OpcionA: 7
    },
    11: {
      fondo: imgcreditosfondo,
      texto: "Creado por",
      TextoA: "Volver",
      OpcionA: 1
    }
  };
}

function draw() {
  background(200);
  cargarEscena();
}

function cargarEscena() {
  let nodo = escenas[escenaActual];
  if (!nodo) return;

  image(nodo.fondo, 0, 0, width, height);

  // ===== PANTALLA DE CRÉDITOS =====
  if (escenaActual === 11) {
    // Personajes
    image(imgLisandroScally, 80, 90, 140, 200);
    image(imgManuelVasquez, 580, 90, 140, 200);     

    push();
    textAlign(CENTER, CENTER);
    fill(255);
    stroke(0);
    strokeWeight(3);

    // Título centrado
    textSize(28);
    text(nodo.texto, width / 2, 60);
    
    textSize(20);
    text("Lisandro Scally", 150, 310);
    text ("Y", 400, 200);
    text("Manuel Vasquez", 650, 310);
    pop();

  } else {
    push();
    textAlign(CENTER, CENTER);
    textSize(28);
    fill(255);
    stroke(0);
    text(nodo.texto, width / 2, height / 2 - 40);
    pop();
  }

  // botones
  OpcionA = false;
  OpcionB = false;

  if (nodo.OpcionA !== undefined) {
    OpcionA = true;
    dibujarBoton(PosA, nodo.TextoA);
  }
  if (nodo.OpcionB !== undefined) {
    OpcionB = true;
    dibujarBoton(PosB, nodo.TextoB);
  }
}

function dibujarBoton(x, texto) {
  push();
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(x, Altura, Ancho, Alto, 8);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(22);
  text(texto, x + Ancho / 2, Altura + Alto / 2);
  pop();
}

function mousePressed() {
  let nodo = escenas[escenaActual];
  if (!nodo) return;

  // boton A
  if (OpcionA &&
      mouseX > PosA && mouseX < PosA + Ancho &&
      mouseY > Altura && mouseY < Altura + Alto) {

    // iniciar musica solo al empezar el juego
    if (escenaActual === 1 && nodo.OpcionA === 2) {
      if (musica && !estaReproduciendo) {
        try {
          musica.loop();
          estaReproduciendo = true;
        } catch (e) {
        }
      }
    }

    escenaActual = nodo.OpcionA;
  }

  // boton B
  if (OpcionB &&
      mouseX > PosB && mouseX < PosB + Ancho &&
      mouseY > Altura && mouseY < Altura + Alto) {
    escenaActual = nodo.OpcionB;
  }
}
