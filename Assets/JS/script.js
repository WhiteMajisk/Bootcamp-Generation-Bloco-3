// Valida e informa a quantidade de caracteres no textarea
function validar() {
    // variavel global
    msg = document.getElementById('msg').value;
    let alerta = document.getElementById('alerta');
    let btn = document.getElementById('enviar');

    // Verifica a quantidade de caracteres no textarea
    if (msg.length > 200) {
        alerta.innerHTML = `Permitido no máximo 200 caracteres na mensagem <span style="color: #000">(${msg.length}/200)</span>...`
        btn.setAttribute('disabled', true);
        btn.style.cursor = 'not-allowed';
    }

    if (msg.length <= 200) {
        alerta.innerHTML = '';
        btn.removeAttribute('disabled');
        btn.style.cursor = 'pointer';
    }
}

// Verificação de formulário antes de enviar
function submitForm() {

    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let assunto = document.getElementById('assunto');

    if (nome.value !== '' && email.value !== '' && assunto.value !== '' && msg !== '') {
        alert('Formulário enviado com sucesso!')
    }
}