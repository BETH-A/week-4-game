$(document).ready(function() {
//======================================
// GLOBAL VARIABLES
//======================================


// Character Objects:
    // Each character has 3 attributes: Health Points, Attack Power and Counter Attack Power
        // The Health Points, Attack Power and Counter Attack Power of each character must differ

var fighters = ["fighter1", "fighter2", "fighter3", "fighter4"];

var fighter1 = {name: "fighter1Name", healthPoint: 100, attackPower: 10, counterAttack: 10};

var fighter2 = {name: "fighter2Name", healthPoint: 150, attackPower: 5, counterAttack: 5};

var fighter3 = {name: "fighter3Name", healthPoint: 135, attackPower: 15, counterAttack: 15};

var fighter4 = {name: "fighter4Name", healthPoint: 195, attackPower: 25, counterAttack: 25};

// Player & Defender Names

var playerName = "";

var defenderName = "";



//========================================
// FUNCTIONS
//========================================

// console log for testing

for (var i = 0; i < fighters.length; i++) {
function consoleLogVariables() {

    console.log("fighter1: " + fighter1);

    console.log("fighter2: " + fighter2);

    console.log("fighter3: " + fighter3);

    console.log("fighter4: " + fighter4);

    // console.log("isGameOver: " + isGameOver + " isGameBegun: " + isGameBegun);

    // console.log("playerName: " + playerName + " defenderName: " + defenderName);

    // console.log("gamePausedForAnotherDefender: " + gamePausedForAnotherDefender);

    console.log("============================================")

}

consoleLogVariables();
}
// Each time the player attacks, their character's Attack Power increases by its base Attack Power

// The enemy character only has Counter Attack Power 
    // Unlike the player's Attack Points, Counter Attack Power never changes


});