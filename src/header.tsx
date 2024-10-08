import './css/header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="myMenuLogo">Meu menu</h1>
      <div className="headerInteractables">
        <h3 className="home">Inicio</h3>
        <h3 className="myMenu">Meu cardápio</h3>
        <h3 className="onlineMenu">Cardápio online</h3>
        <h3 className="contact">Contatos</h3>
      </div>
    </header>
  );
}

export default Header;