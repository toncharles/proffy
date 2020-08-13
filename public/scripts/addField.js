//procurar botao
document.querySelector("#add-time")
//coletar click
.addEventListener('click', cloneField)

//acao a ser executada
function cloneField() {
    //campos a serem duplicados
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    
    const fields = newFieldContainer.querySelectorAll('input')

    //limpar campos
    fields.forEach(function(field){
        field.value = ""
    })
    //local onde vai ser inserido
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}