import { Link } from 'react-router-dom';
import './css/header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="myMenuLogo">Meu menu</h1>
      <nav className="headerInteractables">
        <h3 className="home">
          <Link to="/">
            Inicio
          </Link>
        </h3>
        <h3 className="myMenu">
          <Link to="myMenu">
            Meu cardápio
          </Link>
        </h3>
        <h3 className="onlineMenu">Cardápio online</h3>
        <h3 className="contact">Contatos</h3>
      </nav>
    </header>
  );
}

export default Header;