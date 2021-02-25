import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';

import axios from 'axios';

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
    </Fragment>
  );
}

export default App;
