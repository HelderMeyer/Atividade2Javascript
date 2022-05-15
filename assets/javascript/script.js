const nome = document.getElementById('name');
const telefone = document.getElementById('phone');
const email = document.getElementById('email');
const participar = document.getElementById('participar');

participar.addEventListener('click', mostrarConsole);

function mostrarConsole() {

    if (
        nome.value == '' ||
        email.value == '' ||
        telefone.value == ''
    ) {
        window.alert('Por favor, prencha todo o formulário!')
    } else if (
        nome.value != '' &&
        email.value != '' &&
        telefone.value != ''
    ) {
        console.log('Nome: ' + nome.value)
        console.log('Telefone: ' + telefone.value)
        console.log('Email: ' + email.value)
    }

}

