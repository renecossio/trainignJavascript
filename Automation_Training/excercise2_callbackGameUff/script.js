var gameScene;
var enemy;
var topWall;
var deathSound;
var gameObjects;

/* Start of the game. */
function start() {
    deathSound = new Audio("roblox-death-sound-effect.mp3");
    gameScene = {
        canvas: document.getElementById("game-scene"),
        refresh: function () {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            for (var i = 0; i < gameObjects.length; i++) {
                gameObjects[i].render();
            }
        },
        stop: function () {
            deathSound.play();
            clearInterval(this.interval);
        }
    }

    /* Walls. */
    bottomWall = gameObject(
        {
            x: 0,
            y: gameScene.canvas.height - 20,
            width: gameScene.canvas.width,
            height: 20,
            speedX: 0,
            speedY: 0,
            color: "green",
            tag: "bottom wall"
        }
    );

    /* Enemy. */
    enemy = gameObject(
        {
            x: 300,
            y: 120,
            width: 10,
            height: 20,
            speedX: 0,
            speedY: 2,
            color: "red",
            tag: "enemy"
        }
    );

    topWall = gameObject(
        {
            x: 0,
            y: 0,
            width: gameScene.canvas.width,
            height: 20,
            speedX: 0,
            speedY: 0,
            color: "green",
            tag: "top wall"
        }
    );

    projectile = gameObject(
        {
            x: 0,
            y: 120,
            width: 20,
            height: 15,
            speedX: 2,
            speedY: 0,
            color: "purple",
            tag: "projectile"
        }
    );

    gameObjects = [enemy, topWall, bottomWall, projectile];
    gameScene.context = gameScene.canvas.getContext("2d");
    gameScene.interval = setInterval(update, 10);
}

/* Update every 10 miliseconds. */
var sw = true;

function update() {
    /* Enemy behaviour */
    if (sw) {
        enemy.y -= enemy.speedY;
    } else {
        enemy.y += enemy.speedY;
    }

    enemy.collidedWith(topWall, function (obj) {
        sw = false;
    })

    enemy.collidedWith(bottomWall, function (obj) {        
        sw = true;
    })

    enemy.collidedWith(projectile, function (obj) {
        console.log(obj);
        gameScene.stop();
        alert("GAME OVER");
    })

    if (projectile.x + projectile.width > gameScene.canvas.width) {
        projectile.x = 0
    } else {
        projectile.x += projectile.speedX;
    }

    gameScene.refresh();
    
}
    
start()
