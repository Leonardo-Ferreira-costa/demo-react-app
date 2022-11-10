import './Nav.css';
import logo from './logo.svg';

function Nav(){

return (
    <div className='NavDiv'>
        <div className='DivLogo'><img src={logo} alt="logo" className='NavLogo'/></div>
        <div>
        <ul className="ulStyle">
            <li>Início</li>
            <li>Projetos</li>
            <li>Contatos</li>
        </ul>
        </div>
        
    </div>

)}

export default Nav