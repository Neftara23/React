import {useEffect, useState} from "react";
import "./Astros.css";

const Astro = () =>{
    const [astros, setAstros] = useState(null)

    useEffect(() =>{
        try{
            const fetchData = async() =>{
                const response = await fetch("http://api.open-notify.org/astros.json");
                const result = await response.json();
                setAstros(result);
            }   
            fetchData();
        }catch(error){
            console.error(error);
        }

    }, [])

    return(
        <div className="card flex">
                <p className="card-name">Astro</p>
                <p className="card-station">Craft</p>
            </div>
    )
}


const Astros = () =>{
    return(
        <div className="cards-container flex">
           {
            astros.map((astro,index) => 
            <Astro key={index} {...Astro} />
            )
           }
        </div>
    )
}


export default Astros;