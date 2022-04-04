import React from "react";
import './Section1.css'
import SecImg from "./SecImg";
import Autoestima from "../../assets/img/autoestima.png"
import Justiceiras from "../../assets/img/justiceiras.png"
import Atados from "../../assets/img/atados.png"


export default () => {
    return (
        <div id="ongs" class="album py-5 bg-light">
    <div class="container">
        <h1>Conheça nossas ongs Parceiras:</h1>
        <br></br>
        <br></br>

        <div class="row">
            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <SecImg foto={Autoestima}></SecImg>
                    <div class="card-body">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button class="btn btn-outline-primary btn-lg px-4">Site</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                <SecImg foto={Justiceiras}></SecImg>
                    <div class="card-body">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button class="btn btn-outline-primary btn-lg px-4">Site</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                <SecImg foto={Atados}></SecImg>
                    <div class="card-body">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button class="btn btn-outline-primary btn-lg px-4">Site</button>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}