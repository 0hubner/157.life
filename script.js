function atualizarContador() {
    const agora = new Date();

    // Obter as partes da data e hora
    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
    const ano = agora.getFullYear();
    const hora = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    const milissegundos = String(agora.getMilliseconds()).padStart(3, '0').substring(0, 2); 

    // Construir a string do contador
    const contador = `${dia} ${mes} ${ano} ${hora}:${minutos}:${segundos}:${milissegundos}`;

    // Exibir no elemento com o id "contador"
    document.getElementById('contador').innerHTML = contador;
}

// Atualizar o contador a cada milissegundo
setInterval(atualizarContador, 1);


