import React from "react";

function Prueba() {
  return (
    <section className="w-100">
      <div className="container formContainer">
        <div className="row">
          <h1 className="titContacto">
            En qué podemos ayudarte? 
          </h1>
          <h2 className="titContacto">Dejanos tu consulta y en breve te
            respondemos</h2>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col inputContainer">
              <input
                type="text"
                className="input"
                name="name" /* value={name} */
                /* onChange={(e)=>setName(e.target.value)} */
                placeholder="Nombre"
              />
          </div>
          <div className="col inputContainer">
              <input
                type="text"
                className="input"
                name="user" /* value={user}  */
                /* onChange={(e)=>setUser(e.target.value)} */
                placeholder="nombre@user.com"
              />
          </div>
        </div>
        <div className="row">
        <textarea className='inputText' name="message" cols="60" rows="10" placeholder='Mensaje...'></textarea>
        </div>
      </div>
    </section>
  );
}

export default Prueba;
