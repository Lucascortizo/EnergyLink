
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


const form = document.getElementById("form-suporte");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const assunto = document.getElementById("assunto");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    if (nome.value.trim() === "" || email.value.trim() === "" || assunto.value.trim() === "" || mensagem.value.trim() === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
    }

    alert(`FORMULÁRIO ENVIADO!\n\nNome: ${nome.value}\nE-mail: ${email.value}\nAssunto: ${assunto.value}\nMensagem: ${mensagem.value}`);

    form.reset();
});


