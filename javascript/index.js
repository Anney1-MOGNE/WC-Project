setInterval(function () {

// Pretoria Time
let PretoriaElement = document.querySelector("#Pretoria");
let PretoriaDateElement = PretoriaElement.querySelector(".date");
let PretoriaTimeElement = PretoriaElement.querySelector(".time");
let PretoriaTime = moment();

PretoriaDateElement.innerHTML = PretoriaTime.format("MMMM Do YYYY");
PretoriaTimeElement.innerHTML = PretoriaTime.format("h:mm:ss [<small>]A[<small>]");

// Durban Time
let DurbanElement = document.querySelector("#Durban");
let DurbanDateElement = DurbanElement.querySelector(".date");
let DurbanTimeElement = DurbanElement.querySelector(".time");
let DurbanTime = moment();

DurbanDateElement.innerHTML = DurbanTime.format("MMMM Do YYYY");
DurbanTimeElement.innerHTML = DurbanTime.format("h:mm:ss [<small>]A[<small>]");

}, 1000);