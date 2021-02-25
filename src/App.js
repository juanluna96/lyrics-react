import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';

import axios from 'axios';
import Cancion from './components/Cancion';

function App() {

  // Definir el state
  const [busquedaLetra, setBusquedaLetra] = useState({});
  const [letra, setLetra] = useState('');

  useEffect(() => {
    if (Object.keys(busquedaLetra).length === 0) return;

    const consultarAPILetra = async () => {

      const { artista, cancion } = busquedaLetra;

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

      const resultado = await axios.get(url);

      setLetra(resultado.data.lyrics);
    };

    consultarAPILetra();
  }, [busquedaLetra]);

  return (
    <Fragment>
      <Formulario setBusquedaLetra={ setBusquedaLetra }></Formulario>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            1
          </div>
          <div className="col-md-6">
            <Cancion letra={ letra }></Cancion>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
