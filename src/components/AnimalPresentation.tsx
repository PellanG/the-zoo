import { useNavigate } from "react-router-dom";
import { IAnimal } from "../models/IAnimal"

interface IAnimalPresentationProps{
    animal:IAnimal;
}

export const AnimalPresentation = ({animal}:IAnimalPresentationProps) => {  
    const navigate = useNavigate();
        return<>
        <div className="animals-container" onClick={()=>{
            navigate("/animal/"+ animal.id);
        }}>
        <h2>{animal.name}</h2>
        <div className="img-container">
        <img src={animal.imageUrl} alt="Pic of animal"/>
        </div>
        <p> {animal.shortDescription}</p>
        <p className="animal-feeding-indicator">{animal.hungry}</p>
        </div></>
      
        
}