const random_Num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let guess = Number(prompt('Enter a number to guess a number between 1 to 100: '))
while(guess!=random_Num)
{
    if(guess < random_Num) console.log("Your guess is less!");
    else console.log("Your guess is high!");
    guess = Number(prompt('Enter again a number to guess a number between 1 to 100: '))
}
console.log("Congratulations You Just Won The Game!");