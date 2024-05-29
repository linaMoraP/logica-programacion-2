
function convertir(){
    let grados = parseFloat(prompt("Ingresa la temperatura en grados Celsius"));

    let gradosF = (((grados) * (9/5)) + 32);
    let gradosK = ((grados) + 273.15);

    if (isNaN(grados)) {
        console.log("No puedes ingresar letras");
    }else{
        console.log(`La temperatura en grados Farenheit es de ${gradosF}°F y en grados Kelvin de ${gradosK}K`);

    }
}
convertir();
