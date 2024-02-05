
import { useEffect, useState } from "react";
import { AnimalPresentation } from "../components/AnimalPresentation";
import { IAnimal } from "../models/IAnimal";
import { getAnimals} from "../services/getData";
import { saveToLs } from "../services/saveToLs";
import { getListFromLs } from "../services/getFromLs";

export const Animals  = () => {

    let [animals,setAnimals]=useState<IAnimal[]>([]);
    
    useEffect(()=>{
    let listFromLs = getListFromLs()
    
    if(listFromLs !== null){
        setAnimals(listFromLs);
        console.log("should update");
        
    }  
    else {
         getAnimals().then((animals)=>{
            saveToLs(animals);
            setAnimals(animals);
        });   
            
       }
           
    },[]
    );

    
    return<>{animals.map((animal:IAnimal)=>{
        return<AnimalPresentation key={animal.id} animal={animal}/>
    })}
    
     </>
}