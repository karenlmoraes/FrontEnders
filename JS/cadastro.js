const campo_cep = document.querySelector('#cep');
const cadastrar = document.querySelector('#cadastrar');

campo_cep.addEventListener('change', (busca_cep) =>{
    if (campo_cep.value.length == 8) {
        fetch(`https://viacep.com.br/ws/${campo_cep.value}/json/`).then(data => {
            return data.json();

        }).then(get => {
            let resultado = JSON.stringify(get);
            let resultado_uf = JSON.stringify(get.uf);
            let resultado_cidade = JSON.stringify(get.localidade);
            let resultado_bairro = JSON.stringify(get.bairro);
            let resultado_rua = JSON.stringify(get.logradouro);

            let campo_uf = document.querySelector('#uf');
            let campo_cidade = document.querySelector('#cidade');
            let campo_bairro = document.querySelector('#bairro');
            let campo_rua = document.querySelector('#rua');
            
            console.log(resultado);
            campo_uf.value = resultado_uf;
            campo_cidade.value = resultado_cidade;
            campo_bairro.value = resultado_bairro;
            campo_rua.value = resultado_rua;
        })
    } else {
        console.log('ainda não');
    }
})

cadastrar.addEventListener('click', (conferir) => {
    let valor_nome = document.forms['formulario']['nome'].value;
    let valor_email = document.forms['formulario']['email'].value;
    let valor_senha = document.forms['formulario']['senha'].value;
    let valor_c_senha = document.forms['formulario']['c_senha'].value;
    let valor_rg = document.forms['formulario']['rg'].value;
    let valor_cep = document.forms['formulario']['cep'].value;
    let valor_uf = document.forms['formulario']['uf'].value;
    let valor_cidade = document.forms['formulario']['cidade'].value;
    let valor_bairro = document.forms['formulario']['bairro'].value;
    let valor_rua = document.forms['formulario']['rua'].value;
    let valor_numero = document.forms['formulario']['numero'].value;
    let valor_complemento = document.forms['formulario']['complemento'].value;
    
    if (valor_nome == '' || valor_email == '' || valor_senha == '' || valor_c_senha == '' || valor_rg == '' || valor_cep == '' || valor_uf == '' || valor_cidade == '' || valor_bairro == '' || valor_rua == '' || valor_numero == '' || valor_complemento == '') {
        alert('Preencha todos os campos, por favor.');
    } else {
        alert('Parabéns, você acaba de entrar na lista de espera!');
    }
})