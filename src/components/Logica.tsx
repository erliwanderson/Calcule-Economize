import { useState, FormEvent } from "react";

import "../App.css";

interface infoProps {
  title: string;
  gasoline: string | number;
  alcohol: string | number;
}

function Logica() {
  const [gasolineInput, setGasolineInput] = useState(0);
  const [alcoholInput, setAlcoholInput] = useState(0);
  const [info, setInfo] = useState<infoProps>();

  function calcular(event: FormEvent) {
    event.preventDefault();

    let calculo = alcoholInput / gasolineInput;

    if (calculo <= 0.7) {
      setInfo({
        title: "Compensar usar álcool",
        gasoline: formatarMoeda(gasolineInput),
        alcohol: formatarMoeda(alcoholInput),
      });
    } else {
      setInfo({
        title: "Compensar usar gasolina",
        gasoline: formatarMoeda(gasolineInput),
        alcohol: formatarMoeda(alcoholInput),
      });
    }
  }

  function formatarMoeda(valor: number) {
    let valorFormatado = valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return valorFormatado;
  }

  return (
    <div>
      <form className="form" onSubmit={calcular}>
        <label>Álcool (preço por litro):</label>
        <input
          className="input"
          type="number"
          min="1"
          step="0.01"
          required
          value={alcoholInput}
          onChange={(event) => setAlcoholInput(Number(event.target.value))}
        />

        <label>Gasolina (preço por litro):</label>
        <input
          className="input"
          type="number"
          min="1"
          step="0.01"
          required
          value={gasolineInput}
          onChange={(event) => setGasolineInput(Number(event.target.value))}
        />

        <input className="button" type="submit" value="Calcular" />
      </form>
      {info && Object.keys(info).length > 0 && (
        <section className="result">
          <h2 className="result-title">{info.title}</h2>
          <span>Álcool {info.alcohol}</span>
          <span>Gasolina {info.gasoline}</span>
        </section>
      )}
    </div>
  );
}

export default Logica;
