import Camera from "../../Core/Essentials/Prefabs/Camera";
import Scene from "../../Core/Essentials/Scene";
import { main, p5 } from "../../Core/main";
import Settings from "../../Settings";
import Text from "../../Core/Essentials/Prefabs/UIPrefabs/Text";
import Button from "../../Core/Essentials/Prefabs/UIPrefabs/Button";
import ButtonBar from "../../Core/Essentials/Prefabs/UIPrefabs/ButtonBar";
import Input from "../../Core/Essentials/Input";
import FenceCreator from "../Scripts/FenceCreator";
import AnimalSpawner from "../Scripts/AnimalSpawner";
import GameObject from "../../Core/Essentials/GameObject";
import Transform from "../../Core/Essentials/Components/Transform";

class FarmScene extends Scene {
  loadScene() {
    super.loadScene();
    this.background = main.color(126, 200, 80);
  }

  hierarchy() {
    this.mainCamera = new Camera({
      name: "Main Camera",
      position: main.createVector(Settings.width / 2, Settings.height / 2),
    });
    this.addGameObject(this.mainCamera);
    this.addGameObject(
      new GameObject({
        name: "Fence",
        transform: new Transform({}),
        components: [
          new FenceCreator(),
          new AnimalSpawner()
        ]
      })
    );
    this.addUIObject(
      new Text({
        name: "Info Text",
        position: main.createVector(Settings.width / 2, 40),
        text: "Hayvan eklemek için herhangi bir yere tıkla!",
      })
    );
    this.addUIObject(
      Input.addElement(
        new ButtonBar({
          name: "Spawn Button Bar",
          position: main.createVector(Settings.width / 2, Settings.height - 50),
          size: main.createVector(400, 100),
          backgroundColor: main.color(0, 10),
          children: [
            new Button({
              name: "Bunny Button",
              size: main.createVector(100, 50),
              text: "🐰 Tavşan",
              border: [30, 30, 30, 30],
            }),
            new Button({
              name: "Dog Button",
              size: main.createVector(100, 50),
              text: "🐶 Köpek",
              border: [30, 30, 30, 30],
            }),
            new Button({
              name: "Cat Button",
              size: main.createVector(100, 50),
              text: "🐱 Kedi",
              border: [30, 30, 30, 30],
            }),
          ],
        })
      )
    );
  }
}

export default FarmScene;
