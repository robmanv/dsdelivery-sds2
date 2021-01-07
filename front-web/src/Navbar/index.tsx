import './styles.css'
import { ReactComponent as Logo } from './logo.svg';  // Estou renomeando o ReactComponent pra Logo, pra facilitar a visualização
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav className="main-navbar">
            <Logo />
            <Link to="/" className="logo-text">DS Delivery</Link>   
        </nav>
    )
}

export default Navbar;