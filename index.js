function ejercicioUno(a, b, p) {
    switch (p) {
        case "suma":
            return console.log (a + b);
           
        case "resta":
            return console.log (a - b);
            
        case "mult":
            return console.log (a * b);
           
        case "div":
            return console.log (a / b);
            
        default:
            console.error('la operacion${p} no es valida');
    }
}
