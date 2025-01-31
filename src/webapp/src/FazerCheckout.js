import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Header from "./Header";

function fazerCheckout(){

    return(
        <div className="fazerCheckout">
            <Header/>
            <br/>
            <div className="bloco1">
                <form action="/initcheckout" method="PUT">
                    <div>
                        <label htmlFor="obs" className="form-label">Deseja colocar uma observação?</label>
                        <input name="observacao" type="text" className="form-control" id="obs" placeholder="Observações (opcional)" optional/>
                    </div>
                    <div>
                        <label className="form-label">Viagem</label>
                        <input name="viagem" type="text" className="form-control" id="trip" placeholder="Insira o ID da viagem" required/>
                        <div className="invalid-feedback">
                            ID não existe.
                        </div>
                    </div>
                    <div>
                        <label htmlFor="km" className="form-label">Quais são os km finais do veículo?</label>
                        <input name="km_p" type="text" className="form-control" id="km" placeholder="Kms percorridos" required/>
                        <div className="invalid-feedback">
                            Por favor insira os km percorridos do veículo.
                        </div>
                    </div>
                    <br/>
                    {<button className="w-100 btn btn-primary btn-lg" type="submit">Fazer Checkout</button>}
                </form>
            </div>
        </div>
    );
}

export default fazerCheckout;