//Procurar o botão
document.querySelector('#add-time')
//Quando clicar no botão
.addEventListener('click', cloneField) //monitorar o botão
//Executar uma ação

function cloneField() { //Toda vez que clicar no botão vai chamar o 'cloneField'
    //Duplicar os campos. Que campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //Booleano retorna true ou false
    
    //Pegar os campo antes de clonar. Quais camposss???
    const fields = newFieldContainer.querySelectorAll("input")
    
    //Para cada campo limpar os dados

    fields.forEach(function(field) {
        console,console.log(field);
        //pegar o field do momento e limpa os dados
        field.value = ''
    });



    //Colocar na página. Ondeeee??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)   //Adiciona um filho dentro do schedule-item criada variavel para facilitar

}

