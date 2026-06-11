let resultado = document.querySelector('#resultado')
function exibirdados(){

let nome = document.querySelector('#nome').value

    
let sobrenome = document.querySelector('#sobrenome').value


let idade = document.querySelector('#idade').value


let profissao = document.querySelector('#profissao').value

return resultado.innerHTML = `Olá ${nome} ${sobrenome} voce tem ${idade} anos, e trabalha como ${profissao}`

}

