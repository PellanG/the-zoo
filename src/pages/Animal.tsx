import { useParams } from "react-router-dom";
import { IAnimal } from "../models/IAnimal"
import { getListFromLs } from "../services/getFromLs";
import { saveToLs } from "../services/saveToLs";
import { useState } from "react";
import { brokenImage } from "../models/brokenImage";


export const Animal = () => {
   
    let animalsFromLs = getListFromLs();
    
    const [animals, setAnimals] = useState<IAnimal[]>([...animalsFromLs]);
    
    const params = useParams();
    
    const clickedAnimal = animals.find((animal:IAnimal)=>animal.id.toString() === params.id)!;
     
    let currentTime = new Date().getTime();

        animals.map((animal)=>{
    
        if(currentTime - Date.parse(animal.lastFed) > 10800000){
            animal.lastFed = new Date().toLocaleString();
            animal.isFed = false;
            animal.hungry = "Jag är hungrig!"
                
            setAnimals([...animals])
            saveToLs([...animals])
                 
            }
            else{
                return
            }            
});
    const feedAnimal = (clickedAnimal:IAnimal)=>{

            clickedAnimal.isFed = true;
            clickedAnimal.lastFed = new Date().toLocaleString();
            clickedAnimal.hungry = "Jag är mätt!"
            

            saveToLs([...animals]);
            setAnimals([...animals]);
    }
    
   
    return<>
    <div className="animal-detail-container">
        <h2>{clickedAnimal.name}</h2>
        <div className="animal-img-container">
        <img src={clickedAnimal.imageUrl} onError={brokenImage}alt="Pic of animal"/>
        </div>
        <p>{clickedAnimal.longDescription}</p>
        <p>{clickedAnimal.lastFed}</p>
        <p>{clickedAnimal.hungry}</p>
        <button onClick={()=>{feedAnimal(clickedAnimal)}} disabled={clickedAnimal.isFed===true}>Mata</button>
    </div>
    </>
}