$(document).ready(function() {

	var attackerSet = false;
	var defenderSet = false;
	// Store the index of player
	var attacker;
	var defender;
	var numAttack = 0;
	var numOpponents = 3;

	// Create the game character objects and store in array
	var player = [

	{
		name: "Ironman",
		index: 0,
		hp: 25,
		ap: 6,
		cap: 9,
		type: "opponent",
		pic: "assets/images/Ironman.png"
	},

	{
		name: "Captain America",
		index: 1,
		hp: 34,
		ap: 5,
		cap: 5,
		type: "opponent",
		pic: "assets/images/CaptainAmerica.jpg"
	},

	{
		name: "Black Panther",
		index: 2,
		hp: 28,
		ap: 4,
		cap: 10,
		type: "opponent",
		pic: "assets/images/BlackPanther2.png"
	},

	{
		name: "Thor",
		index: 3,
		hp: 30,
		ap: 3,
		cap: 12,
		type: "opponent",
		pic: "assets/images/Thor.png"
    }
]
console.log(player)
    // Create variables to store calls to HTML elements
    function printOpponents() {
        for( var i = 0; i < player.length; i++) {     
        var image = $("<img>");
        image.attr("value", player[i].index);
        image.addClass("imageClass");
        image.attr("data-name", player[i].name);
        image.attr("src", player[i].pic);
        var playerName = $("<p>");
        playerName.append(player[i].name)
        var opponentsDiv = $("<div class='player col-sm-3'></div>");
        opponentsDiv.append(image);
        opponentsDiv.append(playerName);
        $("#player-div").append(opponentsDiv);
                        console.log(image)
        }
    }
	// Place opponents on opponent panel
	printOpponents();
    

	// On-click events \\
    $(".player").on("click", ".imageClass", function() {
        console.log("clicked");
        console.log($(this).data("name"));
        console.log($(this).attr("value"));
        var playerIndex = $(this).attr("value");
        console.log(playerIndex);
    })
    	// Select Players
		// Do nothing if attacker and defender already chosen

        // Choose a defender
        
			// Set defender variables

			// Add Attack button

            // Update HTML
            

			// Turn off onclick functionality

		// Choose attacker

            // Set attacker variables
			
			// update html elements
			
			// Turn off onlcick functionality

	// Attack Button

    // Attack opponent

		// You defeated the opponent

			// Choose another opponent

            // All opponents defeated

		// Counter-Attack

			// Game over.

	 // FUNCTIONS \\

	// prints the attacker stats to html

    // prints the defender stats to html

	// prints the opponent field
});

