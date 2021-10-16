import React from 'react';
import {withRouter} from 'react-router-dom';
import UsuarioService from '../app/service/usuarioService'

class Home extends React.Component {

constructor(){
   super();
   this.usuarioService = new UsuarioService(); 
}

    state ={
        saldo: 0
    }

    componentDidMount(){
       const usuarioLogadoString = localStorage.getItem('usuario_logado');
       const usuarioLogado = JSON.parse(usuarioLogadoString);
       console.log(usuarioLogado);


       this.usuarioService.obterSaldoPorUsuario(usuarioLogado.id)
        .then(response =>{
            this.setState({saldo : response.data})
        }).catch(error =>{
            console.error(error.response)
        })
    }

    render() {
        return(
        <div className="jumbotron">
            <h1 className="display-3">Bem vindo!</h1>
            <p className="lead">Esse é seu Sistema de Gestão de Logística.</p>
            <p className="lead">Acesse o menu no topo da página para navegar</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#/cadastro-usuarios" role="button"><i className="fa fa-users"></i>  Cadastrar Usuário</a>
            </p>
        </div>
        )
    }
}

export default withRouter(Home)