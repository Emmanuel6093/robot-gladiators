var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Create function 
var fight = function(enemyName) { 
  window.alert("Welcome to Robot Gladiators!");
  while(enemyHealth > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  // If player chooses to fight, then fight
  if (promptFight  === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount of set in playerAttack variable
    enemyHealth = enemyHealth - playerAttack; 
    console.log(
      playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
    );

    // Check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyNames + " has died!");
    } else {
      window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }

    // Remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // Check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    // If player chooses to skip 
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // Confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // If yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // Subtract money from playerMoney for skipping 
      playerMoney = playerMoney - 2;
    }
    // If no (false), ask question again by running fight() again
    else {
      fight();
    }
    // If player did not choose 1 or 2 in prompt
  } else {
    window.alert("You need to pick a valid option. Try again!");
  }

};
  }

  

 

  
// Execute function 
for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
  enemyHealth = 50;
  fight(pickedEnemyName);
}