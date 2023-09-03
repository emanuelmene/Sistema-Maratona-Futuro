function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Abra a primeira aba (Professor) por padrão
document.getElementById("professor").style.display = "block";
document.getElementById("professor").classList.add("active");



// Função para buscar e preencher os dados dos selects
function populateSelect(selectId, endpoint, property) {
    const select = document.getElementById(selectId);

    // Faz uma requisição GET para a API JSON
    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            // Preenche as opções do select com os dados da API
            data[property].forEach(item => {
                const option = document.createElement("option");
                option.value = item.value;
                option.textContent = item.label;
                select.appendChild(option);
            });
        })
        .catch(error => {
            console.error("Erro ao buscar dados da API:", error);
        });
}

// Chama a função para preencher os selects do professor
populateSelect("cidadeProfessor", "data.json", "cidades");
populateSelect("escolaProfessor", "data.json", "escolas");

// Chama a função para preencher os selects do aluno
populateSelect("cidadeAluno", "data.json", "cidades");
populateSelect("escolaAluno", "data.json", "escolas");



//Funcao oculta senha 
const senhaInput = document.getElementById('senha');
const toggleSenhaButton = document.getElementById('toggle-senha');

toggleSenhaButton.addEventListener('click', () => {
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        toggleSenhaButton.innerHTML = '<img src="/imagens/olho-aberto.svg" alt="Ocultar Senha">';
    } else {
        senhaInput.type = 'password';
        toggleSenhaButton.innerHTML = '<img src="/imagens/olho-fechado.svg" alt="Mostrar Senha">';
    }
});

//Funcao oculta Confirmar senha 
const confirmaSenhaInput = document.getElementById('confirmar_senha');
const toggleConfirmaSenhaButton = document.getElementById('toggle-ConfirmaSenha');

toggleConfirmaSenhaButton.addEventListener('click', () => {
    if (confirmaSenhaInput.type === 'password') {
        confirmaSenhaInput.type = 'text';
        toggleConfirmaSenhaButton.innerHTML = '<img src="/imagens/olho-aberto.svg" alt="Ocultar Senha">';
    } else {
        confirmaSenhaInput.type = 'password';
        toggleConfirmaSenhaButton.innerHTML = '<img src="/imagens/olho-fechado.svg" alt="Mostrar Senha">';
    }
});
