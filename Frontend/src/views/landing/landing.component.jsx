//components

//Commons imports
import { useNavigate } from 'react-router';
//Styles
import style from './landing.module.css';



function Landing(props) {
 const navigate=useNavigate()

  return (<div className={style.contenedorLanding}>
   <button onClick={()=>navigate("/home")}>Bienvenido</button>
  </div>)
}

export default Landing