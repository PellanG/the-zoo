import { IAnimal } from "../models/IAnimal";

export function getListFromLs():IAnimal[] {
    let listFromLs:IAnimal[] = JSON.parse(localStorage.getItem("animals"|| null)as string);
    return listFromLs
}