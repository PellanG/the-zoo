import { IAnimal } from "../models/IAnimal";

export function getListFromLs() {
    let listFromLs:IAnimal[] = JSON.parse(localStorage.getItem("animals"|| null)as string);
    return listFromLs
}