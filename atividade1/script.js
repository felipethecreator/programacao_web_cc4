const form = document.getElementById('infoForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cpf = document.getElementById('cpf').value;

    const formData = {
        nome: nome,
        idade: idade,
        cpf: cpf
    };

    const jsonData = JSON.stringify(formData);

    console.log(jsonData);

    alert(`Usuário cadastrado com sucesso. Olá, ${nome}!`);
});