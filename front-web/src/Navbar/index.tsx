import './styles.css'
import { ReactComponent as Logo } from './logo.svg';  // Estou renomeando o ReactComponent pra Logo, pra facilitar a visualização

function Navbar() {
    return(
        <nav className="main-navbar">
            <Logo />
            <a href="home" className="logo-text">DS Delivery</a>
        </nav>
    )
}

export default Navbar;