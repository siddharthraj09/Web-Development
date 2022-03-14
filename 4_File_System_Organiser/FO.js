// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders


const helpModule=require('./commands/help')
const treeModule = require('./commands/tree');
const organizeModule = require('./commands/oragnize');
const fs = require('fs')
const path = require('path')



let inputArr = process.argv.slice(2)
let command = inputArr[0]

//FDSFS
switch (command) {

    case 'tree':
        treeModule.treeKey(inputArr[1])
        break;
    case 'organize':
        organizeModule.organizeKey(inputArr[1])
        break;
    case 'help':
        helpModule.helpKey()
        break;
    case 'default':
        console.log('Please enter a valid command')
        break
}