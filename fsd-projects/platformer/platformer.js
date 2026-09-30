$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();



    // TODO 2 - Create Platforms
     createPlatform(250,620,100,15)
     createPlatform(530,530,100,10)
     createPlatform(250,405,100,15)
     createPlatform(900,430,100,10)
     createPlatform(500,300,100,15)
     createPlatform(1150,310,100,10)







    // TODO 3 - Create Collectables
     createCollectable("steve",550,490)
     createCollectable("database",520,200,0.3)
     createCollectable("diamond",1170,240)




    
    // TODO 4 - Create Cannons
     createCannon("top",320,1000)
     createCannon("bottom",800,1150)
     createCannon("right",450,990)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
