// WORD COUNTER
import inquirer from "inquirer";

let ans=await inquirer.prompt([
    {
        type:'input',
        name:'sent',
        message:'Enter the sentence you want to check the word'

    }

])
let done=ans.sent.trim( ).split(" ")
console.log(done)
console.log(`the sentences has ${done.length}`)