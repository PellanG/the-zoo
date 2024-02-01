import axios from 'axios';
import { IAnimal } from '../models/IAnimal';



export async function getData(): Promise <IAnimal[]> {
   const response = await axios.get("https://animals.azurewebsites.net/api/animals");
   return response.data; 
}