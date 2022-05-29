class validacoes{
    static validaNome(nome){
        if(nome.length >= 3){
            return true
        } else {
            return false
        }
    }
    static cpf(cpf){
        if(cpf.length != 11){
            return false
        } else {
            return true
        }
    }
    static validaCep(cep){
        if(cep.length == 8){
            return true
        } else {
            return false
        }
    }
    static validaExistenciaDoCep(objetoApi){
        if(!objetoApi.uf){
            return false
        } else {
            return true
        }
    }
}