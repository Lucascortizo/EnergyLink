
const toggleDarkModeButton = document.getElementById('botao-escuro');
const body = document.body;


toggleDarkModeButton.addEventListener('click', () => {

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        toggleDarkModeButton.textContent = 'Modo Noturno';
    } else {
        body.classList.add('dark-mode');
        toggleDarkModeButton.textContent = 'Modo Claro';
    }
});
