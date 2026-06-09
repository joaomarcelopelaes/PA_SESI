let resultado = document.querySelector('#resultado')

function exibirnome(){

    let nome = document.querySelector('#nome').value

    alert(nome)
}

function somar(){
    let valA = Number(document.querySelector('#valorA').value)
    let valB = Number(document.querySelector('#valorB').value)
    return resultado.innerHTML = valA + valB

}
function dividir(){
    let valC = Number(document.querySelector('#valorC').value)
    let valD = Number(document.querySelector('#valorD').value)
    resultado.innerHTML = valC / valD

}

function multiplicar(){
    let valF = Number(document.querySelector('#valorF').value)
    let valG = Number(document.querySelector('#valorG').value)
    resultado.innerHTML = valF * valG

}
