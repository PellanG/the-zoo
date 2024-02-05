import { useParams } from "react-router-dom";
import { IAnimal } from "../models/IAnimal"
import { getListFromLs } from "../services/getFromLs";
import { saveToLs } from "../services/saveToLs";
import { useState } from "react";


export const Animal = () => {
    let animalsFromLs = getListFromLs();

    const [animals, setAnimals] = useState<IAnimal[]>([...animalsFromLs]);

    const params = useParams();

    
    const clickedAnimal = animals.find((animal:IAnimal)=>animal.id.toString() === params.id);
     
    const feedAnimal = ()=>{
        animals.map((animal)=>{
                
        if(animal.id.toString() === params.id){
            animal.isFed = true;
            animal.lastFed = new Date().toLocaleString();
            animal.hungry = "Jag är mätt!"
        }
        else{
            return;
        }
    });
        
        saveToLs([...animals]);
        setAnimals([...animals])
        console.log(animals);
        
     
    }

    return<>
    <div className="animal-detail-container">
        <h2>{clickedAnimal?.name}</h2>
        <div className="animal-img-container">
        <img src={clickedAnimal?.imageUrl} alt="Pic of animal"/>
        </div>
        <p>{clickedAnimal?.longDescription}</p>
        <p>{clickedAnimal?.lastFed}</p>
        <p>{clickedAnimal?.hungry}</p>
        <button onClick={feedAnimal} disabled={clickedAnimal?.isFed===true}>Mata</button>
    </div>
    </>
}