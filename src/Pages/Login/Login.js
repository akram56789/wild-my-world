 import React from 'react';
import { Link } from 'react-router-dom';
 
 const Login = () => {
     return (
         <div>
             <h1>this is Login</h1>
             <Link to='/register'><button>go register</button></Link>
         </div>
     );
 };
 
 export default Login;