import { IAnimal } from "../models/IAnimal"

interface IAnimalPresentationProps{
    animal:IAnimal;
}

export const AnimalPresentation = ({animal}:IAnimalPresentationProps) => {  
        return<div>
        <h2>{animal.name}</h2>;
        <img src={animal.imageUrl}/>;
        </div>
}