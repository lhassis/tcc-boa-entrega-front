import React from 'react';
import Login from '../views/login';
import CadastroUsuario from '../views/cadastroUsuario'
import Home from '../views/home';

import {Route,Switch,HashRouter} from 'react-router-dom';
import RotaEntrega from '../views/rotaEntrega';
import Pedidos from '../views/pedidos';

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component = {Login}/>
                <Route path="/cadastro-usuarios" component = {CadastroUsuario}/>
                <Route path="/home" component = {Home}/>
                <Route path="/pedidos" component = {Pedidos} />
                <Route path='/rota-entrega/:codigo' component={RotaEntrega} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas