var contador = 1;
var fotos =["Coragem_feliz.png","Coragem_tedio.png", "./Coragem_chateado.png", "Coragem_com_medo1.png", "Coragem_medo2.png","Coragem_com_muito_medo.png"];

var humor=["Feliz", "Entediado", "Chateado","Medo nível 1", "Medo nível 2, preocupante...", "DE-SES-PE-RA-DO!!!!"];

var altera = ["Feliz","Entendiado", "Chateado", "Medo_1","Medo_2","Desespero"];

function trocarIMG(){
    if(contador == fotos.length){
        contador=0;
    }
    document.getElementById("img1").src=fotos[contador];
    document.getElementById("humor").innerHTML= humor[contador];
    document.getElementById("img1").alt= altera[contador];
    contador++;
    
}
