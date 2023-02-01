import "./css/index.css";
import Player from "./js/Player";
const player = new Player();
const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
function game_start() {
  requestAnimationFrame(game_start);
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  //object_Enemies_Array.forEach((enemy) => {
  //enemy.update();
  // });
}
game_start();
