import React from 'react'

const Formulario = () => {
    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form className="pt-5 pb-2 mb-3 text-white bg-transparent col card">
                        <fieldset>
                            <legend className="text-center font-weight-bold text-uppercase">Buscador letras Canciones</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="artista" className="font-italic">Artista:</label>
                                        <input id="artista" className="form-control" type="text" name="artista" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="cancion" className="font-italic">Canción:</label>
                                        <input id="cancion" className="form-control" type="text" name="cancion" />
                                    </div>
                                </div>
                            </div>

                            <button className="float-right px-5 btn btn-primary" type="submit">Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formulario
