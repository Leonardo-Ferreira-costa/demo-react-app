import logo from './imagens/adAstra.jpg';
import logo2 from './imagens/herediario.jpg';
import logo3 from './imagens/batmanDarkKnigh.jpg';
import logo4 from './imagens/batmanDarkKnigh2.jpg';
import logo5 from './imagens/batmanPiadaMoral.jpg';
import logo6 from './imagens/corra.jpg';
import logo7 from './imagens/Duna.jpeg';
import logo8 from './imagens/encanto.jpeg';
import logo9 from './imagens/entidade.jpg';
import logo10 from './imagens/facebook.jpeg';
import logo11 from './imagens/flashPoint.jpg';
import logo12 from './imagens/ZackSnyder.jpg';
import logo13 from './imagens/hacker.jpeg';
import logo14 from './imagens/HomemAranha2.jpg';
import logo15 from './imagens/homemDeAço.jpg';
import logo16 from './imagens/homemInvisivel.jpg';
import logo17 from './imagens/interstellar.png';
import logo18 from './imagens/invasores.jpg';
import logo19 from './imagens/ligaDaJustica.jpg';
import logo20 from './imagens/matrix.jpg';
import logo21 from './imagens/naoNaoOlhe.jpg';
import logo22 from './imagens/oQuintoPoder.jpg';
import logo23 from './imagens/osIncriveis.jpeg';
import logo24 from './imagens/osIncriveisDois.png';
import logo25 from './imagens/paradoxoCloverfield.jpg';
import logo26 from './imagens/passageiroAcidental.jpg';
import logo27 from './imagens/Passageiros.jpg';
import logo28 from './imagens/perseguiçãoVirtual.jpg';
import logo29 from './imagens/sorria.jpg';
import logo30 from './imagens/soul.jpg';
import logo31 from './imagens/umLugarSilncioso.jpg';
import logo32 from './imagens/Vida.jpg';
import logo33 from './imagens/vigilanteDoAmanha.jpg';
import logo34 from './imagens/Vingadores.jpg';
import logo35 from './imagens/vingadores2.jpg';
import axios  from 'axios';
import React, { useState, useEffect } from 'react';



const Filmes = () => {
document.title = "Filmes"

const[apiData, setApiData] = useState([]);
useEffect(() =>{
	axios.get('https://trabalhoindividualjs.vercel.app/terror')
	.then((getData) => {
		setApiData(getData.data);
	})
}, []);

const setID = (id) => {
	console.log(id);
	localStorage.setItem('ID', id)
}
 
const setData = (id, filme, diretor, duracao, lancamento) => {
	localStorage.setItem('ID', id)
	localStorage.setItem('filme', filme)
	localStorage.setItem('diretor', diretor)
	localStorage.setItem('duracao', duracao)
	localStorage.setItem('lancamento', lancamento)
}

const getData = () => [
axios.get('https://trabalhoindividualjs.vercel.app/terror')
.then((getData) => {
	setApiData(getData.data);
})

]





return(
<>


<h1 >Filmes</h1>


{apiData.map(({ nome, id }) => (
		
	<ul>	
	<li key={id}> {nome}</li>
	</ul>
	 
))}
	
	



</>

)













	  
	 
	
}   
	







 
 
  
 export default Filmes;
