$(document).ready(function () {
    //======================================
    // GLOBAL VARIABLES
    //======================================


    // Character Objects:
    // Each character has 3 attributes: Health Points, Attack Power and Counter Attack Power
    // The Health Points, Attack Power and Counter Attack Power of each character must differ

    var fighters = ["fighter1", "fighter2", "fighter3", "fighter4"];

    var fighter1 = {
        row: 1,
        name: "fighter1Name",
        visible: "true",
        healthPoint: 100,
        attackPower: 10,
        counterAttack: 10,
        image: "assets/images/abc.png" 
    };

    var fighter2 = {
        row: 1,
        name: "fighter2Name",
        visible: "true",
        healthPoint: 150,
        attackPower: 20,
        counterAttack: 20,
        image: "assets/images/abc.png"
    };

    var fighter3 = {
        row: 1,
        name: "fighter3Name",
        visible: "true",
        healthPoint: 135,
        attackPower: 15,
        counterAttack: 15,
        image: "assets/images/abc.png"
    };

    var fighter4 = {
        row: 1,
        name: "fighter4Name",
        visible: "true",
        healthPoint: 195,
        attackPower: 30,
        counterAttack: 30,
        image: "assets/images/abc.png"
    };

    // Var to identify if game is over or begun

    // Player & Defender Names

    var playerName = "";

    var defenderName = "";

    // characterClicked holds which character is being clicked

    // gamePausedForAnotherDefender is when waiting to pick another defender

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

        // Each time the player attacks, their character's Attack Power increases by its base Attack Power
        // also update the health by targeting the health div class



        // function to select player when tile is clicked and

        // we don't have a player nor a defender

        // function to select defender when tile is clicked and
        // we already have a player but not a defender

        // The enemy character only has Counter Attack Power 
        // Unlike the player's Attack Points, Counter Attack Power never changes


        // function to see if player or defender have lost


        // function that keeps track of points during attacks

        // attack cycle of points adjustment
        // only run if game has begun and it is not over

        // check if player or defender have lost



        // function to deal with loss by player

        // function to deal with win by player


        // function to play attack button sound when game running
        // attack button plays blaster sound when we have player and
        // defender and isGameBegun is true and isGameOver is not false

        // function to see if the player has won
        // this will be the case when all defenders have visibility flag set to false

        //=================================
        // GAME CODE
        //=================================

        //console.logs
        consoleLogVariables();

        //Setup board

        // if player hasn't been picked yet then
	    // it must be the start of the game so play
        // the intro music
        
        // listen for clicks on the character tiles

            // record what character tile the user clicked

            // if we don't have a player yet, get one

            // if we don't have a defender yet, get one

            //console.logs
            consoleLogVariables();

            // end always by making sure game board is updated

        // listen for clicks on the attack button
        

        // play attack button sound when game is running
		// and the attack button is clicked
        
        // if game is paused for another defender to be picked
        // then say there's no enemy here

        // function to adjust points during attacks

        // check if player has won

        //console.logs
        consoleLogVariables();

        // end by  making sure game board is updated

    // listen for reset button click
    }

});