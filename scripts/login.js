
const formLogin = document.getElementById("form-login");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();

    if (usuario.value === "admin" && senha.value === "admin") {
        alert("Login efetuado com sucesso");
        window.location.href = "index.html";
    } else {
        alert("Usuário ou senha incorretos");
    }
});
