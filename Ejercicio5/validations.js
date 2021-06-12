function createUserValidation(obj){
    const{nombre,apellido,dni}=obj;
    if(!apellido || !dni)
        throw new Error(`Falta apellido y dni`);
    
    if(typeof nombre != "string" || typeof apellido != "string")
        throw new Error(`El nombre y el apellido deben ser strings`);
    
    if(dni>9999999999)
        throw new Error(`DNI no puede contener mas de 10 caracteres`);

    if(Object.keys(obj) != "nombre,apellido,dni")
        throw new Error(`No puede haber mas atributos`); 
}

exports.createUserValidation = createUserValidation;