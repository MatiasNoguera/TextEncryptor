/*Conversiones de letras
    e---->enter
    o---->ober
    i---->imes
    a---->ai
    u---->ufat
*/

function encriptar() {
    const texto = document.getElementById("inputTexto").value.toLowerCase();
    
    // Validación de entrada
    if (!/^[a-z]+$/.test(texto)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    const reglas = [
        { letra: 'e', reemplazo: 'enter' },
        { letra: 'i', reemplazo: 'imes' },
        { letra: 'a', reemplazo: 'ai' },
        { letra: 'o', reemplazo: 'ober' },
        { letra: 'u', reemplazo: 'ufat' }
    ];

    let resultado = texto;

    for (const regla of reglas) {
        resultado = resultado.replaceAll(regla.letra, regla.reemplazo);
    }

    document.getElementById("resultado").value = resultado;
}

function desencriptar() {
    const texto = document.getElementById("inputTexto").value.toLowerCase();

     // Validación de entrada
     if (!/^[a-z]+(enter|imes|ai|ober|ufat)*$/.test(texto)) {
        alert("Por favor, ingrese un texto encriptado válido.");
        return;
     }

     const reglas = [
         { letra: 'enter', reemplazo: 'e' },
         { letra: 'imes', reemplazo: 'i' },
         { letra: 'ai', reemplazo: 'a' },
         { letra: 'ober', reemplazo: 'o' },
         { letra: 'ufat', reemplazo: 'u' }
     ];

     let resultado = texto;

     for (const regla of reglas) {
         resultado = resultado.replaceAll(regla.letra, regla.reemplazo);
     }

     document.getElementById("resultado").value = resultado;
}

function copiarTexto() {
   const resultado = document.getElementById("resultado");
   resultado.select();
   document.execCommand("copy");
   alert("Texto copiado al portapapeles!");
}