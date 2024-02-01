import axios from "axios";
import { useEffect, useState } from "react";
import { AnimalPresentation } from "../components/AnimalPresentation";
import { IAnimal } from "../models/IAnimal";
import { getData } from "../services/getData";

export const Animals  = () => {
    const [animals,setAnimals]=useState<IAnimal[]>([]);
    const animalsList = JSON.parse(localStorage.getItem("animals")|| "[]");

    if(animals.length === 0){
        getData().then((animals)=>{
            localStorage.setItem("animals",JSON.stringify(animals))
            setAnimals(animals);
            console.log(animals);
            
        })
    }
    
    
    return<>{animals.map((animal)=>{
        return<AnimalPresentation key={animal.id} animal={animal}/>
    })}
    
     </>
}