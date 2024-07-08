#!/usr/bin/env node
import inquirer from "inquirer";
//  for Hero
class Hero {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    decreaseHealth() {
        this.health -= 20;
    }
    increaseHealth() {
        this.health = 100;
    }
}
// step 2 for enemy
class Enemy {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    decreaseHealth() {
        this.health -= 20;
    }
    increaseHealth() {
        this.health = 100;
    }
}
//  hero object
async function main() {
    const { heroName } = await inquirer.prompt([
        {
            type: "input",
            name: "heroName",
            message: "Enter your Hero Name",
        }
    ]);
    // enemy object
    const { enemyType } = await inquirer.prompt([
        {
            type: "list",
            name: "enemyType",
            choices: ["alien", "witch", "zombie", "Exit"],
            message: "Select the enemy you fight with:"
        }
    ]);
    //    battle feild
    const hero = new Hero(heroName);
    const enemy = new Enemy(enemyType);
    console.log(`${enemy.name} v/s ${hero.name}`);
    //  Action
    do {
        const action = await inquirer.prompt([
            {
                type: "list",
                name: "select",
                choices: ["Attack", "Defend", "Range Target", "Run"],
                message: "Chose the attack type to perform action",
            }
        ]);
        // using switch case
        switch (action) {
            case "Attack":
                const randamNum = Math.random();
                if (randamNum > 0.5) {
                    hero.decreaseHealth();
                    console.log(`${hero.name} health: ${hero.health}`);
                    console.log(`${enemy.name} health: ${enemy.health}`);
                    if (hero.health <= 0) {
                        console.log("yuo loss ! try again");
                        return;
                    }
                }
                else {
                    enemy.decreaseHealth();
                    console.log(`${hero.name} health: ${hero.health}`);
                    console.log(`${enemy.name} health: ${enemy.health}`);
                    if (hero.health <= 0) {
                        console.log("Congratulation! you won");
                        return;
                    }
                    break;
                }
            case "Exit":
                console.log("Exiting...");
                process.exit();
        }
    } while (true);
}
;
main();
