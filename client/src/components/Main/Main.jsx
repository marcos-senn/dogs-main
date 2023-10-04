import React from 'react';
import {NavLink} from "react-router-dom";

const Main = () => {
    return (
        <div>
            <h1>Esta es la pagina de inicio donde tengo que presentar la web URRA!</h1>
            
            <button>
            <NavLink to="/home">Ingresar</NavLink>
            </button>
           
            
        </div>
    )
}

export default Main;