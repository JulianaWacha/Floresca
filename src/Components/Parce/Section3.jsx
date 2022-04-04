import React from "react";
import './Section1.css'
import SecImg from "./SecImg";
import Voluntariado from "../../assets/img/voluntariado.jpg"



export default () => {
    return (
        <section id="volsec2">
            <div class="row fotobody">
                <br></br>
                <div class="col-12">
                    <br></br>
                    <h1 class="main-title2"> Seja Voluntario!</h1>
                    <br></br>

                </div>
                <br></br>
                <SecImg foto={Voluntariado}></SecImg>
                <form method="post" class="main-form" action="/Home/Create">
                    <div class="card">
                        <h4>Faça seu cadastro</h4>
                        <br></br>
                        <div class="row">
                            <div class="col">
                                <div class="form-group"></div>
                                <label for="nome">Nome</label>
                                <input type="text" class="form-control" id="nome" placeholder="Nome" name="Nome" required=""></input>
                                <label for="floatingInput">Nome</label>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="validationCustom02">Sobrenome</label>
                                <input type="text" class="form-control" id="validationCustom02" placeholder="Sobrenome" required=""></input>
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <div class="form-group"></div>
                                <label for="nome">Endereço</label>
                                <input type="text" class="form-control" id="Endereço" placeholder="Endereço" required=""></input>
                                <div class="valid-feedback">
                                </div>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="Cidade">Cidade</label>
                                <input type="text" class="form-control" id="validationCustom04" placeholder="Cidade" required=""></input>
                                <div class="invalid-feedback">
                                    Por favor, confirme sua cidade.
                                </div>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="validationCustom04">Estado</label>
                                <input type="text" class="form-control" id="validationCustom04" placeholder="Estado" required=""></input>
                                <div class="invalid-feedback">
                                </div>
                            </div>

                            <div class="col-md-3 mb-3">
                                <label for="validationCustom05">CEP</label>
                                <input type="text" class="form-control" id="validationCustom05" placeholder="CEP" required=""></input>
                                <div class="invalid-feedback">
                                    Por favor, confirme seu CEP.
                                </div>
                            </div>
                        </div>
                        <h5>Area de interesse:</h5>
                        <div class="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me"></input> Psicologia
                            </label>
                            <label>
                                <input type="checkbox" value="remember-me"></input> Juridico
                            </label>
                            <label>
                                <input type="checkbox" value="remember-me"></input> Geral
                            </label>
                        </div>
                        <a class="btn btn-outline-primary" href="#">Enviar</a>
                    </div>
                    <input name="__RequestVerificationToken" type="hidden" value="CfDJ8ICARspdK2ZKvXBhTG9oSIUK8umP1D_E32KgeobLCUcpe-ST_y03FjGbKoemIvzO4fW9a4WKIiWeUnNXhG9RT8bj3RU2ryqSjN9yL2jvIANDKoKHSIQvzJNiWGcs8TdjSHOOcFBUoCk8Wjzl6BF5_zM"></input></form>
                <br></br>
                
            </div>
            <br></br>
            <br></br>

        </section>
    );
}