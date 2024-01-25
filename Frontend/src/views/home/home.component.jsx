import style from './home.module.css'
import Card from '../../components/card/card.component'

function Home (props){
    return(<div className={style.contenedorHome}>
     <Card></Card>
     <Card></Card>
     <Card></Card>
     <Card></Card>
    </div>)
}

export default Home