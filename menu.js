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
         
        case 8:
            function classificarTriangulo(lado1, lado2, lado3) {

                if (lado1 == lado2 && lado2 == lado3) {
                    return 'Equilátero'
                } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
                    return 'Isóceles'
                } else {
                    return 'Escaleno'
                }
            }
            console.log(classificarTriangulo(2,2,2))
            console.log(classificarTriangulo(2,3,3))
            console.log(classificarTriangulo(2,3,4))
            break

        case 9:
            function sacarDinheiro(valorSaque) {
                let contador100 = 0
                let contador50 = 0
                let contador10 = 0
                let contador5 = 0
                let contador2 = 0;
                let valorNota = calcularValorNota(valorSaque)

                while (valorSaque >= valorNota) {
                    switch (valorNota) {
                        case 100:
                            valorSaque -= 100
                            contador100++
                            break
                        case 50:
                            valorSaque -= 50
                            contador50++
                            break
                        case 10:
                            valorSaque -= 10
                            contador10++
                            break
                        case 5:
                            valorSaque -= 5
                            contador5++
                            break
                        case 2:
                            valorSaque -= 2
                            contador2++
                            break
                    }

                    valorNota = calcularValorNota(valorSaque)
                }
                return elaborarResultado(contador100, contador50, contador10, contador5, contador2)
            }
            function calcularValorNota(valorSaque) {
                if (valorSaque >= 100) {
                    return 100
                } else if (valorSaque >= 50) {
                    return 50
                } else if (valorSaque >= 10) {
                    return 10
                } else if (valorSaque >= 5) {
                    return 5
                } else if (valorSaque >= 2) {
                    return 2
                }
            }

            function elaborarResultado(contador100, contador50, contador10, contador5, contador2) {

                let resultado = ''

                if (contador100 > 0) {

                    resultado += `${contador100} nota(s) de R$ 100. `
                }

                if (contador50 > 0) {

                    resultado += `${contador50} nota(s) de R$ 50.`
                }

                if (contador10 > 0) {

                    resultado += `${contador10} notas(s) de R$ 10.`
                }

                if (contador5 > 0) {

                    resultado += `${contador5} notas(s) de R$ 5.`
                }

                if (contador2 > 0) {

                    resultado += `${contador2} notas(s) de R$ 2.`
                }
                return resultado
            }

            console.log(sacarDinheiro(156))
            break
        
        default:
            console.log("Try Again")
    }
}

menu(/*insira um valor*/)
