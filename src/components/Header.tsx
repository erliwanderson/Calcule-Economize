import "../App.css";
import "../index.css";
import logoImg from "../assets/logo.png";
function Header() {
  return (
    <div>
      <main className="container">
        <img
          className="logo"
          src={logoImg}
          alt="Logo da calculadora de gasolina ou alcool"
        />
        <h1 className="title">Qual melhor opção?</h1>
      </main>
    </div>
  );
}

export default Header;
