const menu = function (decisao) {

    switch (Math.floor(decisao)) {
        case 1:
            function calculo(a, b, c) {
                return (a * b) / c
            }
            console.log(calculo(65, 89, 22).toFixed(2))
            break;
        case 2:
            function area(b, h) {
                area = (b * b) * h
                return area;
            }
            console.log(area(4, 4))
            break;
        case 3:
            function verificarValor(valor = 10, entrada) {
                entrada = 10
                if (entrada == valor) {
                    console.log("Valor Aprovado")
                } else {
                    console.log("Tente denovo")
                }
            }
            verificarValor()
            break;
        case 4:
            function gerarSenha({ min = 10000, max = 99999 }) {

                const senha = Math.random() * (max - min) + min
                return Math.floor(senha)
            }
            const obj = { max: 99999, min: 10000 }
            console.log(gerarSenha(obj).toString(32).toUpperCase())
            break;
        case 5:
            function porcentagem(g, h) {
                porcentagem = g * h
                return porcentagem
            }
            console.log(porcentagem(986, 0.10).toFixed(1))
            break;

        case 6:
            function calculoDistancia(velocidade, tempo) {
                Distancia = velocidade * tempo
                return Distancia
            }
            console.log(calculoDistancia(89, 30/60))
            break;
       
        case 7:
            const piloto = {
                nome:"Lewis Hamilton",
                contrato:"U$ 50 Milhões",
                Duração: "5 years"
            }
            console.log(piloto)
            break;
        
        default:
            console.log("Try Again")
    }
}

menu(/*insira um valor*/)
