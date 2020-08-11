var horas = 0
var minutos = 0
var segundos = 1
const temporizador = setInterval(function () {
    if (minutos >= 60) {
        minutos = 0
        horas++

    }

    if (segundos >= 60) {
        segundos = segundos / 60
        minutos++
    }

    let Tempo = []
    Tempo.push("Hora(s): " + horas + " | " + "Minuto(s): " + minutos + " | " +"Segundo(s): " + segundos++)

    console.log("_________________________________________________")

    console.log(Tempo)

}, 1000)
