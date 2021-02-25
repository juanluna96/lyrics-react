import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';

import axios from 'axios';
import Cancion from './components/Cancion';

function App() {

  // Definir el state
  const [busquedaLetra, setBusquedaLetra] = useState({});
  const [letra, setLetra] = useState('');
  const [infoArtista, setInfoArtista] = useState({});

  useEffect(() => {
    if (Object.keys(busquedaLetra).length === 0) return;

    const consultarAPILetra = async () => {

      const { artista, cancion } = busquedaLetra;

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url_artista = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([
        axios.get(url),
        axios.get(url_artista)
      ]);

      setLetra(letra.data.lyrics);
      setInfoArtista(informacion.data.artist[0]);
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
