import React from 'react'
import { NavLink} from 'react-router-dom';


function Navbar() {

//console.log(document.getElementsByClassName('header-container')[0].classList)

  function showMenu(e){
  //document.getElementsByClassName('header-container')[0].classList.toggle("visible")
  document.getElementsByClassName('header-container')[0].classList.toggle("visible")
  }
    return (


            <header className="header-container">
                <address className="address"  onClick={showMenu}>

                    foussedev<i>@gmail.com </i>
                </address>
                <div className="icon-menu" onClick={showMenu}>
                    <i className="fa fa-bars"></i>
                </div>
&lt
                <nav className="nav-container" onClick={showMenu}>
                    <div className="logo">
                        <div>F</div>
                        <h1>Fousséni</h1>
                        <h2>développeur web</h2>
                    </div>
                    <ul className="links-container" onClick={showMenu}>
                        <li><NavLink to="/" className="link " activeclassname="nav-active" onClick={showMenu}>Moi</NavLink></li>
                        <li><NavLink to="/connaissance" className="link " activeclassname="nav-active" onClick={showMenu} >compétences</NavLink></li>
                        <li><NavLink to="/mes-realisations" className="link " onClick={showMenu}> réalisations</NavLink></li>
                        <li><NavLink to="/mon-blog" className="link" onClick={showMenu}>blog</NavLink></li>
                        <li><NavLink to="/contactez-moi" className="link " onClick={showMenu}>contact</NavLink></li>
                         <li className="link " onClick={showMenu}><NavLink to="#" >in</NavLink><NavLink to="#">f</NavLink><NavLink to="#">tw</NavLink></li>
                    </ul>
                </nav>

            </header>



    )
}

export default Navbar
