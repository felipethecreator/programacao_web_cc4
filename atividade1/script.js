const form = document.getElementById('infoForm');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    
    function ConferirEmail() {
        const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
        return emailRegex.test(email);
    }

    const ValidarEmail = (email) => {
        if (!ConferirEmail(email)) {
            alert("Insira um e-mail válido!")
            return false;
        }
        return true;
    }

    if (!ValidarEmail(email)) {
        return;
    }

    const formData = {
        nome: nome,
        idade: idade,
        cpf: cpf,
        email: email
       };

    const jsonData = JSON.stringify(formData);

    console.log(jsonData);
    
    alert(`Usuário cadastrado com sucesso. Olá, ${nome}!`);
});