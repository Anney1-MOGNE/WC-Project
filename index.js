let pretoriaElement = document.querySelector("#pretoria");
let pretoriaDateElement = pretoriaElement.querySelector(".date");
let pretoriaTimeElement = pretoriaElement.querySelector(".time");
let pretoriaTime = moment();

pretoriaDateElement.innerHTML = pretoriaTime.format("MMMM Do YYYY");
pretoriaTimeElement.innerHTML = pretoriaTime.format("h:mm:ss [<small>]A[<small>]");