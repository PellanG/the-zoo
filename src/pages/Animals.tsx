import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { getAnimals } from "../services/getAnimals";
import { saveToLs } from "../services/saveToLs";
import { getListFromLs } from "../services/getFromLs";
import { useNavigate } from "react-router-dom";
import { brokenImage } from "../models/brokenImage";

export const Animals = () => {
  const navigate = useNavigate();
  let [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    let listFromLs = getListFromLs();

    if (listFromLs !== null) {
      setAnimals(listFromLs);
    } else {
      getAnimals().then((animals) => {
        animals.map((animal) => {
          if (animal.isFed === false) animal.hungry = "Jag är hungrig";
        });
        saveToLs(animals);
        setAnimals(animals);
      });
    }
  }, []);
  let currentTime = new Date().getTime();

  return (
    <>
      {animals.map((animal: IAnimal) => {
        if (currentTime - Date.parse(animal.lastFed) > 10800) {
          animal.isFed = false;
          animal.hungry = "Jag är hungrig!";
          saveToLs(animals);
        }
        return (
          <div
            key={animal.id}
            className="animals-container"
            onClick={() => {
              navigate("/animal/" + animal.id);
            }}
          >
            <h2>{animal.name}</h2>
            <div className="img-container">
              <img
                src={animal.imageUrl}
                onError={brokenImage}
                alt="Pic of animal"
              />
            </div>
            <p> {animal.shortDescription}</p>
            <p className="animal-feeding-indicator">{animal.hungry}</p>
          </div>
        );
      })}
    </>
  );
};
