const cadastro = new Cadastro(
    document.getElementById("nome"),
    document.getElementById("email"),
    document.getElementById("telefone"),
    document.getElementById("cpf"),
    document.getElementById("cep"),
    document.getElementById("rua"),
    document.getElementById("numero"),
    document.getElementById("complemento"),
    document.getElementById("bairro"),
    document.getElementById("cidade"),
    document.getElementById("estado"),
    document.getElementById("pais")
)

function preenchimentoAutomatico(rua, bairro, cidade, estado) { 
    cadastro.rua.value = rua
    cadastro.bairro.value = bairro
    cadastro.cidade.value = cidade
    cadastro.estado.value = estado
    cadastro.pais.value = "Brasil"
}