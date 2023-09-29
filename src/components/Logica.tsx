import "./App.css";

function Logica() {
  return (
    <div>
      <form className="form">
        <label>Álcool (preço por litro):</label>
        <input
          className="input"
          type="number"
          placeholder="4,90"
          min="1"
          step="0.01"
          required
        />

        <label>Gasolina (preço por litro):</label>
        <input
          className="input"
          type="number"
          placeholder="4,90"
          min="1"
          step="0.01"
          required
        />

        <input className="button" type="submit" value="Calcular" />
      </form>
    </div>
  );
}

export default Logica;
