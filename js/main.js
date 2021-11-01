// Selectores
// Menú móvil
var menuToggle = document.getElementById('menuToggle');
var menuDesk = document.getElementById('menuDesk');
var overlay = document.getElementById('overlay');
// Información Técnica
var infoJuno = document.getElementById("infoJuno");
var infoRFranklin = document.getElementById("infoRFranklin");
var infoBColombo = document.getElementById("infoBColombo");
// Botones "Elegir" en Exploradores
var btnJupiter = document.querySelector('#btnJupiter');
var btnMarte = document.querySelector('#btnMarte');
var btnMercurio = document.querySelector('#btnMercurio');
// Botones para ver la Información Técnica
var infoTecJuno = document.querySelector('#infoTecJuno');
var infoTecRosalind = document.querySelector('#infoTecRosalind');
var infoTecBColombo = document.querySelector('#infoTecBColombo');
// Modal Jupiter
var modalJupiter = document.querySelector('#modalJupiter');
var modalCloseJupiter = document.querySelector('#modalCloseJupiter');
var btnCloseJupiter = document.querySelector('#btnCloseJupiter');
// Modal Marte
var modalMarte = document.querySelector('#modalMarte');
var modalCloseMarte = document.querySelector('#modalCloseMarte');
var btnCloseMarte = document.querySelector('#btnCloseMarte');
// Modal Mercurio
var modalMercurio = document.querySelector('#modalMercurio');
var modalCloseMercurio = document.querySelector('#modalCloseMercurio');
var btnCloseMercurio = document.querySelector('#btnCloseMercurio');

// Events
// Menu Responsive
menuToggle.addEventListener('click', function () {
    menuDesk.classList.toggle('transformMenu');
    overlay.classList.toggle('d-block');
});
overlay.addEventListener('click', function () {
    overlay.classList.remove('d-block');
    menuDesk.classList.remove('transformMenu');
});
menuDesk.addEventListener('click', function () {
  overlay.classList.remove('d-block');
  menuDesk.classList.remove('transformMenu');
});

// Información Desplegable de Exploradores 
// Información técnica Juno
infoTecJuno.addEventListener('click', function () {
    infoJuno.classList.toggle('show');
});
infoJuno.addEventListener('click', function () {
  infoJuno.classList.toggle('show');
});
// Información técnica Rosalind
infoTecRosalind.addEventListener('click', function () {
  infoRFranklin.classList.toggle('show');
});
infoRFranklin.addEventListener('click', function () {
  infoRFranklin.classList.toggle('show');
});
// Información técnica Bepi Colombo
infoTecBColombo.addEventListener('click', function () {
  infoBColombo.classList.toggle('show');
});
infoBColombo.addEventListener('click', function () {
  infoBColombo.classList.toggle('show');
});

// Modales de planetas al hacer click en los botones

// Modal de Juno a Júpiter
btnJupiter.addEventListener('click', function () {
  modalJupiter.classList.add('d-block');
  overlay.classList.add('d-block');
});
// Botón de Rosalind a Marte
btnMarte.addEventListener('click', function () {
  modalMarte.classList.add('d-block');
  overlay.classList.add('d-block');
});
// Botón de Bepi Colombo a Mercurio
btnMercurio.addEventListener('click', function () {
  modalMercurio.classList.add('d-block');
  overlay.classList.add('d-block');
});

// Cerrar modales

// Cerrar modal Jupiter
modalCloseJupiter.addEventListener('click', function () {
  modalJupiter.classList.remove('d-block');
  overlay.classList.remove('d-block');
});
btnCloseJupiter.addEventListener('click', function () {
  modalJupiter.classList.remove('d-block');
  overlay.classList.remove('d-block');
});
overlay.addEventListener('click', function () {
  overlay.classList.remove('d-block');
  modalJupiter.classList.remove('d-block');
});

// Cerrar modal marte
modalCloseMarte.addEventListener('click', function () {
  modalMarte.classList.remove('d-block');
  overlay.classList.remove('d-block');
});
btnCloseMarte.addEventListener('click', function () {
  modalMarte.classList.remove('d-block');
  overlay.classList.remove('d-block');
});
overlay.addEventListener('click', function () {
  overlay.classList.remove('d-block');
  modalMarte.classList.remove('d-block');
});

// Cerrar modal mercurio
modalCloseMercurio.addEventListener('click', function () {
  modalMercurio.classList.remove('d-block');
  overlay.classList.remove('d-block');
});
btnCloseMercurio.addEventListener('click', function () {
  modalMercurio.classList.remove('d-block');
  overlay.classList.remove('d-block');
});
overlay.addEventListener('click', function () {
  overlay.classList.remove('d-block');
  modalMercurio.classList.remove('d-block');
});

