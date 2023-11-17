const senhaBox = document.getElementById("senha");
const tamanho = 12;
const upperletras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerletras = "abcdefghijklmnopqrstuvwxyz"
const numeros = "0123456789"
const simbolo = "@#$%&()_+^~|}{][/-=";

const caracteres = upperletras + lowerletras + numeros + simbolo

function criarSenha() {
    let password = "";
    password += upperletras[Math.floor(Math.random() * upperletras.length)];
    password += lowerletras[Math.floor(Math.random() * lowerletras.length)];
    password += numeros[Math.floor(Math.random() * numeros.length)];
    password += simbolo[Math.floor(Math.random() * simbolo.length)];

    const caracteresRestantes = caracteres.length;

    for (let i = 0; i < tamanho - 4; i++) {
        password += caracteres[Math.floor(Math.random() * caracteresRestantes)];
    }

    while(length > password.tamanho){
        password += caracteres[Math.floor(Math.random() * caracteres.length)];
    }
    senhaBox.value = password;
}
function copiarSenha(){
    senhaBox.select();
    document.execCommand("copy");
}