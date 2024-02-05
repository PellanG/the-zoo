import { useState } from "react";
import { Animals } from "../pages/Animals";
import { getListFromLs } from "../services/getFromLs";
import { IAnimal } from "../models/IAnimal";
import { saveToLs } from "../services/saveToLs";

export const AnimalStatus=()=>{
    let animalsFromLs = getListFromLs();

    const [animals, setAnimals] = useState<IAnimal[]>([...animalsFromLs]);
    let currentTime = new Date().getTime();

        animals.map((animal)=>{
    
        if(currentTime - Date.parse(animal.lastFed) > 20000){
            animal.lastFed = new Date().toLocaleString();
            animal.isFed = false;
                animal.hungry = "Jag är hungrig!"
                
                
            saveToLs(animals)
            setAnimals(animals)
                 
            }
            else{
                return
            }            
});
return

}
