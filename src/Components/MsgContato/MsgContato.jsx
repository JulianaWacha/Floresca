import React from "react";
import './MsgContato.css'



export default () => {
    return (
        <section>
            <br></br>
            <br></br>
            <div class="col-12">
                <h1 class="main-title2"> Contato</h1>
            </div>
            <br></br>
            <div class="card">
                <div class="contato1">

                    <div id="elem1">

                        <p>Para duvidas e informações, segue nossos contatos: </p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                        </svg> (48) 99999-9999</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                        </svg> Atendimento: Das: 8:00 as 19:00 Seg á Sex</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
                        </svg> contato@floresca.com.br</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                        </svg> Rua Lorem Ipsum - 1314</p>
                    </div>
                </div>
                <div id="mensagem">
                    <br></br>
                        <h6>Ou nos deixe uma mensagem:</h6>
                        <br></br>
                        <input type="text" class="form-control" placeholder="E-mail" name="email"></input>
                        <input type="text" class="form-control" placeholder="Assunto" name="subject"></input>
                        <textarea class="form-control" rows="3" placeholder="Sua mensagem..." name="message"></textarea>
                        <br></br>
                        <a class="btn btn-outline-primary" href="#">Enviar</a>

                    </div>



            </div>
            <br></br>
            <br></br>
        </section>
    );
}