let numero, saida, e;

function gerarTabuada(){
    numero = Number(document.getElementById("numero").value);
    // Pega o valor digitado no input com id= "numero" e converte para número
    saida="";
    if(numero < 0){
        saida = "Digite um número maior que zero";
        //mensagem de erro

    }
    else if(numero > 10){
        saida = "<h3> Número grande </h3>";
    }
    else{
        for(e=0; e<=100; e++){
            saida = saida + numero + "x" + e + "=" + (numero*e) + "<br>";
        }
    }
    document.getElementById("resultado").innerHTML = saida;
}   

let alunos = ["Elvis", "Adele", "Olivia Rodrigo", "Victoria", "Denaysee", "Lana Del Rey", "Taylor Swift", "Ariana Grande", "Billie Eilish", "Dua Lipa"];

let saida2 = "";

function MostrarAlunos(){
    
    for(let a=0; a<alunos.length; a++){
        saida2 = saida2 + "<li>" + alunos[a] + "</li>";
        saida2 = saida2 + "</ul>";

    }

    document.getElementById("alunos").innerHTML = saida2;
}