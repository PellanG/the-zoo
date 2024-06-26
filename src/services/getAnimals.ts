import axios from 'axios';
import { IAnimal } from '../models/IAnimal';



export async function getAnimals():Promise<IAnimal[]>{
   try{
   const response = await axios.get<IAnimal[]>("https://animals.azurewebsites.net/api/animals");
   
   return response.data
   }
   catch(error){
      console.log("error message");
      return[];
      
   }
}