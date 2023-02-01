/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var lastKeys = "";
var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var gravity = 0.01;
var keys = {
  up: {
    pressed: false
  },
  down: {
    pressed: false
  },
  left: {
    pressed: false
  },
  right: {
    pressed: false
  }
};
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.Player_position = {
      x: 10,
      y: 10
    };
    this.Player_velocity = {
      x: 0,
      y: 0
    };
    this.Player_width = 10;
    this.Player_height = 10;
  }
  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = "blue";
      c.fillRect(this.Player_position.x, this.Player_position.y, this.Player_width, this.Player_height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.Player_position.y += this.Player_velocity.y;
      this.Player_position.x += this.Player_velocity.x;
      // Set conditon for gravity , if player height + player positon Y + player velpcity.y smaller than height of canavas)
      if (this.Player_position.y + this.Player_height + this.Player_velocity.y <= canvas.height) {
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
      if (this.Player_position.y >= 140 && !keys.right.pressed && !keys.left.pressed) {
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
  }]);
  return Player;
}();

function PlayerKeyBoard_movement() {
  // using EventListener to figure out player keyboard input (key).
  // using switch methods to add velocity when player add click any keyboards.
  addEventListener("keydown", function (_ref) {
    var key = _ref.key;
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
  addEventListener("keyup", function (_ref2) {
    var key = _ref2.key;
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

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var player = new _js_Player__WEBPACK_IMPORTED_MODULE_0__["default"]();
var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
function game_start() {
  requestAnimationFrame(game_start);
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  //object_Enemies_Array.forEach((enemy) => {
  //enemy.update();
  // });
}

game_start();
})();

/******/ })()
;