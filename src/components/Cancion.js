import React, { Fragment } from 'react'
import styled from 'styled-components';

const Letra = styled.p`
  max-height: 1180px;
  overflow-y: scroll;
`;

const Cancion = ({ letra }) => {

    if (!letra) return null;

    return (
        <Fragment>
            <h2>Letra canción</h2>
            <Letra className="letra">{ letra }</Letra>
        </Fragment>
    )
}

export default Cancion
