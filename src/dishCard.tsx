import './css/card.css';

function Card() {
  return (
    <article className="card">
      <img
        src="https://as2.ftcdn.net/v2/jpg/04/23/81/77/1000_F_423817797_mvoUOj1AJq3eGM2o9lJcUywuJbWgqO0S.jpg"
        alt="Um prato servido com arroz branco com uma salsa em cima, batata palha e strogonoff."
        className="dishImage"
      />
      <div className='infoCard'>
        <h1 className="dishName">Nome do prato</h1>
        <p className="dishTime">Tempo de preparo</p>
        <p className="dishPortion">Quantidade de porções</p>
        <div className="buttonsCard">
          <button className="more">Ver mais</button>
          <button className="fav">Favoritar</button>
          <button className="addToMenu">Adicionar ao seu menu</button>
        </div>
      </div>
    </article>
  );
}

export default Card;