export function expresionesRegulares(input){
    const tipoDeInput = input.dataset.tipo;
    const regularExp = expresiones[tipoDeInput];
    input.setAttribute("pattern",regularExp);
}



const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    asunto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    mensaje: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	
}