 class LocalStorageService {

    static adicionarItem(chave, valor){
        localStorage.setItem(chave, JSON.stringify(valor));
    }

    static obterItem(chave){
        return localStorage.getItem(chave);
    }

    static obterToken() {
        const usuarioLogado = this.obterItem('usuario_logado');
        if (usuarioLogado) {
            const objetoUsuario = JSON.parse(usuarioLogado);
            return objetoUsuario['access_token'];
        } else {
            return '';
        }
    }
}
export default LocalStorageService;