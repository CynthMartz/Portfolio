
export const validarFormulario = (inputTipo) => {
    const input = inputTipo.target;
    const tipoDeInput = input.dataset.tipo;
    
    if(input.validity.valid){
        input.parentElement.classList.remove("formulario__grupo--invalido");
        input.parentElement.classList.add("formulario__grupo--valido");
        input.parentElement.querySelector(".formulario__validacion--estado").classList.remove("fa-xmark");
        input.parentElement.querySelector(".formulario__validacion--estado").classList.add("fa-check");
        input.parentElement.querySelector(".input__mensaje__error").classList.remove("input__mensaje__error-activo");
    }else{
        input.parentElement.classList.add("formulario__grupo--invalido");
        input.parentElement.classList.remove("formulario__grupo--valido");
        input.parentElement.querySelector(".formulario__validacion--estado").classList.remove("fa-check");
        input.parentElement.querySelector(".formulario__validacion--estado").classList.add("fa-xmark");
        input.parentElement.querySelector(".input__mensaje__error").innerHTML = mostrarMensajeDeError(tipoDeInput,input);
    }
    
}

const tipoDeErrores =[
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
]

const mensajesDeError = {
    nombre: {
        valueMissing: "Ingrese su nombre por favor",
        patternMismatch: "Solo se acepta letras",
    },
    email: {
        valueMissing: "Ingrese algun correo electrónico",
        typeMismatch: "El correo no es válido",
        patternMismatch: "Se permite ._%+-,no letras mayúsculas",
    },
    asunto: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Máximo se aceptan 50 caracteres",
    },
    mensaje: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Máximo se aceptan 300 caracteres",
    },
}

function mostrarMensajeDeError(tipoDeInput,input){
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if(input.validity[error]){
            console.log(tipoDeInput,error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje
}
