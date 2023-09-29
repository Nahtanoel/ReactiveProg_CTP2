import {useState , useEffect} from "react";
import { Link } from "react-router-dom";

function Bienvenue(props){
    const [click,setClick] = useState(0);

    useEffect(()=>{
        alert(`Vous avez cliqué ${click} fois`)

    },[click])


    return(<> 
    <nav>
        <Link to="/First"> A propos!</Link>
    </nav>
    <h1>Bonjour , {props.name}</h1>
    <p>
        Vous êtes : {props.text}<br/>
        Connexion à {props.date}<br/>
    </p>

    <button onClick={()=>{setClick(click+1)}}>
        click
    </button>


    </>)
}

export default Bienvenue;