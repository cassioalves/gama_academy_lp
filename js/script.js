  
// const form = document.getElementById('form')

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   let nome = document.getElementById('nome').value;
//   let email = document.getElementById('email').value;
//   let data = {
//     nome,
//     email,
//   }
//   let convertData = JSON.stringify(data);

//   localStorage.setItem('lead', convertData)

//   let content = document.getElementById('content')

//   let carregando = `<p>carregando...</p>`

//   let pronto = `<p>pronto</p>`

//   content.innerHTML = carregando


//   setTimeout(() => {
//     content.innerHTML = pronto
//   }, 1000)

// })

document.getElementById("botaoCadastrar").addEventListener("click", function(event){
    event.preventDefault();
    console.log('oi');
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let dados = {
        nome, 
        email
    };

    if (nome == undefined || nome == '' || email == undefined || email == '') {
        alert('Por favor, preencha os dados para concluir o cadastro!');
        return;
    }

    if (validateEmail(email) === false){
        alert('Por favor, informe um e-mail válido!');
        return;
    } 

    let jsonDados = JSON.stringify(dados);
    localStorage.setItem('dados', jsonDados);
    
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';

    
    alert('Cadastro realizado com sucesso! Obrigado :)');
  });

  document.getElementById("iconUm").addEventListener("click", function(event){
      alert('Não há');
  });

  document.getElementById("iconDois").addEventListener("click", function(event){
      alert('Não há');
  });

  document.getElementById("iconTres").addEventListener("click", function(event){
      alert('Não há');
  });

  document.getElementById("iconQuatro").addEventListener("click", function(event){
      alert('Não há');
  });

  function validateEmail (email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
  }