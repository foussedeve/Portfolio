import React from 'react';
function Contact(){
  return(
    <div className="cnt-content">
    <div className="overlay-infos">
      <p>Fousséni Kaboré, <br/>Ougadougou, zone du bois</p>
      <p><span>@</span>: foussedev@gmail.com</p>
    </div>
    <span className=" tags tags-pading">&lt;h1&gt;</span>
    <h1 className="h1-lg">
     Contactez moi
    </h1>
    <span className=" tags tags-pading">&lt;/h1&gt;</span>
      <span className=" tags tags-pading">&lt;p&gt;</span>
      <p>
      Pour tous vos projets de conception d'applications web je suis disposé à vous accompagner.
      Si vous avez des questions n'hésitez pas à me contacter.
      </p>
      <span className="tags tags-pading">&lt;/p&gt;</span>
      <span className="tags tags-pading">&lt;form&gt;</span>
      <form>
       <div className="input-content">
        <input type="text" name="name" placeholder="Nom& Prénoms"/>
        <input type="email" name="name" placeholder="Email"/>
       </div>
       <div><input type="text" name="subject" placeholder="Sujet"/>
       </div>
       <div>
       <textarea placeholder="Message"></textarea>
       </div>
       <div>
       <input type="submit" className="bt-link" value="Envoyez message !"/>
       </div>
       </form>

      <span className="tags tags-pading">&lt;/form&gt;</span>



    </div>
  )
}
export default Contact;
