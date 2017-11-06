
function moveViporDown() {
    let currentPositionObject = $("#vipor").position();
    let currentDistanceFromTop = currentPositionObject.top;
    let newDistanceFromTop = Number(currentDistanceFromTop+5);
    if (currentDistanceFromTop < 466) {
      $("#vipor").offset({top: newDistanceFromTop});
    }
};

function moveViporUp() {
    let currentPositionObject = $("#vipor").position();
    let currentDistanceFromTop = currentPositionObject.top;
    let newDistanceFromTop = Number(currentDistanceFromTop-5);
    let parentContainerDistanceFromTop = $("#viporZone").position().top
    if (currentDistanceFromTop > Number(parentContainerDistanceFromTop + 8)) {
       $("#vipor").offset({top: newDistanceFromTop});
    };
};

function fireMissle() {
    let missileFired = false;
    if (missileFired === true) {
        return;
    } else {
    let currentViporPositionObject = $("#vipor").position();
    let currentViporDistanceFromTop = currentViporPositionObject.top;
    let currentViporDistanceFromLeft = Number(currentViporPositionObject.left);
    let newMissileTopPosition = Number(currentViporDistanceFromTop+5);
    $("#missile").offset({top: newMissileTopPosition});
    $("#missile").css("visibility", "visible");
    let firedMissilePosition = currentViporDistanceFromLeft;
    moveMissile();
    
    function moveMissile() {
    missileFired = true;
    $("#missile").css("visibility", "hidden");
    firedMissilePosition = firedMissilePosition+1;
    $("#firedMissile").offset({top: Number(currentViporDistanceFromTop)+3});
    $("#firedMissile").css("visibility", "visible");
    $("#firedMissile").offset({left: firedMissilePosition});
    if(firedMissilePosition < 475) {
     setTimeout(moveMissile, 1);
    } else {
       $("#firedMissile").css("visibility", "hidden");

       return;
    };
  };
 };
};

let missileCounter = 0;
$(document).on("keydown", function(event) {
  	if (event.which === 38) {  // if user presses up arrow
     moveViporUp();
    } else
    if (event.which === 40) {  // if user presses down arrow
     moveViporDown();
  	} else
    if (event.which === 32) {  // if user presses space bar
     missileCounter++;
     if (missileCounter > 3) {
         missileCoounter = 0
     }
     fireMissle();
     };
    });