async function buscaCep(cep){
    try {
        let resposta = (await axios.get(`http://viacep.com.br/ws/${cep}/json/`)).data
        return resposta
        
    } catch (error) {
        return {}
    }
}