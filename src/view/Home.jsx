import qualquercoisa from './Home.module.css';
import Zap from "./Zapzap";
const Home = () => {

  document.title = "Home";

  return (
    <>
      <Zap />
      <h1 className={qualquercoisa.titleStyle}>Home</h1>
    </>);
};

export default Home;