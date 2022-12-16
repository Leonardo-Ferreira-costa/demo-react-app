import axios from "axios";
import React from "react";
import qualquercoisa from './Ler.module.css';

const baseURL = "https://json-server-free-hosting.vercel.app/posts/461";

const Ler = () => {
  document.title = "Ler";
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return (

    <>
      <h1>NÃO TEMOS NADA PARA APRESENTAR</h1>
    </>

  );

  return (
    <div>
      <h1 className={qualquercoisa.titleStyle}>{post.id}</h1>
      <p>{post.title}</p>
      <p>{post.content}</p>
      <img className={qualquercoisa.imgProd} src={post.img} alt="produto" />
    </div>
  );

}
export default Ler;


