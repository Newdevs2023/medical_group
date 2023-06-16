

function abrirLogin() {

    var url = "../html/caixa_login.html";
    var nomeDaJanela = "Cadastro";
    var especificacoesDaJanela = "width=530,height=500";

    window.open(url, nomeDaJanela, especificacoesDaJanela);
}

function calcelar() {
    alert("Consulta cancelada com Sucesso !!")
}



// FUNCTION DA PAGINA CADASTRO AGENDAMENTO ADM

function mostrarInputs(opcao) {

    document.getElementById("crm").style.display = 'none';
    document.getElementById("especialidade").style.display = 'none';
    document.getElementById("nCarteirinha").style.display = 'none';
    document.getElementById("endereco").style.display = 'none';
    document.getElementById("convenio").style.display = 'none';

    var input1 = document.getElementById('medico');
    var input2 = document.getElementById('paciente');
    var input3 = document.getElementById('administrador');

    // Ocultar todos os inputs
    input1.style.display = 'none';
    input2.style.display = 'none';
    input3.style.display = 'none';

    // Mostrar o input correspondente à opção selecionada
    if (opcao === 'medico') {
        document.getElementById("nome").style.display = 'block';
        document.getElementById("data").style.display = 'block';
        document.getElementById("telefone").style.display = 'block';
        document.getElementById("especialidade").style.display = 'block';
        document.getElementById("rg").style.display = 'block';
        document.getElementById("cpf").style.display = 'block';
        document.getElementById("email").style.display = 'block';
        document.getElementById("crm").style.display = 'block';

    } else if (opcao === 'paciente') {
        document.getElementById("nome").style.display = 'block';
        document.getElementById("data").style.display = 'block';
        document.getElementById("telefone").style.display = 'block';
        document.getElementById("nCarteirinha").style.display = 'block';
        document.getElementById("rg").style.display = 'block';
        document.getElementById("cpf").style.display = 'block';
        document.getElementById("endereco").style.display = 'block';
        document.getElementById("convenio").style.display = 'block';
        document.getElementById("email").style.display = 'block';

    } else if (opcao === 'administrador') {
        document.getElementById("nome").style.display = 'block';
        document.getElementById("data").style.display = 'block';
        document.getElementById("telefone").style.display = 'block';
        document.getElementById("rg").style.display = 'block';
        document.getElementById("cpf").style.display = 'block';
        document.getElementById("endereco").style.display = 'block';
        document.getElementById("email").style.display = 'block';
    }
}