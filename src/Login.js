import React from "react";
import { BrowserRouter as Router ,Routes, Route, Link } from "react-router-dom";
import App from "./App";




function Login(){
    return(
        
        <Router>
            <div>
                <Link to ="/welcome">Play</Link>
            </div>

            <Routes>
                <Route path = "/welcome" element={<App/>} />
                    
                
            </Routes>
        </Router>

    )
}
export default Login; 