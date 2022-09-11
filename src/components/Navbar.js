import React from "react";
import { NavLink } from 'react-router-dom';


const Navbar = () =>{

    return (
        <div >
            <nav className=" navbar navbar-dark bg-dark text-white">
                <div className="container-fluid d-flex justify-content-center">
                    
                    <h1>Code editor</h1> 
 
                </div>
                <div className="container-fluid d-flex justify-content-center row mt-3">
                        <div className="col-2">
                            <div className="badge bg-primary text-wrap text-white" styles="width: 6rem;">
                            <NavLink className="text-white" to="/javascript">JavaScript</NavLink>
                            </div> 
                        </div>
                        
                        <div className="col-2">
                            <div className="badge bg-primary text-wrap text-white" styles="width: 6rem;">
                            <NavLink className="text-white" to="/python">Python</NavLink>
                            </div> 
                        </div>
                        <div className="col-2">
                            <div className="badge bg-primary text-wrap text-white" styles="width: 6rem;">
                            <NavLink className="text-white" to="/php">PHP</NavLink>
                            </div> 
                        </div>
                    </div>
                    
                </nav>
        </div>
    )

}

export default Navbar;