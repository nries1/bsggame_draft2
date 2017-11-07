
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

// Fire Missile One Function
let missileOneFired = false;
function fireMissleOne() {

    if (missileOneFired === true) {
        return;
    } else {
    let currentViporPositionObject = $("#vipor").position();
    let currentViporDistanceFromTop = currentViporPositionObject.top;
    let currentViporDistanceFromLeft = Number(currentViporPositionObject.left);
    let newMissileTopPosition = Number(currentViporDistanceFromTop+5);
    $("#missile").offset({top: newMissileTopPosition});
    $("#missile").css("visibility", "visible");
    let firedMissilePosition = currentViporDistanceFromLeft;
    moveMissileOne();

    function moveMissileOne() {
    missileOneFired = true;
    $("#missile").css("visibility", "hidden");
    firedMissilePosition = firedMissilePosition+1;
    $("#firedMissile").offset({top: Number(currentViporDistanceFromTop)+3});
    $("#firedMissile").css("visibility", "visible");
    $("#firedMissile").offset({left: firedMissilePosition});
    if(firedMissilePosition < 475) {
     setTimeout(moveMissileOne, 1);
    } else {
       $("#firedMissile").css("visibility", "hidden");
       missileOneFired = false;
       return;
    };
  };
 };
};

// End Fire Missile One Function


// Fire Missile Two Function
let missileTwoFired = false;
function fireMissileTwo() {
    if (missileTwoFired === true) {
        return;
    } else {
    let currentViporPositionObject = $("#vipor").position();
    let currentViporDistanceFromTop = currentViporPositionObject.top;
    let currentViporDistanceFromLeft = Number(currentViporPositionObject.left);
    let newMissileTopPosition = Number(currentViporDistanceFromTop+5);
    $("#missile2").offset({top: newMissileTopPosition});
    $("#missile2").css("visibility", "visible");
    let firedMissilePosition = currentViporDistanceFromLeft;
    moveMissileTwo();

    function moveMissileTwo() {
    missileTwoFired = true;
    $("#missile2").css("visibility", "hidden");
    firedMissilePosition = firedMissilePosition+1;
    $("#firedMissile2").offset({top: Number(currentViporDistanceFromTop)+3});
    $("#firedMissile2").css("visibility", "visible");
    $("#firedMissile2").offset({left: firedMissilePosition});
    if(firedMissilePosition < 475) {
     setTimeout(moveMissileTwo, 1);
    } else {
       $("#firedMissile2").css("visibility", "hidden");
       missileTwoFired = false;
       return;
    };
  };        
 };
};
// End Fire Missile Two Function


// Fire Missile Three Function
let missileThreeFired = false;
function fireMissileThree() {
    if (missileThreeFired === true) {
        return;
    } else {
    let currentViporPositionObject = $("#vipor").position();
    let currentViporDistanceFromTop = currentViporPositionObject.top;
    let currentViporDistanceFromLeft = Number(currentViporPositionObject.left);
    let newMissileTopPosition = Number(currentViporDistanceFromTop+5);
    $("#missile3").offset({top: newMissileTopPosition});
    $("#missile3").css("visibility", "visible");
    let firedMissilePosition = currentViporDistanceFromLeft;
    moveMissileThree();

    function moveMissileThree() {
    missileThreeFired = true;
    $("#missile3").css("visibility", "hidden");
    firedMissilePosition = firedMissilePosition+1;
    $("#firedMissile3").offset({top: Number(currentViporDistanceFromTop)+3});
    $("#firedMissile3").css("visibility", "visible");
    $("#firedMissile3").offset({left: firedMissilePosition});
    if(firedMissilePosition < 475) {
     setTimeout(moveMissileThree, 1);
    } else {
       $("#firedMissile3").css("visibility", "hidden");
       missileThreeFired = false;
       return;
    };
  };        
 };
};
// End Fire Missile Three Function

//let keyPressArray = [{name: upArrow, key: 38, fx: 'moveViporUp()', 38: false},
//                     {name: upArrow, key: 40, fx: 'moveViporDown()', 40: false},
//                     {name: upArrow, key: 38, fx: 'FireMissiles()', 32: false}];
let keyPressObject = {38: false, 40: false, 32: false}
let functionsObject = {38: 'moveViporUp()', 40: 'moveViporDown()', 32: 'fireMissiles()'};
let upArrow = 38;
let upArrowActive = false;
let downArrow = 40;
let downArrowActive = false;
let spaceBar = 32;
let spaceBarActive = false;

let missileCounter = 0;
$(document).ready(function() {
 $(document).keyup(function(event) {
    keyPressObject[event.which] = (event.type == 'keydown');
}); 
$(document).keydown(function(event) {
    keyPressObject[event.which] = (event.type == 'keydown');
    if (keyPressObject[38] && keyPressObject[32]) {
        console.log("reading both keys");
        moveViporUp();
        fireMissiles();
    } else
    if (keyPressObject[40] && keyPressObject[32]) {
        moveViporDown();
        fireMissiles();   
    } else
    if (keyPressObject[38]) { 
        moveViporUp();
    } else
    if (keyPressObject[40]) {
        moveViporDown();
    } else
    if (keyPressObject[32]) {
        fireMissiles();
    };
});
});
function fireMissiles() {
     missileCounter++;
     if (missileCounter > 3) {
         missileCounter = 1;
     }
     if (missileCounter === 1) {
         fireMissleOne();
     } else
     if (missileCounter === 2) {
         fireMissileTwo();
     } else
     if (missileCounter === 3) {
         fireMissileThree();
     }
    };


// Send Raiders Function
function() sendRaiders {
    
};
// End Send Raiders Function
/*$(document).on("keydown", function(event) {
  	if (event.which === 38) {  // if user presses up arrow
     moveViporUp();
    } else
    if (event.which === 40) {  // if user presses down arrow
     moveViporDown();
  	} else
    if (event.which === 32) {  // if user presses space bar
    fireMissiles();
    function fireMissiles() {
     missileCounter++;
     if (missileCounter > 3) {
         missileCounter = 1;
     }
     console.log(missileCounter);
     if (missileCounter === 1) {
         fireMissleOne();
     } else
     if (missileCounter === 2) {
         fireMissileTwo();
     } else
     if (missileCounter === 3) {
         fireMissileThree();
     }
    };
     };
    }); */