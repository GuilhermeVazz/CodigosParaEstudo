function covid1(febre, tosseSeca, cansaco){

if( febre == tosseSeca || febre == cansaco || tosseSeca == cansaco){
    console.log("Sintomas fracos, sugerimos ir até a um especialista")
}else{
    console.log("Sem grandes preocuções, mas se sentir necessário vá até um especialista")
}

}

covid1(1,2,2)

//Sintomas menos Comuns

function covid2 (dores, desconfortos, dorDeGarganta, diarreia, conjutivite, dorDeCabeca, perdaDePaladar, descoloracaoDosDedos){

    if(dores == desconfortos == dorDeGarganta == diarreia || dores == conjutivite == dorDeCabeca == perdaDePaladar 
        || descoloracaoDosDedos == conjutivite == dorDeCabeca == perdaDePaladar ){
            console.log("Sintomas menos comuns, risco moderado de contaminação, recomendado ficar em casa até procurar um especialista")
        }else {
            console.log("Sem grandes preocupações, mas se sentir necessário vá até um especialista")
        }

}

covid2(1,1,1,1)

function covid3(faltaDeAr, dorOuPressaoNoPeito, perdaDeFalaOuMovimento){
    if(faltaDeAr== dorOuPressaoNoPeito || dorOuPressaoNoPeito == perdaDeFalaOuMovimento || faltaDeAr == perdaDeFalaOuMovimento){
        console.log("Sintomas graves, risco alto de contaminação, não saia de casa a menos que seja necessário e procure um especilista o mais protamente")
    }else {
        console.log("Sem grandes preocupações, mas se sentir necessário vá até um especialista")
    }
}

covid3(1 ,2, 1)
