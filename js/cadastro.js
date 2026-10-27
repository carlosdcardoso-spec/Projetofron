const API = "http://localhost:3000/pessoas";
const cadastro = document.getElementById("formCadastro");
const campoNome = document.getElementById("nome");
const campoIdade = document.getElementById("Idade");
const mensagem = document.getElementById("mensagem");

cadastro.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const nome = campoNome.value.trim();
    const idade = Number(campoIdade.value);

    if (!nome || !Number.isInteger(idade) || idade < 0 || idade >= 130) {
        mensagem.textContent = "Informe um nome e uma idade válida";
        return;
    }

    try {
        mensagem.textContent = "";
        const resposta = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nome, idade })
        });

        if(!resposta.ok){
            throw new Error("Não foi possivel atualizar a pessoa");
        }

       mensagem.innerHTML = "Adicionado com Sucesso";
    } catch (error){
        mensagem.textContent = error.message;
    }
})