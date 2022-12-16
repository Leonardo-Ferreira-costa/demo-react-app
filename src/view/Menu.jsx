import { Outlet, Link } from "react-router-dom";
import qualquercoisa from './Menu.module.css';

const Menu = () => {

  // function chamarAlert(){

  //   fasjfçsa
  // }
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  }

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <>
      <span className={qualquercoisa.openMenu} onClick={openNav}>&#9776; open</span>
      <div id="mySidenav" className={qualquercoisa.sidenav}>
      <span className={qualquercoisa.closebtn} onClick={closeNav}>&times;</span>
        <ul>
          <li>
            <Link to="/" onClick={closeNav}>Home</Link>
          </li>
          <li>
            <Link to="/Ler" onClick={closeNav}>Ler</Link>
          </li>
          <li>
            <Link to="/Criar" onClick={closeNav}>Criar</Link>
          </li>
        </ul>
      </div>

      <Outlet />

    </>

  )
};

export default Menu;