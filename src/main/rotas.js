import React from 'react';
import Login from '../views/login';
import CadastroUsuario from '../views/cadastroUsuario'
import Home from '../views/home';

import {Route,Switch,HashRouter} from 'react-router-dom';
import RotaEntrega from '../views/rotaEntrega';
import Pedidos from '../views/pedidos';
import PrivateRoute from '../components/privateRoute';

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component = {Login}/>
                <PrivateRoute path="/cadastro-usuarios" >
                    <CadastroUsuario/>
                </PrivateRoute>
                <PrivateRoute path="/home">
                    <Home />
                </PrivateRoute>
                <PrivateRoute path="/pedidos" >
                    <Pedidos />
                </PrivateRoute>
                <PrivateRoute path='/rota-entrega/:codigo'>
                    <RotaEntrega />
                </PrivateRoute>
            </Switch>
        </HashRouter>
    )
}

export default Rotas