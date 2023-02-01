/*let lastKeys = "";
const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
const gravity = 0.01;
const keys = {
  up: {
    pressed: false,
  },
  down: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
  right: {
    pressed: false,
  },
};
export default class Player {
  constructor() {
    this.Player_position = {
      x: 10,
      y: 10,
    };
    this.Player_velocity = {
      x: 0,
      y: 0,
    };
    this.Player_width = 10;
    this.Player_height = 10;
  }
  draw() {
    c.fillStyle = "blue";
    c.fillRect(
      this.Player_position.x,
      this.Player_position.y,
      this.Player_width,
      this.Player_height
    );
  }
  update() {
    this.draw();
    this.Player_position.y += this.Player_velocity.y;
    this.Player_position.x += this.Player_velocity.x;
    // Set conditon for gravity , if player height + player positon Y + player velpcity.y smaller than height of canavas)
    if (
      this.Player_position.y + this.Player_height + this.Player_velocity.y <=
      canvas.height
    ) {
      this.Player_velocity.y += gravity;
    } else {
      this.Player_velocity.y = 0;
    }
    if (keys.up.pressed) {
      this.Player_velocity.y -= 0.05;
    } else if (keys.down.pressed) {
      this.Player_velocity.y += 0.02;
    } else if (keys.right.pressed) {
      this.Player_velocity.x += 0.02;
    } else if (keys.left.pressed) {
      this.Player_velocity.x -= 0.02;
    }
    // Check if player hit bottom and neither right or left key were kit, set velocity.y = 0 to avoid object sliding.
    if (
      this.Player_position.y >= 140 &&
      !keys.right.pressed &&
      !keys.left.pressed
    ) {
      this.Player_velocity.x = 0;
    }
    // Check If Player move out of tank . set player_velocity bounce back down
    if (this.Player_position.y <= 0) {
      this.Player_position.y = 0;
      this.Player_velocity.y += 0.3;
    }
    // Check If Player move to left and hit the wall set position 0 / set player_velocity bounce back out to avoid object stick on it
    if (this.Player_position.x < 0) {
      this.Player_position.x = 0;
      this.Player_velocity.x += 0.1;
    }
    // Check If Player move to right and hit the all set postion at that spot /set player_velocity bounce back out to avoid object stick on it
    if (this.Player_position.x > canvas.width - this.Player_height) {
      this.Player_position.x = canvas.width - this.Player_height;
      this.Player_velocity.x -= 0.1;
    }
  }
}

function PlayerKeyBoard_movement() {
  // using EventListener to figure out player keyboard input (key).
  // using switch methods to add velocity when player add click any keyboards.
  addEventListener("keydown", ({ key }) => {
    console.log(key);
    switch (key) {
      case "W":
      case "w":
      case "ArrowUp":
        keys.up.pressed = true;
        lastKeys = "up";
        break;
      case "S":
      case "s":
      case "ArrowDown":
        keys.down.pressed = true;
        lastKeys = "down";
        break;
      case "A":
      case "a":
      case "ArrowLeft":
        keys.left.pressed = true;
        lastKeys = "left";
        break;
      case "D":
      case "d":
      case "ArrowRight":
        keys.right.pressed = true;
        lastKeys = "right";
        break;
    }
  });
  addEventListener("keyup", ({ key }) => {
    switch (key) {
      case "W":
      case "w":
      case "ArrowUp":
        keys.up.pressed = false;
        break;
      case "S":
      case "s":
      case "ArrowDown":
        keys.down.pressed = false;
        break;
      case "A":
      case "a":
      case "ArrowLeft":
        keys.left.pressed = false;
        break;
      case "D":
      case "d":
      case "ArrowRight":
        keys.right.pressed = false;
        break;
    }
  });
}
PlayerKeyBoard_movement();
*/
