import { IAnimal } from "../models/IAnimal"

export function saveToLs(animals:IAnimal[]){
    localStorage.setItem("animals",JSON.stringify(animals)|| "[]");
}