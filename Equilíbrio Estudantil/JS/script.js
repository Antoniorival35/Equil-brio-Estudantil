document.addEventListener('DOMcontentLoaded', () => {
    // Seleciona todos os botões de menu
    const menuButtons = document.querySelectorAll('btn-menu');

    //Adiciona um ouvinte de evento de clique para cada botão do menu
    menuButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); //Impede o comportamento padrão do Link (navegação)//
            const menuName =button.getAttribute('data-menu') //'Início'; //pagína//
             alert(`Você clicou em "${menuName.toUpperCase()}"`);
             // Aqui você poderia adicionar ló

            }

        })
    })
})