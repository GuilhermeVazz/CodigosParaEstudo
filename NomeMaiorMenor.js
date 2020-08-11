var Nome = ["Bia", "Carlos", "Guilherme", "André", "José"]

function posicionarNomes() {

    for (var i = 0; i < Nome.length; i++) {
        if (Nome[i].length >= 6) {
            console.log("Nome Maior: " + Nome[i])
        } else {
            console.log("Nome Menor: " + Nome[i])
        }
    }
    return Nome
}

posicionarNomes()
