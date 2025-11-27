// Script simples para guiar a respiração
const btnRespirar = document.getElementById("btnRespirar");
const mensagem = document.getElementById("mensagemRespiracao");

const etapas = [
    "Inspire lentamente pelo nariz (4 segundos)...",
    "Segure o ar (2 segundos)...",
    "Expire pela boca (6 segundos)...",
    "Repita o ciclo e mantenha a calma..."
];

btnRespirar.addEventListener("click", () => {
    let i = 0;
    mensagem.textContent = etapas[i];
    btnRespirar.disabled = true;

    const intervalo = setInterval(() => {
        i++;
        if (i < etapas.length) {
            mensagem.textContent = etapas[i];
        } else {
            clearInterval(intervalo);
            mensagem.textContent = "Respiração concluída. Você está seguro. 💙";
            btnRespirar.disabled = false;
        }
    }, 4000);
});
