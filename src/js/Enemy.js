const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 900;
const CANVAS_HEIGHT = canvas.height = 600;
const numberOfEnemies = 10
const enemiesArray = [];

export class Enemy{
    constructor(){
        this.enemy_width = 28.8;
        this.enemy_height = 22.5;
        this.x = Math.random();
        this.y = Math.random();
        this.speed = Math.random()*4-2;
        
        this.angle = 0;
        this.angleSpeed = Math.random()*0.005;
        this.curve = Math.random()*5;
        this.image = document.getElementById('enemy');

        this.imageWidth = 28.8;
        this.imageHeight = 22.5;
        this.frameX = 0;
        this.frameY = 0;


    }
    update(){
       
        this.y+= this.speed;
        this.speedX = Math.random()*4-2+this.curve * Math.cos(this.angle);
        this.angle += this.angleSpeed;
        this.y += this.curve * Math.sin(this.angle);
        this.x +=this.speedX;

        if(this.x - this.enemy_width>=canvas.width) this.x = this.curve * Math.cos(this.angle);
        if(this.x <0) this.x = this.curve * Math.cos(this.angle);
        if(this.y - this.enemy_height >=canvas.height ) this.y = this.curve * Math.cos(this.angle);
        if(this.y <0) this.y = this.curve * Math.cos(this.angle);
        

    }
    draw(){
        c.strokeRect(this.x, this.y,  this.enemy_width, this.enemy_height);
        /*
        if(this.speed>0 ){
            this.frameY = 0;
        }else
        {
            this.frameY = 1;
        }
        if(this.frameX<6) {this.frameX++;}
        else {this.frameX = 0;}
        context.drawImage(this.image, this.frameX * this.imageWidth, this.frameY * this.imageHeight, this.imageWidth,this.imageHeight, this.x, this.y, this.width,this.height);
        */



    }

};


