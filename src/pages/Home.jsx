import Contact from './Contact';
import Works from './Works'
import SoftSkills from './SoftSkills'
import {Link} from 'react-router-dom';


function Home(){

     return(
       <div className="home-content">
       <span className="tags tags-pading">&lt;h1&gt;</span>
       <h1 className="h1-lg">
       Yo,<br/>
       I'm Fousséni,<br/>
       Développeur web
       </h1>
       <span className="tags tags-pading">&lt;/h1&gt;</span>
       <span className=" tags tags-pading">&lt;p&gt;</span>
       <p className="p-pst">
        Hello! je me nomme Kaboré Fousséni, 24 ans. Je suis un développeur web fullstack symfony,
        titulaire d'une licence en Macroéconomie et Gestion de Développement.
        J'alie mes connaissances dans ces deux domaines afin de concevoir des applications web
        adaptées aux besoins des petites et moyennes entreprises, entre budget, moyens technologiques et de besoins
        commercials.Vous souhaitez menez vos activités commerciales en ligne ? Alors :
       </p>
       <span className="tags tags-pading">&lt;/p&gt;</span>

       <p>
       <Link to="/contactez-moi" className="bt-link " >contactez-moi !</Link>
       </p>
       <SoftSkills/>
       <Works/>
        <Contact/>
       </div>
     )



}
export default Home;
