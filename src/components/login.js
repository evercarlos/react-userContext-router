import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

export const Login = () => {

    const { setState } = useContext(ThemeContext);

    const handleSubmit= (e) => {
      e.preventDefault();
      
      setState({
        id: 1,
        name: 'Ever Carlos Rojas',
        username: 'admin',
        profile: 'SUPERADMIN'
      });

      

    }

    return (
        <>
          <div className="container">
            <div className="row">
                <div className="col-sm-4" />
                <div className="col-sm-4">
                  <form className="p-4" onSubmit={ handleSubmit }>
                    <div className="form-group">
                        <label>Usuario</label>
                        <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="user" />
                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
                    </div>
                    <div className="form-group text-center">
                      <button type="submit" className="btn btn-primary">Ingresar</button>
                    </div>
                    </form>
                </div>
            </div>
          </div>
        </>
    )
}