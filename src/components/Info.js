import React from 'react'
import styled from 'styled-components';

const Biografia = styled.p`
  max-height: 600px;
  overflow-y: scroll;
`;

const Info = ({ infoArtista }) => {

    if (Object.keys(infoArtista).length === 0) return null;

    const { strArtistThumb, strGenre, strBiographyES } = infoArtista;

    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información artista
            </div>
            <div className="card-body">
                <img src={ strArtistThumb } alt="Logo artista" />
                <p className="card-text">Genero : { strGenre }</p>
                <p className="card-text">Biografía : { strGenre }</p>
                <Biografia className="card-text">{ strBiographyES }</Biografia>
                <p className="card-text">
                    <a href={ `https://${infoArtista.strFacebook}` } target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={ `https://${infoArtista.strTwitter}` } target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={ `${infoArtista.strLastFMChart}` } target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Info
