import {Link} from 'react-router-dom';
let Navbar=()=>{
    return(
        <>
            <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
        </>
    )
}
export default Navbar;