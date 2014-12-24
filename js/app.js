// Tile width
var tileWidth = 100;
var tileHeight = 80;
var leftLimit = 0;
var rightLimit= 400;
var upLimit = 80;
var downLimit = 400;
// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;

    //speed of the bug enemies
    var bSpeed = [150, 125, 170, 190, 110, 130, 200, 100]
    var randomSpeed = bSpeed[Math.floor(Math.random() * damn bSpeed.length)];
    this.speed = randomSpeed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
this.x += this.speed * dt;
//repositions bugs to the beginning when they reach up the right side of the screen
if (this.x > Xright) {
        this.x = -100;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
var Player = function(x, y) {
    this.x = x;
    this.y = y;
    //chooses random character every time the game is loaded
    var myCharacters = ['images/char-boy.png','images/char-cat-girl.png','images/char-horn-girl.png', 'images/char-pink-girl.png', 'images/char-princess-girl.png'];
    var randomCharacter = myCharacters[Math.floor(Math.random() * myCharacters.length)];
    this.sprite = randomCharacter;

    Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

//Movement for players
Player.prototype.handleInput = function (key) {
    switch(key){
    case 'left':
        if (this.x > leftLimit)
        this.x -= tileWidth;
        break;
    case 'right':
        if (this.x < rightLimit)
        this.x +=tileHeight;
        break;
    case 'up':
        if (this.y > upLimit)
        this.y -=tile;
        else player.resetOnWin();
        break;
    case 'down':
        if (this.y < downLimit)
        this.y +=tileHeight;
        break;
    default:
        return;
    }
};

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var enemy1 = new Enemy(0, 250);
allEnemies.push(enemy1);
var enemy2 = new Enemy(0, 170);
allEnemies.push(enemy2);
var enemy3 = new Enemy(0, 120);
allEnemies.push(enemy3);
var enemy4 = new Enemy(-150, 90);
allEnemies.push(enemy4);
var enemy5 = new Enemy(-200, 170);
allEnemies.push(enemy5);
//creates player
var player = new Player(100, 300);

//resets player to its starting position
Player.prototype.reset = function () {
    this.x = 100;
    this.y = 300;
};
var score = 0;
//increments score on safely moving accross the screen
Player.prototype.resetOnWin = function () {
    this.x = 100;
    this.y = 300;
    score++;
    document.getElementById('score').innerHTML = 'Score: '+score;
};
Player.prototype.update = function() {
