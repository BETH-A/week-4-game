// $(document).ready(function () {
        //======================================
        // GLOBAL VARIABLES
        //======================================

        // Character Objects:
        // Each character has 3 attributes: Health Points, Attack Power and Counter Attack Power
        // The Health Points, Attack Power and Counter Attack Power of each character must differ

        var fighters = ["Ironman", "CaptainAmerica", "BlackPanther", "Thor"];

        var IronmanArray = {
            row: 1,
            visible: "true",
            healthPoint: 100,
            attackPower: 10,
            counterAttack: 10,
            name: "IronmanName",
            image: "assets/images/IronMan2.jpg"
        };

        var CaptainAmericaArray = {
            row: 1,
            visible: "true",
            healthPoint: 150,
            attackPower: 20,
            counterAttack: 20,
            name: "CaptainAmericaName",
            image: "assets/images/CaptainAmerica.jpg"
        };

        var BlackPantherArray = {
            row: 1,
            visible: "true",
            healthPoint: 135,
            attackPower: 15,
            counterAttack: 15,
            name: "BlackPantherName",
            image: "assets/images/Black-Panter.jpg"
        };

        var ThorArray = {
            row: 1,
            visible: "true",
            healthPoint: 195,
            attackPower: 30,
            counterAttack: 30,
            name: "ThorName",
            image: "assets/images/thor.png"
        };

        // Var to identify if game is over or begun
        var isGameOver = false;

        var isGameBegun = false;

        // Player & Defender Names
        var playerName = "";

        var defenderName = "";

        // characterClicked holds which character is being clicked
        var characterClicked = "";

        // gamePausedDefender is when waiting to pick another defender
        var gamePausedDefender = false;

        //========================================
        // CONSOLE LOG
        //========================================

        for (var i = 0; i < fighters.length; i++) {
            function consoleLogVariables() {

                console.log("Ironman: " + Ironman);
                console.log("CaptainAmerica: " + CaptainAmerica);
                console.log("BlackPanther: " + BlackPanther);
                console.log("Thor: " + Thor);
                console.log("isGameOver: " + isGameOver + " isGameBegun: " + isGameBegun);
                console.log("playerName: " + playerName + " defenderName: " + defenderName);
                console.log("gamePausedDefender: " + gamePausedDefender);
                console.log("============================================")
            }
            //========================================
            // FUNCTIONS
            //========================================

            // Each time the player attacks, their character's Attack Power increases by its base Attack Power
            // also update the health by targeting the health div class
            function updateGameBoard() {

                // go through each row & disply the tile if it is in that row and visible
                // otherwiise make it invisible & do this by targeting the id for that particular div

                // row 1:	
                if (IronmanArray[0] == "1" && Ironman[1] == true) {
                    $("#rowOneIronman").css("display", "inline-block")
                } else {
                    $("#rowOneIronman").css("display", "none");
                }
                if (CaptainAmericaArray[0] == "1" && CaptainAmericaArray[1] == true) {
                    $("#rowOneCaptainAmerica").css("display", "inline-block")
                } else {
                    $("#rowOneCaptainAmerica").css("display", "none");
                }
                if (BlackPantherArray[0] == "1" && BlackPantherArray[1] == true) {
                    $("#rowOneBlackPanther").css("display", "inline-block")
                } else {
                    $("#rowOneBlackPanther").css("display", "none");
                }
                if (ThorArray[0] == "1" && ThorArray[1] == true) {
                    $("#rowOneThor").css("display", "inline-block")
                } else {
                    $("#rowOneThor").css("display", "none");
                }

                // row 2:
                if (Ironman[0] == "2" && Ironman[1] == true) {
                    $("#rowTwoIronman").css("display", "inline-block")
                } else {
                    $("#rowTwoIronman").css("display", "none");
                }
                if (CaptainAmericaArray[0] == "2" && CaptainAmericaArray[1] == true) {
                    $("#rowTwoCaptainAmerica").css("display", "inline-block")
                } else {
                    $("#rowTwoCaptainAmerica").css("display", "none");
                }
                if (BlackPantherArray[0] == "2" && BlackPantherArray[1] == true) {
                    $("#rowTwoBlackPanther").css("display", "inline-block")
                } else {
                    $("#rowTwoBlackPanther").css("display", "none");
                }
                if (ThorArray[0] == "2" && ThorArray[1] == true) {
                    $("#rowTwoThor").css("display", "inline-block")
                } else {
                    $("#rowTwoThor").css("display", "none");
                }

                // row 3:
                if (Ironman[0] == "3" && Ironman[1] == true) {
                    $("#rowThreeIronman").css("display", "inline-block")
                } else {
                    $("#rowThreeIronman").css("display", "none");
                }
                if (CaptainAmericaArray[0] == "3" && CaptainAmericaArray[1] == true) {
                    $("#rowThreeCaptainAmerica").css("display", "inline-block")
                } else {
                    $("#rowThreeCaptainAmerica").css("display", "none");
                }
                if (BlackPantherArray[0] == "3" && BlackPantherArray[1] == true) {
                    $("#rowThreeBlackPanther").css("display", "inline-block")
                } else {
                    $("#rowThreeBlackPanther").css("display", "none");
                }
                if (ThorArray[0] == "3" && ThorArray[1] == true) {
                    $("#rowThreeThor").css("display", "inline-block")
                } else {
                    $("#rowThreeThor").css("display", "none");
                }

                // row 4:
                if (Ironman[0] == "4" && Ironman[1] == true) {
                    $("#rowFourIronman").css("display", "inline-block")
                } else {
                    $("#rowFourIronman").css("display", "none");
                }
                if (CaptainAmericaArray[0] == "4" && CaptainAmericaArray[1] == true) {
                    $("#rowFourCaptainAmerica").css("display", "inline-block")
                } else {
                    $("#rowFourCaptainAmerica").css("display", "none");
                }
                if (BlackPantherArray[0] == "4" && BlackPantherArray[1] == true) {
                    $("#rowFourBlackPanther").css("display", "inline-block")
                } else {
                    $("#rowFourBlackPanther").css("display", "none");
                }
                if (ThorArray[0] == "4" && ThorArray[1] == true) {
                    $("#rowFourThor").css("display", "inline-block")
                } else {
                    $("#rowFourThor").css("display", "none");
                }

                // also update the health by targeting the health div class
                $(".IronmanHealth").html("Health: " + IronmanArray[2]); $(".CaptainAmericaHealth").html("Health: " + CaptainAmericaArray[2]); $(".BlackPantherHealth").html("Health: " + BlackPantherArray[2]); $(".ThorHealth").html("Health: " + ThorArray[2]);
            }

            // function to select player when tile is clicked and we don't have a player nor a defender
            function selectPlayer() {
                if (playerName == "" && defenderName == "" && isGameOver == false) {
                    playerName = characterClicked;
                    switch (playerName) {
                        case "Ironman":
                            IronmanArray[0] = "2";
                            CaptainAmericaArray[0] = "3";
                            BlackPantherArray[0] = "3";
                            ThorArray[0] = "3";
                            break;
                        case "CaptainAmerica":
                            IronmanArray[0] = "3";
                            CaptainAmericaArray[0] = "2";
                            BlackPantherArray[0] = "3";
                            ThorArray[0] = "3";
                            break;
                        case "BlackPanther":
                            IronmanArray[0] = "3";
                            CaptainAmericaArray[0] = "3";
                            BlackPantherArray[0] = "2";
                            ThorArray[0] = "3";
                            break;
                        case "Thor":
                            IronmanArray[0] = "3";
                            CaptainAmericaArray[0] = "3";
                            BlackPantherArray[0] = "3";
                            ThorArray[0] = "2";
                            break;
                    }
                    characterClicked = "";
                }
            }

            // function to select defender when tile is clicked and
            // we already have a player but not a defender

            function selectDefender() {
                if (((playerName != "" && defenderName == "") || gamePausedForAnotherDefender == true) && isGameOver == false && characterClicked != playerName) {
                    defenderName = characterClicked;
                    switch (defenderName) {
                        case "Ironman":
                            IronmanArray[0] = "4";
                            isGameBegun = true;
                            gamePausedForAnotherDefender = false;
                            break;
                        case "CaptainAmerica":
                            CaptainAmericaArray[0] = "4";
                            isGameBegun = true;
                            gamePausedForAnotherDefender = false;
                            break;
                        case "BlackPanther":
                            BlackPantherArray[0] = "4";
                            isGameBegun = true;
                            gamePausedForAnotherDefender = false;
                            break;
                        case "Thor":
                            ThorArray[0] = "4";
                            isGameBegun = true;
                            gamePausedForAnotherDefender = false;
                            break;
                    };
                    characterClicked = "";
                    $("#gameMessages").html("");
                }
                updateGameBoard();
            }

            // function to see if player or defender have lost
            function havePlayerOrDefenderLost() {
                if (playerName == "Ironman" && IronmanArray[2] <= 0) {
                    console.log("player Ironman died");
                    playerLost();
                } else if (playerName == "CaptainAmerica" && CaptainAmericaArray[2] <= 0) {
                    console.log("player CaptainAmerica died");
                    playerLost();
                } else if (playerName == "BlackPanther" && BlackPantherArray[2] <= 0) {
                    console.log("player BlackPanther died");
                    playerLost();
                } else if (playerName == "Thor" && ThorArray[2] <= 0) {
                    console.log("player Thor died");
                    playerLost();
                } else if (defenderName == "Ironman" && IronmanArray[2] <= 0) {
                    console.log("defender Ironman died");
                    IronmanArray[1] = false;
                    if (gamePausedForAnotherDefender == false) {
                        $("#gameMessages").html("You have defeated " + defenderName + ".<br>You can choose to fight another enemy.");
                    }
                    gamePausedForAnotherDefender = true;
                    consoleLogVariables();
                } else if (defenderName == "CaptainAmerica" && CaptainAmericaArray[2] <= 0) {
                    console.log("defender CaptainAmerica died");
                    CaptainAmericaArray[1] = false;
                    if (gamePausedForAnotherDefender == false) {
                        $("#gameMessages").html("You have defeated " + defenderName + ".<br>You can choose to fight another enemy.");
                    }
                    gamePausedForAnotherDefender = true;
                } else if (defenderName == "BlackPanther" && BlackPantherArray[2] <= 0) {
                    console.log("defender BlackPanther died");
                    BlackPantherArray[1] = false;
                    if (gamePausedForAnotherDefender == false) {
                        $("#gameMessages").html("You have defeated " + defenderName + ".<br>You can choose to fight another enemy.");
                    }
                    gamePausedForAnotherDefender = true;
                } else if (defenderName == "Thor" && ThorArray[2] <= 0) {
                    console.log("defender Thor died");
                    ThorArray[1] = false;
                    if (gamePausedForAnotherDefender == false) {
                        $("#gameMessages").html("You have defeated " + defenderName + ".<br>You can choose to fight another enemy.");
                    }
                    gamePausedForAnotherDefender = true;
                } else {}
                updateGameBoard();
            }

            // function that keeps track of points during attacks
            function attackTracking() {

                // attack cycle of points adjustment
                // only run if game has begun and it is not over
                if (isGameBegun == true && isGameOver != true && gamePausedForAnotherDefender == false) {
                    switch (playerName) {
                        case "Ironman":
                            if (defenderName == "CaptainAmerica") {
                                console.log("your attack: " + IronmanArray[3] + " counter recd: " + CaptainAmericaArray[3]);
                                // player health decreases by defender's attack
                                IronmanArray[2] -= CaptainAmericaArray[3];
                                // defender health decreases by player's attack
                                CaptainAmericaArray[2] -= IronmanArray[3];
                                $("#gameMessages").html("You attacked " + defenderName + " for " + IronmanArray[3] + " damage. <br>" + defenderName + " attacked you back for " + CaptainAmericaArray[3] + " damage");

                                // player's attack increases by their power level
                                IronmanArray[3] += IronmanArray[4];
                                console.log("your attack power: " + IronmanArray[3]);
                            } else if (defenderName == "BlackPanther") {
                                console.log("your attack: " + IronmanArray[3] + " counter recd: " + BlackPantherArray[3]);

                                // player health decreases by defender's attack
                                IronmanArray[2] -= BlackPantherArray[3];

                                // defender health decreases by player's attack
                                BlackPantherArray[2] -= IronmanArray[3];
                                $("#gameMessages").html("You attacked " + defenderName + " for " + IronmanArray[3] + " damage. <br>" + defenderName + " attacked you back for " + BlackPantherArray[3] + " damage");

                                // player's attack increases by their power level
                                IronmanArray[3] += IronmanArray[4];
                                console.log("your attack power: " + IronmanArray[3]);
                            } else if (defenderName == "Thor") {
                                console.log("your attack: " + IronmanArray[3] + " counter recd: " + ThorArray[3]);

                                // player health decreases by defender's attack
                                IronmanArray[2] -= ThorArray[3];

                                // defender health decreases by player's attack
                                ThorArray[2] -= IronmanArray[3];

                                $("#gameMessages").html("You attacked " + defenderName + " for " + IronmanArray[3] + " damage. <br>" + defenderName + " attacked you back for " + ThorArray[3] + " damage");

                                // player's attack increases by their power level
                                IronmanArray[3] += IronmanArray[4];
                                console.log("your attack power: " + IronmanArray[3]);
                            } else {
                                console.log("error");
                            }
                            break;
                        case "CaptainAmerica":
                            if (defenderName == "Ironman") {
                                console.log("your attack: " + CaptainAmericaArray[3] + " counter recd: " + IronmanArray[3]);

                                // player health decreases by defender's attack
                                CaptainAmericaArray[2] -= IronmanArray[3];

                                // defender health decreases by player's attack
                                IronmanArray[2] -= CaptainAmericaArray[3];

                                $("#gameMessages").html("You attacked " + defenderName + " for " + CaptainAmericaArray[3] + " damage. <br>" + defenderName + " attacked you back for " + IronmanArray[3] + " damage");

                                // player's attack increases by their power level
                                CaptainAmericaArray[3] += CaptainAmericaArray[4];
                                console.log("your attack power: " + CaptainAmericaArray[3]);
                            } else if (defenderName == "BlackPanther") {
                                console.log("your attack: " + CaptainAmericaArray[3] + " counter recd: " + BlackPantherArray[3]);

                                // player health decreases by defender's attack
                                CaptainAmericaArray[2] -= BlackPantherArray[3];

                                // defender health decreases by player's attack
                                BlackPantherArray[2] -= CaptainAmericaArray[3];

                                $("#gameMessages").html("You attacked " + defenderName + " for " + CaptainAmericaArray[3] + " damage. <br>" + defenderName + " attacked you back for " + BlackPantherArray[3] + " damage");

                                // player's attack increases by their power level
                                CaptainAmericaArray[3] += CaptainAmericaArray[4];
                                console.log("your attack power: " + CaptainAmericaArray[3]);
                            } else if (defenderName == "Thor") {
                                console.log("your attack: " + CaptainAmericaArray[3] + " counter recd: " + ThorArray[3]);

                                // player health decreases by defender's attack
                                CaptainAmericaArray[2] -= ThorArray[3];

                                // defender health decreases by player's attack
                                ThorArray[2] -= CaptainAmericaArray[3];

                                $("#gameMessages").html("You attacked " + defenderName + " for " + CaptainAmericaArray[3] + " damage. <br>" + defenderName + " attacked you back for " + ThorArray[3] + " damage");

                                // player's attack increases by their power level
                                CaptainAmericaArray[3] += CaptainAmericaArray[4];
                                console.log("your attack power: " + CaptainAmericaArray[3]);
                            } else {
                                console.log("error");
                            }
                            break;
                        case "BlackPanther":
                            if (defenderName == "Ironman") {
                                console.log("your attack: " + BlackPantherArray[3] + " counter recd: " + IronmanArray[3]);

                                // player health decreases by defender's attack
                                BlackPantherArray[2] -= IronmanArray[3];

                                // defender health decreases by player's attack
                                IronmanArray[2] -= BlackPantherArray[3];

                                $("#gameMessages").html("You attacked " + defenderName + " for " + BlackPantherArray[3] + " damage. <br>" + defenderName + " attacked you back for " + IronmanArray[3] + " damage");

                                // player's attack increases by their power level
                                BlackPantherArray[3] += BlackPantherArray[4];
                                console.log("your attack power: " + BlackPantherArray[3]);
                            } else if (defenderName == "CaptainAmerica") {
                                console.log("your attack: " + BlackPantherArray[3] + " counter recd: " + CaptainAmericaArray[3]);

                                // player health decreases by defender's attack
                                BlackPantherArray[2] -= CaptainAmericaArray[3];

                                // defender health decreases by player's attack
                                CaptainAmericaArray[2] -= BlackPantherArray[3];

                                $("#gameMessages").html("You attacked " + defenderName + " for " + BlackPantherArray[3] + " damage. <br>" + defenderName + " attacked you back for " + CaptainAmericaArray[3] + " damage");

                                // player's attack increases by their power level
                                BlackPantherArray[3] += BlackPantherArray[4];
                                console.log("your attack power: " + BlackPantherArray[3]);
                            } else if (defenderName == "Thor") {
                                console.log("your attack: " + BlackPantherArray[3] + " counter recd: " + ThorArray[3]);

                                // player health decreases by defender's attack
                                BlackPantherArray[2] -= ThorArray[3];

                                // defender health decreases by player's attack
                                ThorArray[2] -= BlackPantherArray[3];

                                $("#gameMessages").html("You attacked " + defenderName + " for " + BlackPantherArray[3] + " damage. <br>" + defenderName + " attacked you back for " + ThorArray[3] + " damage");

                                // player's attack increases by their power level
                                BlackPantherArray[3] += BlackPantherArray[4];
                                console.log("your attack power: " + BlackPantherArray[3]);
                            } else {
                                console.log("error");
                            }
                            break;
                        case "Thor":
                            if (defenderName == "Ironman") {
                                console.log("your attack: " + ThorArray[3] + " counter recd: " + IronmanArray[3]);

                                // player health decreases by defender's attack
                                ThorArray[2] -= IronmanArray[3];

                                // defender health decreases by player's attack
                                IronmanArray[2] -= ThorArray[3];

                                $("#gameMessages").html("You attacked " + defenderName + " for " + ThorArray[3] + " damage. <br>" + defenderName + " attacked you back for " + IronmanArray[3] + " damage");

                                // player's attack increases by their power level
                                ThorArray[3] += ThorArray[4];
                                console.log("your attack power: " + ThorArray[3]);
                            } else if (defenderName == "CaptainAmerica") {
                                console.log("your attack: " + ThorArray[3] + " counter recd: " + CaptainAmericaArray[3]);

                                // player health decreases by defender's attack
                                ThorArray[2] -= CaptainAmericaArray[3];

                                // defender health decreases by player's attack
                                CaptainAmericaArray[2] -= ThorArray[3];

                                $("#gameMessages").html("You attacked " + defenderName + " for " + ThorArray[3] + " damage. <br>" + defenderName + " attacked you back for " + CaptainAmericaArray[3] + " damage");

                                // player's attack increases by their power level
                                ThorArray[3] += ThorArray[4];
                                console.log("your attack power: " + ThorArray[3]);
                            } else if (defenderName == "BlackPanther") {
                                console.log("your attack: " + ThorArray[3] + " counter recd: " + BlackPantherArray[3]);

                                // player health decreases by defender's attack
                                ThorArray[2] -= BlackPantherArray[3];

                                // defender health decreases by player's attack
                                BlackPantherArray[2] -= ThorArray[3];
                                $("#gameMessages").html("You attacked " + defenderName + " for " + ThorArray[3] + " damage. <br>" + defenderName + " attacked you back for " + BlackPantherArray[3] + " damage");

                                // player's attack increases by their power level
                                ThorArray[3] += ThorArray[4];
                                console.log("your attack power: " + ThorArray[3]);
                            } else {
                                console.log("error");
                            }
                            break;

                            updateGameBoard()
                    }

                    // check if player or defender have lost
                    havePlayerOrDefenderLost();
                }
                updateGameBoard();
            }

            // function to deal with loss by player
            function playerLost() {
                isGameOver = true;
                $("#gameMessages").html("You have been defeated... GAME OVER!");
                $(".resetButton").css("display", "block");
                consoleLogVariables();
            }

            // function to deal with win by player
            function playerWon() {
                isGameOver = true;
                $("#gameMessages").html("YOU WON!!! GAME OVER!");
                $(".resetButton").css("display", "block");
                consoleLogVariables();
            }

            // function to play attack button sound when game running
            // attack button plays blaster sound when we have player and
            // defender and isGameBegun is true and isGameOver is not false
            function playAttackSound() {
                if (isGameBegun == true && isGameOver == false && gamePausedForAnotherDefender == false) {
                    var audio = new Audio("assets/sounds/blaster-firing.mp3");
                    audio.play();
                }
            }

            // function to see if the player has won
            // this will be the case when all defenders have visibility flag set to false
            function hasPlayerWon() {
                if (playerName == "Ironman" && (CaptainAmericaArray[1] == false && BlackPantherArray[1] == false && ThorArray[1] == false)) {
                    playerWon();
                } else if (playerName == "CaptainAmerica" && (IronmanArray[1] == false && BlackPantherArray[1] == false && ThorArray[1] == false)) {
                    playerWon();
                } else if (playerName == "BlackPanther" && (IronmanArray[1] == false && CaptainAmericaArray[1] == false && ThorArray[1] == false)) {
                    playerWon();
                } else if (playerName == "Thor" && (IronmanArray[1] == false && CaptainAmericaArray[1] == false && BlackPantherArray[1] == false)) {
                    playerWon();
                }
            }

            // ==============
            // MAIN GAME CODE
            // ==============

            consoleLogVariables();
            // begin by making sure game board is set up
            updateGameBoard();

            // if player hasn't been picked yet then
            // it must be the start of the game so play
            // the intro music

            if (playerName == "") {
                var audio = new Audio("assets/sounds/star-wars-theme-song.mp3");
                audio.play();
            };

            // listen for clicks on the character tiles
            $(".gameCharacter").on("click", function () {

                // record what character tile the user clicked
                console.log("clicked: " + $(this).attr("value"));
                characterClicked = $(this).attr("value");

                // if we don't have a player yet, get one
                selectPlayer();

                // if we don't have a defender yet, get one
                selectDefender();
                consoleLogVariables();

                // end always by making sure game board is updated
                updateGameBoard();
            });

            // listen for clicks on the attack button
            $(".attackButton").on("click", function () {

                // play attack button sound when game is running
                // and the attack button is clicked
                playAttackSound();

                // if game is paused for another defender to be picked
                // then say there's no enemy here
                if (gamePausedForAnotherDefender == true) {
                    $("#gameMessages").html("No enemy here...");
                }

                // function to adjust points during attacks
                attackTracking();

                // check if player has won
                hasPlayerWon();
                consoleLogVariables();

                // end by  making sure game board is updated
                updateGameBoard();
            });

            // listen for reset button click
            $(".resetButton").on("click", function () {
            location.href = location.href;
            });
        };
// });