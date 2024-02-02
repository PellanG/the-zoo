import { IAnimal } from "../models/IAnimal"

interface IAnimalPresentationProps{
    animal:IAnimal;
}

export const AnimalPresentation = ({animal}:IAnimalPresentationProps) => {  
        return<>
        <div className="animals-container">
        <h2>{animal.name}</h2>
        <div className="img-container">
        <img src={animal.imageUrl}/>
        </div>
        </div></>
      
        
}