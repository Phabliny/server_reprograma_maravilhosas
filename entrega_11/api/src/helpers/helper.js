const obterId = (array) => { // Pensar em um jeito de não repetir Id caso não alguma maravilhosa seja excluida
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
  }

const semNomeRepetido = (dados, nome) => {
    const encontrarRepetido = dados.find(Maravilhosa => Maravilhosa.name.toLowerCase() == nome.toLowerCase())
    return encontrarRepetido
}

module.exports = {
    obterId,
    semNomeRepetido
} 