cadastro.cep.addEventListener("blur", async ()=>{
    let api = await buscaCep(cadastro.cep.value)
    let endereco = new Endereco(
        api.cep,
        api.logradouro,
        "",
        "",
        api.bairro, 
        api.localidade,
        api.uf,
        "Brasil"
        )
    preenchimentoAutomatico(endereco.rua, endereco.bairro, endereco.cidade, endereco.estado)
})