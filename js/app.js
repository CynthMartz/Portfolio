import { expresionesRegulares } from "./expresionesRegulares.js";
import { autoheight } from "./textarea.js";
import { validarFormulario} from "./validaciones.js";


/*Llamando todos los inputs*/
const inputs = document.querySelectorAll("input,textarea");

inputs.forEach((input) => {
    
    input.addEventListener("keyup",validarFormulario);
    input.addEventListener("blur",validarFormulario);
    input.addEventListener("focus",(input) =>{
        expresionesRegulares(input.target);
    })

    const formulario = document.querySelector(".formulario");
    const btn = document.querySelector(".button_enviar");


});
