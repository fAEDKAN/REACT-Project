import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <>
            <div>
                <h1 className="">Iniciá Sesión</h1>
                <div>
                    <form action="#">
                        <div>
                            <label htmlFor="email">Correo Electrónico:</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Ingresá tu Email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña:</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Ingresá tu Contraseña"
                            />
                        </div>
                        <button type="submit">Iniciar Sesión</button>
                    </form>
                    <nav>
                        <Link to={"/register"}>
                            No tenés una cuenta? Registrate!
                        </Link>
                        {/* <Link to={"/forget-password"}>Olvidé mi password</Link> */}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Login;