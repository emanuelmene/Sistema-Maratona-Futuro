document.getElementById("aluno").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("emailLogin").value;
    const senha = document.getElementById("senhaLogin").value;

    if (email === "emanuel@123" && senha === "123") {
        // Redireciona para a página "sistema.html" após o login bem-sucedido
        window.location.href = "sistema.html";
    } else {
        alert("Login falhou. Verifique suas credenciais.");
    }
});
