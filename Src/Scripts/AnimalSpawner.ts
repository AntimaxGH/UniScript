import Component from "../../Core/Essentials/Components/Component";
import Input from "../../Core/Essentials/Input";
import ButtonBar from "../../Core/Essentials/Prefabs/UIPrefabs/ButtonBar";
import { main } from "../../Core/main";
import Settings from "../../Settings";
import BunnyPrefab from "../Prefabs/BunnyPrefab";
import CatPrefab from "../Prefabs/CatPrefab";
import DogPrefab from "../Prefabs/DogPrefab";

class AnimalSpawner extends Component {
  spawnerBar: ButtonBar;

  start() {
    this.spawnerBar = Settings.activeScene.findUIObjectByName(
      "Spawn Button Bar"
    ) as ButtonBar;
  }

  update() {
    if (Input.pressing) {
      switch (this.spawnerBar.selectedButton) {
        case 0:
          Settings.activeScene.instantiate(
            new BunnyPrefab({
              name: "Bunny",
              position: main.createVector(Input.mouse.x, Input.mouse.y),
              scale: main.createVector(5, 5),
              rotation: Math.random() * main.TWO_PI,
            })
          );
          break;
        case 1:
          Settings.activeScene.instantiate(
            new DogPrefab({
              name: "Dog",
              position: main.createVector(Input.mouse.x, Input.mouse.y),
              scale: main.createVector(16, 5),
              rotation: Math.random() * main.TWO_PI,
            })
          );
          break;
        case 2:
          Settings.activeScene.instantiate(
            new CatPrefab({
              name: "Cat",
              position: main.createVector(Input.mouse.x, Input.mouse.y),
              scale: main.createVector(9, 3),
              rotation: Math.random() * main.TWO_PI,
            })
          );
          break;
      }
      Input.pressing = false;
    }
  }
}

export default AnimalSpawner;
