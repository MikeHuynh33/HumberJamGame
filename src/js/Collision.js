this.gameOver = false;
for(let i=0; i<this.numberOfEnemies; i++){
    if(
        game.enemies[i].x < game.player.x + game.player.width && 
        game.enemies[i].x + game.enemies[i].width > game.player.x &&
        game.enemies[i].y < game.player.y + game.player.height &&
        game.enemies[i].y + game.enemies[i].height > game.player.y
    ){
        console.log(this.gameOver);
        this.gameOver = true;
        
         }}