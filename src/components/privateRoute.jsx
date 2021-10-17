import React, { Component } from "react";
import { Redirect, Route } from "react-router";
import UsuarioService from "../app/service/usuarioService";

const usuarioService = new UsuarioService();

function PrivateRoute({children, ...rest}) {
    const logado = usuarioService.logado();
    console.log({logado});

    return (
        <Route
            {...rest}
            render={({location}) => 
                        logado ? (
                            children
                        ) : (
                            <Redirect to={{ pathname: '/login', state: { from: location}}} />
                        )
                    }
        />
    );
}

export default PrivateRoute;