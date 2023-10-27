let valor = 0

const h1_valor = document.querySelector('#valor')

document.querySelector('#btn_decremento').addEventListener('click', (e) => {
    h1_valor.textContent = --valor

    // Se deseja fazer operação sem números negativos:
//     if(valor < 0){   
//       h1_valor.textContent = 0
//     }
 })

document.querySelector('#btn_incremento').addEventListener('click', () => {
    h1_valor.textContent = ++valor;
})

