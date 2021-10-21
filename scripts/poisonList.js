import { usePoisons } from "./poisonDataProvider.js";
import { PoisonCard } from "./poisonCard.js";

export const PoisonList = () => {
  const allThePoisons = usePoisons();


  for(const singlePoisonObject of allThePoisons){
    document.querySelector(".poison-container").innerHTML += PoisonCard(singlePoisonObject)
  }


};
